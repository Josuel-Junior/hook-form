import { useForm } from "react-hook-form"
import { Box, Button, Container, FormControl, TextField, Typography } from "@mui/material"

interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
}

export const Home: React.FC = () => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm<IFormInput>()

    const handleForm = (data: IFormInput) => {

        console.log(data)

        console.log(errors.age)
        reset()

    }


    return (
        <Box sx={{ width: "100vw", minHeight: "100vh", background: "#292929" }}>
            <Container>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
                    <form onSubmit={handleSubmit(handleForm)}>
                        <FormControl sx={{ background: "#fff", padding: "70px", borderRadius: "10px" }}>
                            <TextField id="firstName" label="Digite seu nome" variant="outlined" {...register("firstName", { required: true, minLength: 2 })} placeholder="Digite seu nome" sx={{ my: "15px" }} />
                            {errors.firstName && (<Typography>
                                Campo obrigatório
                            </Typography>)}

                            <TextField id="lastName" label="Digite seu sobrenome" variant="outlined" {...register("lastName", { required: true, minLength: 2 })} placeholder="Digite seu nome" sx={{ my: "15px" }} />
                            {errors.lastName && (<Typography>
                                Campo obrigatório
                            </Typography>)}
                            <TextField id="age" label="Digite sua age" variant="outlined" {...register("age", { required: true, min: 2 })} placeholder="Digite sua age" sx={{ my: "15px" }} />
                            {errors.age && (<Typography>
                                Campo obrigatório
                            </Typography>)}
                            <Button type="submit" variant="contained">Enviar</Button>
                        </FormControl>
                    </form>
                </Box>
            </Container>
        </Box>

    )
}


