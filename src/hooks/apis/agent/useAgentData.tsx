import { getAgentData } from "@/apis/agent";
import { RootState } from "@/redux/store";
import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux";


export const useAgentData = ()=>{

    const token = useSelector((state:RootState) => state.auth.token);

    const {data:agents, isPending, isFetching, isError, isSuccess,error} = useQuery({
        queryFn:()=> getAgentData(token as string),
        queryKey:['getAgentData'],
        staleTime:30000
    });

    return {
        agents,
        isPending,
        isFetching,
        isError,
        isSuccess,
        error
    }
}