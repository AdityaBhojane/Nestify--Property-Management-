import SignIn from "@/pages/Auth/SignIn";
import SignUp from "@/pages/Auth/SignUp";
import Dashboard from "@/pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";


export default function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    
    </>
  )
}
