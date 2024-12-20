
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export function InputOTPDemo({otp, setOtp}:{otp:string, setOtp:React.Dispatch<React.SetStateAction<string>>}) {
//   const [otp, setOtp] = useState<string>(""); 
//   const handleOtpChange = (value: string) => {
//     setOtp(value); 
//   };

  return (
    <div>
      <InputOTP
        maxLength={4} // Length of OTP
        value={otp} // Bind OTP state
        onChange={setOtp} // Update state on change
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} /> 
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}