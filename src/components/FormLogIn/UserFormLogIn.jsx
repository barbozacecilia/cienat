import { useState } from "react";
import { Box, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import {verifyEmail, verifyPassword} from "../FormSignUp/validation"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


function UserFormLogIn (props){

  const auth = useAuth()  
  const{ updateStep }=props
    const[email, setEmail]=useState({value: '', valid: null})
    const[password, setPassword]=useState({value: '', valid: null})

    const navigate = useNavigate();

      return ( 
        <Box maxWidth="lg"
        component="form"
        autoComplete="off" 
        onSubmit={(e) => {
        // Handle form submission for user login
            e.preventDefault();
            auth.loginUser(email ,password)
            //.then((result) => {
             // console.log(result);
          
            //})
            .catch((error) => console.log(error.message));
            if (email.valid && password.valid) {
              console.log("ok");
              navigate("/");
            } else {
              console.log("Revisa datos");
            }
          }}>
               
                <TextField
                required
                id="email"
                type="email"
                label="Email"
                variant="filled"
                fullWidth
                helperText={email.valid === false && "Escribe un email válido"}
                error={email.valid === false}
                margin="normal"
                onChange={(e)=>{
                    const emailValue = e.target.value
                    const verify = verifyEmail(emailValue)
                    setEmail({value:emailValue, valid: verify})
                }}
                value={email.value}
                />         
                <TextField
                required
                id="password"
                type="password"
                label="password"
                variant="filled"
                fullWidth
                helperText={password.valid === false && "Escribe una contraseña válida"}
                error={password.valid === false}
                margin="normal"
                onChange={(e)=>{
                    const passwordValue = e.target.value
                    setPassword({value:passwordValue, valid: verifyPassword(passwordValue)})
                }}
                value={password.value}
                />
            
            <Button 
            variant="contained"
            type="submit">Registrarse</Button>
        </Box>
)
}

export default UserFormLogIn;