import { updateUserById } from "@/apis/user"
import { useToast } from "@/hooks/use-toast";
import { RootState } from "@/redux/store";
import { useMutation } from "@tanstack/react-query"
import { useSelector } from "react-redux"

interface UserData {
    username?:string,
    city?:string,
    phone?:string,
    images?:File | null
}


export const useUpdateUser = ()=>{
    const token = useSelector((state:RootState) => state.auth.token) || '';
    const {toast} = useToast()
    const {mutateAsync:updateUser, isPending, isSuccess, error} = useMutation({
        mutationFn:({userData}:{userData:UserData})=>updateUserById({userData,token}),
        onSuccess:()=>{
            toast({
                title:"update successfully",
                description:"user updated !"
            });
        },
        onError:()=>{
            toast({
                title:"error in dated user",
                description:"something went wrong"
            })
        }
        
    });

    return {
        updateUser,
        isPending,
        isSuccess,
        error
    }
}