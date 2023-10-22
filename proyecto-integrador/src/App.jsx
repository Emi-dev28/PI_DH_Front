// Shadcn dark mode provider
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "./components/theme/theme-toogle";
// Shadcn components
import { Toaster } from "@/components/ui/toaster";
// React Router
import { useLocation } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
// Components:
import { Footer } from "@/components/Footer";

export default function App() {
  const location = useLocation();
  const isAdminPages = ["/administrador"].includes(location.pathname);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      {/* Acá va el header */}

      <AppRouter />

      {!isAdminPages && <Footer />}
    </ThemeProvider>
  );
}
