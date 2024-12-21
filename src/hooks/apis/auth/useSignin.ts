import { signInRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast"
import { useMutation } from "@tanstack/react-query";




const useSignin = () =>{
    const {toast} = useToast();

    const {data,isPending, isSuccess, isError, mutateAsync:SigninMutation} = useMutation({
        mutationFn:signInRequest,
        onSuccess:(data)=>{
            console.log('data',data);
            toast({
                title:"Sign up success",
                description:"redirecting to home page"
            })
        },
        onError:(error)=>{
            console.log("error",error);
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
        SigninMutation,
        data
    }
};

export default useSignin