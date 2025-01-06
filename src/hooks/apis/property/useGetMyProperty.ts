import { getPropertyById } from "@/apis/properties";
import { RootState } from "@/redux/store"
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux"



export const useGetMyProperty = ()=>{
    const admin = useSelector((state:RootState)=> state.authAdmin.adminToken) || '';

    const {data, isPending, isError, isSuccess} = useQuery({
        queryFn:()=>getPropertyById(admin),
        queryKey:["myProperties"],
        staleTime:30000,
    });

    return {
        data, 
        isPending, 
        isError, 
        isSuccess
    }
}