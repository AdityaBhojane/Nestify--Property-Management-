import { Send } from "lucide-react";

export const MessageInput = () => {
  return (
    <div className="p-4 border-t flex items-center bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <input
        type="text"
        placeholder="Write a message..."
        className="flex-1 border rounded-full p-2 px-4 focus:outline-none dark:bg-gray-700 dark:text-white"
      />
      <button className="ml-2 p-2 bg-blue-500 rounded-full text-white">
        <Send size={20} />
      </button>
    </div>
  );
};
