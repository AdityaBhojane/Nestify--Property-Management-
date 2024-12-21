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
                title:"validation successful",
                description:"redirecting to sign in page ..."
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