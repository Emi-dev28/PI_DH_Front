import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-cyan-500">
        Hello world!
        Voten a Massa
      </h1>

      <Button className="mt-2">Delete</Button>
      
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>

    </div>
  )
}