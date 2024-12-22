import NavPanelContainer from "@/components/NavigationPanel/NavPanelContainer";
import ProtectedRoute from "@/components/protectedRoute/ProtectedRoute";
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<ProtectedRoute><NavPanelContainer children={<Dashboard />} /></ProtectedRoute>} />
        <Route path="/properties" element={<ProtectedRoute><NavPanelContainer children={<PropertiesPage />} /></ProtectedRoute>} />
        <Route path="/agents" element={<ProtectedRoute><NavPanelContainer children={<AgentPage />} /></ProtectedRoute>} />
        <Route path="/messages" element={<ProtectedRoute><NavPanelContainer children={<MessagePanel />} /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><NavPanelContainer children={<ProfilePage />} /></ProtectedRoute>} />
      </Routes>

    </>
  )
}
