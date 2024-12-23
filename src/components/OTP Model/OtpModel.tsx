
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { InputOTPDemo } from "./InputOTP"
import { MouseEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import useOTP from "@/hooks/apis/auth/userOTP";
import { Loader2 } from "lucide-react";

export function OtpModel({ model, setModel, userId }: { model: boolean, setModel: React.Dispatch<React.SetStateAction<boolean>>, userId:string }) {
    const [otp, setOtp] = useState<string>("")
    const navigate = useNavigate();
    const [validation, setValidation] = useState(false);
    const { isPending, isSuccess, data, OtpMutation } = useOTP();

    const handleOtpSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!otp || parseInt(otp) < 4 || isNaN(parseInt(otp))) {
            setValidation(true)
            return;
        };
        setValidation(false);
        OtpMutation({id:userId,otp})
    };

    useEffect(()=>{
    if(isSuccess && data.response){
      setTimeout(() => {
        navigate('/signin') 
      }, 3000);
    };

  },[isSuccess,navigate,data])


    return (
        <Dialog
            open={model}
            onOpenChange={setModel}
        >
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Enter your One Time Password</DialogTitle>
                    <DialogDescription>
                        check your email for OTP
                    </DialogDescription>
                </DialogHeader>
                <InputOTPDemo otp={otp} setOtp={setOtp} />
                <div className="w-full h-2 mb-2">
                    {validation && <p className="text-sm text-red-600 ">Please enter a valid OTP</p>}
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button onClick={() => setModel(false)} type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button onClick={handleOtpSubmit} type="button" variant="outline">
                            Submit
                            {isPending && <Loader2 className="animate-spin" />}
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
