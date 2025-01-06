/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSXElementConstructor, Key,  ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { useGetMessages } from "@/hooks/apis/message/useGetMessages";
import { Avatar } from "../Avatar/Avatar";
import { MessageInput } from "../Message.tsx/MessageInput";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useSocket } from "@/hooks/apis/socket/useSocket";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ParticipantDataProps {
  username: string;
  images: string;
}


interface ChatWindowProps {
  participantId: string;
  participantsData: ParticipantDataProps;
}


export const ChatWindow: React.FC<ChatWindowProps> = ({ participantId, participantsData }) => {
  const userId = useSelector((state: RootState) => state.auth.userId) || '';
  const navigate = useNavigate();
  const { messages, isFetching, isError } = useGetMessages(participantId);
  const [chatMessages, setChatMessages] = useState(messages || []);
  const { socket, isConnected } = useSocket(userId, participantId);

  // Update chat history when messages change
  useEffect(() => {
    if (messages) {
      setChatMessages(messages.messages || []);
    }
  }, [messages]);

  useEffect(() => {
    if (isConnected) {
      console.log("Listening for incoming messages");
      
      // Ensure the listener is added only once
      const handleIncomingMessage = (message: any) => {
        console.log("New message received:", message);
        console.log('msg added once')
        setChatMessages((prevMessages: any) => [...prevMessages, message]);
      };
  
      socket.on("RECEIVE_PRIVATE_MESSAGE", handleIncomingMessage);
  
      // Cleanup listener on component unmount
      return () => {
        console.log("Cleaning up RECEIVE_PRIVATE_MESSAGE listener");
        socket.off("RECEIVE_PRIVATE_MESSAGE", handleIncomingMessage);
      };
    }
  }, [isConnected, socket]); // Only re-run when `isConnected` changes

  console.log("P -",participantId)
  
  const handleSendMessage = (message: string) => {
    if (userId && participantId && message.trim() !== "") {
      const messageData = {
        userId, // Sender's user ID
        participantId, // Recipient's user ID
        body: message, // Message content
      };
  
      // Emit event to send a private message
      socket.emit("SEND_PRIVATE_MESSAGE", messageData, (response: any) => {
        if (response.success) {
          console.log('msg added twice')
          // Add the sent message to the chat
          console.log("message sent successfully")
        } else {
          console.error("Failed to send message:", response.message);
        }
      });
    }
  };
  

  return (
    <section className="flex flex-col h-[calc(100vh-4rem)] w-full bg-white dark:bg-gray-900">
      {/* Loader for Fetching Messages */}
      {isFetching && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <LoaderCircle className="animate-spin size-10" />
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-red-600">500</h3>
            <h4 className="text-2xl mt-4">Internal Server Error</h4>
            <p className="text-gray-600 mt-2 dark:text-[#ccc]">Oops! Something went wrong on our end.</p>
            <p>
              <span className="text-md cursor-pointer text-blue-400" onClick={() => navigate("/login")}>
                Login
              </span>{" "}
              again
            </p>
          </div>
        </div>
      )}

      {/* Chat Header */}
      <div className="p-4 border-b flex items-center gap-4 dark:border-gray-700">
        <Avatar src={participantsData.images} size="sm" />
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">{participantsData.username}</p>
          <p className="text-sm text-green-500">Active Now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages.length > 0 ? (
          chatMessages.map((message: { userId: string | null; body: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
            <div key={index} className={`flex ${message.userId === userId ? "justify-end" : ""} items-end`}>
              <p
                className={`${message.userId === userId
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  } p-2 rounded-lg max-w-sm`}
              >
                {message.body}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-4">No messages yet.</div>
        )}
      </div>

      {/* Input */}
      <MessageInput sendMessage={handleSendMessage} />
    </section>
  );
};

export default ChatWindow;