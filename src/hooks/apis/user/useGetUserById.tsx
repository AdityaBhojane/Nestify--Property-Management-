import { getUserById } from "@/apis/user";
import { RootState } from "@/redux/store"
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux"



export const useGetUserById = ()=>{
    const token = useSelector((state:RootState)=> state.auth.token) || '';
    
    const {data:userResponse, isFetching, isError, error} = useQuery({
        queryFn:()=>getUserById({token}),
        queryKey:["getUser"],
        staleTime:30000
    });

    return {
        userResponse,
        isFetching,
        isError,
        error
    }
}