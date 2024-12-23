import Modals from "./components/modals/Modals"
import { ThemeProvider } from "./components/theme-provider/ThemeProvider"
import { Toaster } from "./components/ui/toaster"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AppRoutes />
        <Modals/>
        <Toaster/>
      </ThemeProvider>
    </>
  )
}
export default App
