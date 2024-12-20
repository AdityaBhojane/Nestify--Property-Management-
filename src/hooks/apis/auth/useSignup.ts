import { signUpRequest } from "@/apis/auth"
import { useToast } from "@/hooks/use-toast"
import { useMutation } from '@tanstack/react-query'



const useSignup = ()=>{
    const {toast} = useToast();
    
    const { isPending, isSuccess, error, mutateAsync:signUpMutation} = useMutation({
        mutationFn:signUpRequest,
        onSuccess:(data)=>{
            console.log("data", data);
            toast({
                title:"Sign up successful ..."
            })
        },
        onError:(error)=>{
            console.log('data',error);
            toast({
                title:"Sign up field (internal server error)"
            })
        },

    });

    return {
        isPending,
        isSuccess,
        error,
        signUpMutation
    }
};

export default useSignup;