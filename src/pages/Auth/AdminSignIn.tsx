import SignInAdminForm from "@/components/SignInForm/SignInAdminForm"
import { ModeToggle } from "@/components/ThemeToggle/ModeToggle"


function AdminSignIn() {
  return (
     <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
          <div className="absolute right-20 top-5">
            <ModeToggle/>
          </div>
          <div className="w-full max-w-sm md:max-w-3xl">
           <SignInAdminForm/>
          </div>
        </div>
  )
}

export default AdminSignIn