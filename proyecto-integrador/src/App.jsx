
// Shadcn dark mode provider
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "./components/theme/theme-toogle";
import { AppRouter } from "./router/AppRouter";

// Shadcn
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center flex-col gap-5">
        <ThemeToggle />
        <AppRouter/>
        <Button className="mt-2">Prueba</Button>
      </div>
    </ThemeProvider>
  );
}