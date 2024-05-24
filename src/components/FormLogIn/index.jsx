import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import UserFormLogIn from './UserFormLogIn';



function FormLogIn(props){
      return ( 
        <Container maxWidth="lg">
            <Typography variant="h4" align="center">¡Bienvenido!</Typography >
            <UserFormLogIn/>
        </Container>
)
}

export default FormLogIn;