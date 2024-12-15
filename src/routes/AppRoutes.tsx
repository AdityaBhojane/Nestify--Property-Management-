import NavPanelContainer from "@/components/NavigationPanel/NavPanelContainer";
import AgentPage from "@/pages/Agent/AgentPage";
import SignIn from "@/pages/Auth/SignIn";
import SignUp from "@/pages/Auth/SignUp";
import Dashboard from "@/pages/Dashboard/Dashboard";
import MessagePanel from "@/pages/Message/MessagePanel";
import ProfilePage from "@/pages/Profile/ProfilePage";
import PropertiesPage from "@/pages/Properties/PropertiesPage";
import { Route, Routes } from "react-router-dom";


export default function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/dashboard" element={ <NavPanelContainer children={<Dashboard/>}/>}/>
        <Route path="/properties" element={ <NavPanelContainer children={<PropertiesPage/>}/>}/>
        <Route path="/agents" element={ <NavPanelContainer children={<AgentPage/>}/>}/>
        <Route path="/messages" element={ <NavPanelContainer children={<MessagePanel/>}/>}/>
        <Route path="/profile" element={ <NavPanelContainer children={<ProfilePage/>}/>}/>
    </Routes>
    
    </>
  )
}
