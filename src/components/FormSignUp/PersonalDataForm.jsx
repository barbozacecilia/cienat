import { useState } from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import {verifyName, verifyLastName} from "./validation"

function FormUser (props){
    const{ handleSubmit, updateStep } =props
    const[name, setName]=useState({value:"test", valid: null})
    const[lastName, setLastName]=useState({value:"test", valid: null})

    const [errors, setErrors] = useState({
		name: {
			error: false,
			message:
				"Deben ser al menos 3 caracteres",
		},
        lastName: {
            error: false,
            message:"Deben ser al menos 3 caracteres",
        },
	})

    function validateName(name) {
		if (name.length >= 3) {
			return {
				name: {
					error: false,
					message: "",
				}}
		} else {
			return {
				name: {
					error: true,
					message:
						"Deben ser al menos 3 caracteres",
				}}
		}
	}

    function validateLastName(lastName) {
		if (lastName.length >= 3) {
			return {
				lastName: {
					error: false,
					message: "",
				}}
		} else {
			return {
				lastName: {
					error: true,
					message:
						"Deben ser al menos 3 caracteres",
				}}
		}
	}

      return ( 
        <Container maxWidth="lg">
            <form onSubmit={(event)=>{
                event.preventDefault() 
                updateStep(2)
                handleSubmit({name, lastName})}}>
                <TextField
                required
                id="name"
                type="text"
                label="Nombre"
                variant="filled"
                fullWidth
                margin="normal"
                onChange={(event)=>{
                    const value = event.target.value
                    const valid = verifyName(value)
                    setName({value, valid: true})
                    console.log(value, valid)
                }}
                value={name.value}
                error={errors.name.error}
				helperText={
					errors.name.error
						? errors.name.message
						: ""
				}
                onBlur={(e) => {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        ...validateName(e.target.value)
                    }));
                }}
                />         
                <TextField
                      required
                      id="lastName"
                      type="text"
                      label="Apellido"
                      variant="filled"
                      fullWidth
                      margin="normal"
                      onChange={(event)=>{
                        const value = event.target.value
                        const valid = verifyLastName(value)
                        setLastName({value, valid: true})
                        console.log(value, valid)
                    }}
                      value={lastName.value}
                      error={errors.lastName.error}
                      helperText={
                          errors.lastName.error
                              ? errors.lastName.message
                              : ""
                      }
                      onBlur={(e) => {
                          setErrors((prevErros) =>({
                            ...prevErros,
                            ...validateLastName(e.target.value)
                        }));
                      }}
                />         
            
            <Button 
            variant="contained"
            type="submit">Registrarse</Button>
        </form>
        </Container>
)
}

export default FormUser;