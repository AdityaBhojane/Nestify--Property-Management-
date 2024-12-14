import SignInForm from "@/components/SignInForm/SignInFrom";
import { ModeToggle } from "@/components/ThemeToggle/ModeToggle";


export default function SignIn() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="absolute right-20 top-5">
        <ModeToggle />
      </div>
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignInForm />
      </div>
    </div>
  )
}
