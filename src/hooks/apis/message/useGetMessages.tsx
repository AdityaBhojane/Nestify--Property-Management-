import { getMessages } from "@/apis/messages";
import { RootState } from "@/redux/store"
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux"



export const useGetMessages = (participantId: string)=>{
    const token = useSelector((state:RootState)=>state.auth.token) || "";

    const {data:messages, isSuccess, isFetching, isError} = useQuery({
        queryFn:()=>getMessages(token,  participantId),
        queryKey:["fetchMessages", participantId],
        staleTime:30000
    });
    return {
        messages,
        isSuccess,
        isFetching,
        isError
    }
}