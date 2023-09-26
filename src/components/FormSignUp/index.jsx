import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

function FormSignUp (){
      return ( 
        <Container maxWidth="lg">
            <Typography variant="h4" align="center">¡Sumate a nuestra comunidad!</Typography >
            <form>
                <TextField
                required
                id="name"
                label="Nombre"
                defaultValue=""
                variant="filled"
                fullWidth
                margin="normal"
                />         
                <TextField
                required
                id="lastName"
                label="Apellido"
                defaultValue=""
                variant="filled"
                fullWidth
                margin="normal"
                />         
                <TextField
                required
                id="email"
                label="Email"
                defaultValue=""
                variant="filled"
                fullWidth
                margin="normal"
                />
            <Button variant="contained">Registrarse</Button>
        </form>
        </Container>
)
}

export default FormSignUp;