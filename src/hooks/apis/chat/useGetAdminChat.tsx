import { getAdminChat } from "@/apis/chat";
import { RootState } from "@/redux/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";



export const useGetAdminChat = ()=>{
    const token = useSelector((state:RootState)=>state.authAdmin.adminToken) || "";
    const isAdmin = useSelector((state: RootState) => state.authAdmin.isAdmin); 

    const {data:usersChats, isSuccess, isFetching, isError} = useQuery({
        queryFn:()=>getAdminChat(token),
        queryKey:["fetchAdminMessages"],
        staleTime:30000,
        enabled:isAdmin
    });
    return {
        usersChats,
        isSuccess,
        isFetching,
        isError
    }
}