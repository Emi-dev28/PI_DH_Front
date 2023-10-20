// Shadcn dark mode provider
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "./components/theme/theme-toogle";
// Shadcn
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center flex-col gap-5">
        <ThemeToggle />
        <h1 className="text-3xl font-bold underline text-cyan-500">
          Hello world!
        </h1>

        <Button className="mt-2">Prueba</Button>
      </div>
    </ThemeProvider>
  );
}
