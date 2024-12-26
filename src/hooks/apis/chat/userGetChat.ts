import { getChat } from "@/apis/chat";
import { RootState } from "@/redux/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";



export const useGetChat = ()=>{
    const token = useSelector((state:RootState)=>state.auth.token) || "";

    const {data:chatList, isSuccess, isFetching, isError} = useQuery({
        queryFn:()=>getChat(token),
        queryKey:["fetchMessages"],
        staleTime:30000
    });
    return {
        chatList,
        isSuccess,
        isFetching,
        isError
    }
}