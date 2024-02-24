import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import * as z from "zod"
import { Box, Button, Container, FormControl, TextField, Typography } from "@mui/material"


type IFormInput = z.infer<typeof schema>

const schema = z.object({
    firstName: z.string().min(1, { message: "Primeiro nome é obrigatório!" }).min(3, { message: "Primeiro nome deve conter pelo menos 3 caracteres!" }),
    lastName: z.string().min(1, { message: "Sobrenome é obrigatório!" }).min(3, { message: "Sobrenome deve conter pelo menos 3 caracteres!" }),
    age: z.number({ required_error: "O campo 'Idade' é obrigatório!", invalid_type_error: "Campo de idade é obrigatório" }).min(18, { message: "Você deve ter no mínimo 18 anos" }).max(90, { message: "Você deve ter no máximo 80 anos" })
})

export const Home: React.FC = () => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm<IFormInput>({ resolver: zodResolver(schema) })

    const handleForm = (data: IFormInput) => {
        alert(`Nome:${data.firstName} \n Sobrenome: ${data.lastName} \n Idade:${data.age}`)
        reset()
    }


    return (
        <Box sx={{ width: "100vw", minHeight: "100vh", background: "#292929" }}>
            <Container>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
                    <form onSubmit={handleSubmit(handleForm)}>
                        <FormControl sx={{ background: "#fff", padding: "70px", borderRadius: "10px" }}>
                            <TextField id="firstName" error={!!errors.firstName?.message} label="Digite seu nome" variant="outlined" {...register("firstName")} placeholder="Digite seu nome" />
                            {errors.firstName?.message && (<label htmlFor="firstName"><Typography sx={{ my: "5px" }}>
                                {errors.firstName?.message}
                            </Typography>
                            </label>)}

                            <TextField id="lastName" label="Digite seu sobrenome" error={!!errors.lastName?.message} variant="outlined" {...register("lastName")} placeholder="Digite seu nome" sx={{ mt: "15px" }} />
                            {errors.lastName?.message && (<label htmlFor="lastName"><Typography sx={{ my: "5px" }}>
                                {errors.lastName?.message}
                            </Typography>
                            </label>)}
                            <TextField type="number" id="age" label="Digite sua idade" error={!!errors.age?.message} variant="outlined" {...register("age", { valueAsNumber: true })} placeholder="Digite sua age" sx={{ mt: "15px" }} />
                            {errors.age?.message && (
                                <label htmlFor="age"><Typography sx={{ my: "5px" }}>
                                    {errors.age?.message}
                                </Typography></label>)}
                            <Button type="submit" variant="contained" sx={{ mt: "20px" }}>Enviar</Button>
                        </FormControl>
                    </form>
                </Box>
            </Container>
        </Box>

    )
}


