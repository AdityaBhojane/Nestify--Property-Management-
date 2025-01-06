import { ChatSideBar } from "@/components/ChatSiderBar/ChatSideBar";
import { ChatWindow } from "@/components/ChatWindow.tsx/ChatWindow";
import StartConversation from "@/components/startConverstaton/StartConversation";
import { useGetAdminChat } from "@/hooks/apis/chat/useGetAdminChat";
import { useGetChat } from "@/hooks/apis/chat/userGetChat";
import { LoaderCircle } from "lucide-react";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const MessagePanel = () => {

  const [senderId, setSenderId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState([]);
  const [participantsData, setParticipantsData] = useState({
    username: '',
    images: '',
  });

  const { usersChats, isFetching:isAdminListFetching, isError:isAdminListError } = useGetAdminChat();
  const { chatList, isFetching: isUserChatFetching, isError: isUserChatError } = useGetChat();

  useEffect(()=>{
    if(isAdminListFetching || isUserChatFetching){
      setIsLoading(true)
    }else{
      setIsLoading(false)
    };
    if(isAdminListError || isUserChatError){
      setIsError(true)
    }else{
      setIsError(false)
    };
    if(chatList){
      setList(chatList)
    };
    if(usersChats){
      setList(usersChats)
    }
  },[isAdminListFetching,isAdminListError, isUserChatFetching,isUserChatError,chatList,usersChats])


  console.log(list);
  
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {isLoading && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoaderCircle className="animate-spin size-10" />
      </div>}
      {isError&& <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
          <h3 className="text-5xl font-bold text-red-600">500</h3>
          <h4 className="text-2xl mt-4">Internal Server Error</h4>
          <p className="text-gray-600 mt-2 dark:text-[#ccc]">Oops! Something went wrong on our end.</p>
          <p><span className="text-md cursor-pointer text-blue-400" onClick={() => navigate("./login")}>login</span> again</p>
        </div>
      </div>}
      {list?.length == 0 && <StartConversation
        title={'No Conversations Yet'}
        message={" It looks like you haven't started a conversation yet. Start chatting with one of our agents below!"}
        button={true}
      />}
      {list?.length != 0 && <>
        <ChatSideBar participants={list?.participants} setSenderId={setSenderId} setParticipantsData={setParticipantsData} />
        {senderId? <ChatWindow participantId={senderId} participantsData={participantsData} />:
        <StartConversation
          title={'Start Your Conversation'}
          message={"Here you can see all your chats"}
          button={false}
        />}
      </>}
    </div>
  );
};

export default MessagePanel;

