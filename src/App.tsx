import { ThemeProvider } from "./components/theme-provider/ThemeProvider"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}
export default App
