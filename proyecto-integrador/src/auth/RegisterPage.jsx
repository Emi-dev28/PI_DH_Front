import { AuthLayout } from "./AuthLayout"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

const formSchema = z.object({
    username: z.string({
        required_error: "Se requiere una nombre de usuario",
    }).min(5, {
        message: "Cinco (5) caracteres mínimo"
    }).max(12, {
        message: "Doce (12) caracteres mínimo"
    }).trim().toLowerCase(),

    email: z.string().email("Debe ser un email válido"),

    password: z.string({
        required_error: "Se requiere una contraseña",
    }).min(6, {
        message: "Seis (6) caracteres mínimo"
    }).max(15, {
        message: "Quince (15) caracteres mínimo"
    }).regex(new RegExp(".*[A-Z].*"), {
        message: "Al menos una letra mayúscula"
    }).regex(new RegExp(".*[a-z].*"), {
        message: "Al menos una letra minúscula"
    }).regex(new RegExp(".*\\d.*"), {
        message: "Al menos un número"
    }).trim()
})

export const RegisterPage = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },

    })

    const onSubmit = (values) => {
        console.log(values);
        
        form.reset()
    }

    return (
        <AuthLayout title="Registro">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre de usuario</FormLabel>
                                <FormControl>
                                    <Input placeholder="persona feliz" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="usuario@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input placeholder="******" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="">Login</Button>
                    <div className="text-end">
                        <span>¿Ya tenés una cuenta?</span>
                        <Link to={"/auth/login"} className="text-blue-700 underline ml-2">Logear</Link>
                    </div>
                </form>
            </Form>
        </AuthLayout>
    )
}
