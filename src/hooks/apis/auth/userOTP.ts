import { OTPRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast"
import { useMutation } from "@tanstack/react-query";



const useOTP = ()=>{
    const {toast} = useToast();

    const {isPending, isSuccess,data, mutateAsync:OtpMutation} = useMutation({
        mutationFn:OTPRequest,
        onSuccess:(data)=>{
            console.log('data',data);
            toast({
                title:"Sign in successful",
                description:"redirecting to home page ..."
            })
        },
        onError:(error)=>{
            console.log('error',error);
            toast({
                title:"something is wrong",
                description:"Internal Server Error"
            })
        }
    });
    return {
        isPending,
        isSuccess,
        data,
        OtpMutation
    }
};

export default useOTP;