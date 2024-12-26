/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useGetMessages } from "@/hooks/apis/message/useGetMessages";
import { Avatar } from "../Avatar/Avatar";
import { MessageInput } from "../Message.tsx/MessageInput";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useSocket } from "@/hooks/apis/socket/useSocket";
import { sendMessage } from "@/utils/socket";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ParticipantDataProps {
  username: string;
  images: string;
}


export const ChatWindow = ({ participantId, participantsData }: { participantId: string; participantsData: ParticipantDataProps }) => {
  
  const userId = useSelector((state: RootState) => state.auth.userId)
  const navigate = useNavigate();
  
  // get messages api 
  const { messages, isFetching, isError } = useGetMessages(participantId);
  const [chatMessages, setChatMessages] = useState(messages || []);
 console.log(messages)

  // Real-time message listener
  useSocket(participantId, (newMessage) => {
    setChatMessages((prev: any) => [...prev, newMessage]);
  });
  const handleSendMessage = async (messageBody: string) => {
    const newMessage = {
      body: messageBody,
      userId: userId, // Replace with actual userId
      participantId: participantId,
    } as {
      body: string,
      userId: string,
      participantId: string
    };
    try {
      const sentMessage = await sendMessage(newMessage);
      setChatMessages((prev: any) => [...prev, sentMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };


  useEffect(() => {
    setChatMessages([])
    if(messages){
      const history = messages?.messages
      setChatMessages(history)
    }
  }, [messages, participantId])

  return (
    <section className="flex flex-col h-[calc(100vh-4rem)] w-full bg-white dark:bg-gray-900">
      {isFetching && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoaderCircle className="animate-spin size-10" />
      </div>}
      {isError && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
          <h3 className="text-5xl font-bold text-red-600">500</h3>
          <h4 className="text-2xl mt-4">Internal Server Error</h4>
          <p className="text-gray-600 mt-2 dark:text-[#ccc]">Oops! Something went wrong on our end.</p>
          <p><span className="text-md cursor-pointer text-blue-400" onClick={() => navigate("./login")}>login</span> again</p>
        </div>
      </div>}
      <div className="p-4 border-b flex items-center gap-4 dark:border-gray-700">
        <Avatar src={participantsData.images} size="sm" />
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">
            {participantsData.username}
          </p>
          <p className="text-sm text-green-500">Active Now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages?.map((user: { userId: string; body: string }) => {
          if (user.userId === participantId) {
            return (
              <div key={user._id} className="flex items-end">
                <p className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded-lg max-w-sm">
                  {user.body}
                </p>
              </div>
            );
          }
          return (
            <div key={user._id} className="flex justify-end items-end">
              <p className="bg-blue-500 text-white p-2 rounded-lg max-w-sm">
                {user.body}
              </p>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <MessageInput sendMessage={handleSendMessage} />
    </section>
  );
};
