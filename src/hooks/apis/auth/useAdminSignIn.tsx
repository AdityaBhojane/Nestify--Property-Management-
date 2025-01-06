import { signInAdminRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast"
import { useMutation } from "@tanstack/react-query";




const useAdminSignin = () =>{
    const {toast} = useToast();

    const {data,isPending, isSuccess, isError, mutateAsync:SigninMutation, error} = useMutation({
        mutationFn:signInAdminRequest,
        onSuccess:(data)=>{
            console.log('data a',data);
            toast({
                title:"Admin Sign up success",
                description:"redirecting to home page"
            })
        },
        onError:(error)=>{
            console.log("error",error);
            toast({
                title:"something is wrong with admin server",
                description:"internal server error"
            })
        }
    });

    return {
        isError,
        isPending,
        isSuccess,
        SigninMutation,
        data,
        error
    }
};

export default useAdminSignin