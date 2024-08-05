import { useState } from "react";
import { Box, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { verifyPassword, verifyEmail } from "../FormSignUp/validation"


function UserFormLogIn(props) {

  const auth = useAuth()
  const { updateStep } = props
  const [email, setEmail] = useState({ value: '', valid: null })
  const [password, setPassword] = useState({ value: '', valid: null })
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const  handleSubmit = async (e)=>{
     // Handle form submission for user login
     e.preventDefault();

     let isValid = true;

      // Validar email
     if (!verifyEmail(email.value)) {
      setEmail({ ...email, valid: false });
      isValid = false;
    } else {
      setEmail({ ...email, valid: true });
    }

    // Validar contraseña
    if (!verifyPassword(password.value)) {
      setPassword({ ...password, valid: false });
      isValid = false;
    } else {
      setPassword({ ...password, valid: true });
    }


    if (isValid) {
      try {
        //{await auth.loginUser(email.value, password.value);}
        auth.loginUser(email.value, password.value)
        navigate("/");
        console.log("Login successful");
      } catch (error) {
        setError(error.message);
        console.log('Error:', error.message);
      }
    }
  }

  return (
    <Box maxWidth="lg"
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}>

      <TextField
        required
        id="email"
        type="email"
        label="Email"
        variant="filled"
        fullWidth
        helperText={email.valid === false ? 'Revisa tu email' : ''}
        error={email.valid === false}
        margin="normal"
        onChange={(e) => setEmail({ value: e.target.value, valid: verifyEmail(e.target.value) })}
        value={email.value}
      />
      <TextField
        required
        id="password"
        type="password"
        label="password"
        variant="filled"
        fullWidth
        helperText={password.valid === false ? 'Deben ser entre 7 y 12 caracteres.' : ''}
        error={password.valid === false}
        margin="normal"
        onChange={(e) => {
          setPassword({ value: e.target.value, valid: verifyPassword(e.target.value) })
        }}
        value={password.value}
      />

      <Button variant="contained" type="submit" className="btn-access">
        Acceder
      </Button>
    </Box>
  )
}

export default UserFormLogIn;

/*helperText={password.valid === false && "revisa tu contrasena"}
              helperText={error ? error.toString() : ''}
              
              error={password.valid === false}
              
              REVISAR SIEMPRE QUE EL helperText no debe ser un objeto, sino un texto plano... 
              
              (e) => {
        // Handle form submission for user login
        e.preventDefault();
        try {
          auth.loginUser(email, password)
          navigate("/");
          console.log("ok");

        } catch (error) {
          setError(error.message)
          console.log('id:', email, password)
        }
      }*/