import SignUpForm from "@/components/SignUpForm/SignUpForm";
import { ModeToggle } from "@/components/ThemeToggle/ModeToggle";


export default function SignUp() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="absolute right-20 top-5">
        <ModeToggle />
      </div>
      <div className="w-full max-w-sm md:max-w-3xl">
        <span className="text-red-600">Notice: Backend might enter sleep mode. Check and wake it up
          <a className="text-blue-600 mx-2 font-bold" href="https://property-management-backend-fp49.onrender.com/ping">here</a>
        </span>
        <SignUpForm />
      </div>
    </div>
  )
}
