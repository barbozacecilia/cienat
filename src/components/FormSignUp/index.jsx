import { useState } from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function FormSignUp (props){
    const{ handleSubmit } =props
    const[name, setName]=useState('')
    const[lastName, setlastName]=useState('')
    const[email, setEmail]=useState('')

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
        email: {
            error: false,
            message:"Deben ser al menos 3 caracteres",
        }
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

    function validatelastName(lastName) {
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
            <Typography variant="h4" align="center">¡Sumate a nuestra comunidad!</Typography >
            <form onSubmit={(event)=>{event.preventDefault() 
                handleSubmit({name, lastName,email})}}>
                <TextField
                required
                id="name"
                label="Nombre"
                defaultValue=""
                variant="filled"
                fullWidth
                margin="normal"
                onChange={(event)=>{
                    setName(event.target.value)
                }}
                value={name}
                error={errors.name.error}
				helperText={
					errors.name.error
						? errors.name.message
						: ""
				}
                onBlur={(e) => {
					setErrors(
						validateName(
							e.target.value
						)
					)
				}}
                />         
                <TextField
                required
                id="lastName"
                label="Apellido"
                defaultValue=""
                variant="filled"
                fullWidth
                margin="normal"
                onChange={(e)=>{
                    setlastName(e.target.value)
                }}
                value={lastName}
                error={errors.lastName.error}
				helperText={
					errors.lastName.error
						? errors.lastName.message
						: ""
				}
                onBlur={(e) => {
					setErrors(
						validateLastName(
							e.target.value
						)
					)
				}}
                />         
                <TextField
                required
                id="email"
                label="Email"
                defaultValue=""
                variant="filled"
                fullWidth
                margin="normal"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                value={email}
                />
            <Button 
            variant="contained"
            type="submit">Registrarse</Button>
        </form>
        </Container>
)
}

export default FormSignUp;