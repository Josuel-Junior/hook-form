import { useForm } from "react-hook-form"
import { Box, Button, Container, FormControl, TextField } from "@mui/material"

interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
}

export const Home: React.FC = () => {

    const { handleSubmit, register } = useForm<IFormInput>()

    const handleForm = (data: IFormInput) => {

        console.log(data)

    }


    return (
        <Box sx={{ width: "100vw", minHeight: "100vh", background:"#292929" }}>
            <Container>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
                    <FormControl onSubmit={handleSubmit(handleForm)} sx={{ background: "#fff", padding: "70px", borderRadius:"10px" }}>
                       
                        <TextField id="firstName" label="Digite seu nome" variant="outlined" {...register("firstName")} placeholder="Digite seu nome" sx={{my:"15px"}}/>
                        
                        <TextField id="lastName" label="Digite seu nome" variant="outlined" {...register("lastName")} placeholder="Digite seu nome" sx={{my:"15px"}}/>
                        
                        <TextField id="age" label="Digite sua age" variant="outlined" {...register("age")} placeholder="Digite sua age" sx={{my:"15px"}}/>
                       
                        <Button type="submit" variant="contained">Enviar</Button>
                    </FormControl>
                </Box>
            </Container>
        </Box>

    )
}


