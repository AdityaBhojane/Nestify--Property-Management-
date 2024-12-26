import { Send } from "lucide-react";
import { useState } from "react";

interface MessageInputProps {
  sendMessage: (messageBody: string) => void;
}

export const MessageInput = ({ sendMessage }: MessageInputProps) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage); // Emit message through socket
      setNewMessage(""); // Clear input
    }
  };
  return (
    <div className="p-4 border-t flex items-center bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <input
        type="text"
        placeholder="Write a message..."
        className="flex-1 border rounded-full p-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-white"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage()
          }
        }} 
      />
      <button 
      onClick={(handleSendMessage)} 
      className="ml-2 p-2 bg-blue-500 rounded-full text-white">
        <Send size={20} />
      </button>
    </div>
  );
};
