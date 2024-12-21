import { getProperty } from "@/apis/properties"
import { RootState } from "@/redux/store";
import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux";


export const useGetProperties = ()=>{
    const token = useSelector((state:RootState) => state.auth.token);
    const {data:properties, isPending, isFetching, isError, isSuccess} = useQuery({
        queryFn:()=> getProperty(token as string),
        queryKey:['getProperties'],
        staleTime:30000
    });

    return {
        properties,
        isPending,
        isFetching,
        isError,
        isSuccess
    }
}