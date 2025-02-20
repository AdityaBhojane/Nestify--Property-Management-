import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Building2, MessageCircleMore } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCreateChat from "@/hooks/apis/chat/useCreateChat";
import { useEffect } from "react";


interface AgentCardProps {
  id:string | null,
  name: string;
  role: string;
  email: string;
  phone?: string;
  location: string;
  propertiesCount: number;
  imageUrl: string;
}


export function AgentCard({
  id,
  name,
  role,
  email,
  phone,
  location,
  propertiesCount,
  imageUrl,
}: AgentCardProps) {

  const navigate = useNavigate();

  const {createChatHandler, isSuccess, error } = useCreateChat()

  const handleMessageConversation = ()=>{
    createChatHandler({senderId:id})
  }


  useEffect(()=>{
    if(isSuccess){
      setTimeout(() => {
        navigate('/messages')
      }, 2000);
    }
  },[isSuccess,navigate])

  useEffect(()=>{
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if(error?.error== "already exits"){
      setTimeout(() => {
        navigate('/messages')
      }, 2000);
    }
  },[error,navigate])


  return (
    <Card className="flex md:flex-row items-center p-4 m-2 gap-6 shadow-sm">
      {/* Avatar Section */}
      <Avatar className="w-32 h-32 rounded-md">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      {/* Content Section */}
      <CardContent className="flex-1 p-0">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl  md:text-left">{name}</CardTitle>
          <p className="text-sm text-gray-500 md:text-left">{role}</p>
        </CardHeader>

        {/* Details */}
        <div className="flex flex-col md:flex-row md:gap-4 text-gray-500 mt-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </div>
        </div>
          <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
            <Phone className="w-4 h-4" />
            <span>{phone? phone:"Not available"}</span>
          </div>

        <div className="flex flex-col md:flex-row md:gap-4 mt-2 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            <span>{propertiesCount} Properties</span>
          </div>
        </div>
      </CardContent>

      {/* Menu Icon */}
      <MessageCircleMore onClick={handleMessageConversation} className="text-gray-400 cursor-pointer " />
    </Card>
  );
}
