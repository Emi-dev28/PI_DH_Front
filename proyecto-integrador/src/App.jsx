// Shadcn dark mode provider
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "./components/theme/theme-toogle";
// Shadcn components
import { Toaster } from "@/components/ui/toaster";
// React Router
import { useLocation } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";



export default function App() {
  const location = useLocation();
  const isAdminPages = ["/administrador", "/lista-productos"].includes(
    location.pathname
  );

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

      <div className="flex flex-col min-h-screen bg-slate-50">
        <Toaster />
        <Navbar />
        {/* Acá va el header */}

        <AppRouter />

        {!isAdminPages && <Footer />}
      </div>

    </ThemeProvider>

  );
}
