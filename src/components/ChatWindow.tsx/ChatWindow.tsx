import { Avatar } from "../Avatar/Avatar";
import { MessageInput } from "../Message.tsx/MessageInput";


export const ChatWindow = () => {
  return (
    <section className="flex flex-col h-[calc(100vh-4rem)] w-full bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-4 dark:border-gray-700">
        <Avatar src="https://i.pravatar.cc/150" size="sm" />
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">
            Jane Cooper
          </p>
          <p className="text-sm text-green-500">Active Now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-end">
          <p className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded-lg max-w-sm">
            Hello! How are you? 😊
          </p>
        </div>
        <div className="flex justify-end items-end">
          <p className="bg-blue-500 text-white p-2 rounded-lg max-w-sm">
            I’m good, and you? 👍
          </p>
        </div>
      </div>

      {/* Input */}
      <MessageInput />
    </section>
  );
};
