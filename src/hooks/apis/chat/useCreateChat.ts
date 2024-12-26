import { createChat } from "@/apis/chat";
import { useToast } from "@/hooks/use-toast"
import { RootState } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";




const useCreateChat = () =>{
    const {toast} = useToast();
    const token = useSelector((state:RootState)=>state.auth.token) || "";

    const {data,isPending, isSuccess, isError, mutateAsync:createChatHandler, error} = useMutation({
        mutationFn:({senderId}:{senderId: string | null})=>createChat(token,senderId),
        onSuccess:(data)=>{
            console.log('data',data);
            toast({
                title:"Sign up success",
                description:"redirecting to chat page"
            })
        },
        onError:(error)=>{
            console.log("error",error);
             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            if(error?.error== "already exits"){
                toast({
                    title:"Conversation available",
                    description:"redirecting to chat page"
                })
                return;
            }
            toast({
                title:"something is wrong",
                description:"internal server error"
            })
        }
    });

    return {
        isError,
        isPending,
        isSuccess,
        createChatHandler,
        data,
        error
    }
};

export default useCreateChat