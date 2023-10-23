
// Shadcn dark mode provider
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "./components/theme/theme-toogle";
import { AppRouter } from "./router/AppRouter";
import { Toaster } from "@/components/ui/toaster"
import { Navbar }  from "./components/Navbar";
import { Footer } from "./components/Footer";


export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      {/* 
      <div className="flex items-center flex-col gap-5">
        <ThemeToggle />
      </div> 
      */}
      <AppRouter />
      <Toaster />
      <Footer/>
    </ThemeProvider>
    
  );
}