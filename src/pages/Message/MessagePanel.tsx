import { ChatSideBar } from "@/components/ChatSiderBar/ChatSideBar";
import { ChatWindow } from "@/components/ChatWindow.tsx/ChatWindow";



const MessagePanel = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatSideBar />
      <ChatWindow />
    </div>
  );
};

export default MessagePanel;
