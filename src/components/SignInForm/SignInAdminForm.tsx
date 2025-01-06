import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import loginImage from "@/assets/login.webp"
import { useNavigate } from "react-router-dom"
import { MouseEvent, useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useDispatch } from "react-redux"
import { validateEmail } from "@/helper/emailValidator"
import useAdminSignin from "@/hooks/apis/auth/useAdminSignIn"
import { setAdminAuthData } from "@/redux/slice/adminAuthSlice"
import useSignin from "@/hooks/apis/auth/useSignin"
import { setAuthData } from "@/redux/slice/authSlice"


export default function SignInAdminForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);
  const [handleError, setErrorText] = useState("")
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const { data, isPending, isSuccess, SigninMutation: adminSignIn, isError, error } = useAdminSignin()
  const { data:userData, SigninMutation, isSuccess:isSuccessUser} = useSignin()

  const handleSignin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      console.log('username and password is required');
      setErrorText("email and password is required")
      setValidation(true);
      return;
    }
    if (!validateEmail(form.email)) {
      setErrorText("invalid email format");
      setValidation(true);
      return;
    }
    if (form.password.length < 6) {
      setErrorText("password must contain at least 6 characters");
      setValidation(true);
      return;
    }

    setValidation(false);
    SigninMutation({
      email: form.email,
      password: form.password
    })

  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAdminAuthData({ userId: data?.id, token: data?.token }))
      setTimeout(() => {
        navigate('/dashboard/admin')
      }, 3000);
    };

  }, [data?.id, data?.token, dispatch, isSuccess, navigate]);
  
  
  useEffect(() => {
      if (isSuccessUser) {
        dispatch(setAuthData({ userId: userData?.id, token: userData?.token }))
      };
  
    }, [userData?.id, userData?.token, dispatch, isSuccessUser, navigate])

  useEffect(() => {
    if (isError && error) {
      setErrorText(error ? "check email and password" : "try again ...");
      setValidation(true);
    };
  }, [isError, error])


   console.log(isSuccessUser)
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>

      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Admin Auth</h1>
                <p className="text-balance text-muted-foreground">
                  sign in to your Nestify account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
              </div>
              <div className="w-full h-2">
                {validation && <p className="text-sm text-red-600 ">{handleError}</p>}
              </div>
              <Button
                onClick={handleSignin}
                type="submit"
                className="w-full">
                Sign in
                {isPending && <Loader2 className="animate-spin" />}
              </Button>
              <div className="relative text-center  text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <Button onClick={() => {
                SigninMutation({
                  email: "natvarp6062@gmail.com",
                  password: "p12345"
                })
                  adminSignIn({
                    email: "natvarp6062@gmail.com",
                    password: "p12345"
                  });
                
              }} variant="outline" className="w-full">
                Guest Login admin
              </Button>
              <div className="text-center text-sm font-thin">
                Back to dashboard ?{" "}
                <span onClick={() => navigate('/dashboard')} className="underline underline-offset-4 cursor-pointer">
                  Home
                </span>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src={loginImage}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
