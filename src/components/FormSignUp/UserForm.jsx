import { useState } from "react";
import { Box, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import {verifyEmail, verifyPassword} from "./validation"

function UserForm (props){
  const{ updateStep }=props
    const[email, setEmail]=useState({value: '', valid: null})
    const[password, setPassword]=useState({value: '', valid: null})

      return ( 
        <Box maxWidth="lg"
        component="form"
        autoComplete="off" 
        onSubmit={(e) => {
            e.preventDefault();
            if (email.valid && password.valid) {
              console.log("Siguiente formulario");
              console.log(email, password);
              updateStep(1)
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

export default UserForm;