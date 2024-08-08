import { useState, useContext } from "react";
//mui
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Snackbar from '@mui/material/Snackbar';

//forms
import UserForm from "../FormLogIn/UserFormLogIn";
//import PersonalDataForm from "./PersonalDataForm"
import { FormSpace } from "./styles";
import Step from "../Step";

//Auth
//import { useAuth } from "../../context/AuthContext";
//import { AuthContext } from "../../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";

//Firebase db users
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase.config";
//validations
import { verifyEmail, verifyPassword, verifyName, verifyLastName } from "./validation"




function FormSignUp({ data }) {



  /**Auth */
  //const auth = useAuth()  
  //const { register, user, loading } = useContext(AuthContext)
  //const {register} = useAuth();

  const [fName, setFName] = useState({ value: '', valid: null });
  const [lName, setLName] = useState({ value: '', valid: null });
  const [email, setEmail] = useState({ value: '', valid: null });
  const [password, setPassword] = useState({ value: '', valid: null });
  const [confirmPassword, setConfirmPassword] = useState({ value: '', valid: null });

  const [error, setError] = useState('');
  
  //data validation
  const checkForm = () => {
    //It makes sure that the passwords match.
    if (password.value !== confirmPassword.value) {
      setError('la contraseña no coincide');
      return false;
    }

    //Validation functions are used for each field in the form, and the results are saved in variables.
    const emailValid = verifyEmail(email.value);
    const passwordValid = verifyPassword(password.value);
    const confirmPasswordValid = verifyPassword(confirmPassword.value);
    const fNameValid = verifyName(fName.value);
    const lNameValid = verifyLastName(lName.value);
    
// Update form fields with validation results
    //The form fields are updated and the current properties of the state are copied with the spreed operator
    setEmail({ ...email, valid: emailValid });
    setPassword({ ...password, valid: passwordValid });
    setConfirmPassword({ ...confirmPassword, valid: confirmPasswordValid });
    setFName({ ...fName, valid: fNameValid });
    setLName({ ...lName, valid: lNameValid });

    if (!emailValid || !passwordValid || !confirmPasswordValid || !fNameValid || !lNameValid) {
      setError('Por favor, Revise los datos ingresados en el formulario.');
      return false;
    }

    setError('');
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!checkForm() ) {
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = auth.currentUser;
      console.log("User:", user);
      //const refUser = doc(db,"users", user.id)
      if (user) {
        // Add a new document in collection "users"
        await setDoc(doc(db, "users", user.uid), {
          email: email,
          firstName: fName,
          lastName: lName,
        })
      }
      console.log("User Registered Successfully!");

    } catch (e) {
      console.log("Hubo un error en el registro", e.message)
      setError(e.message);
    }
  }


  const stepData = {

    inputs: [
      {
        label: "Nombre",
        type: "text",
        value: fName.value,
        valid: fName.valid,
        onChange: (e) => setFName({ value: e.target.value, valid: verifyName(e.target.value) }),
        helperText: "Debe tener más de dos valores",
      },
      {
        label: "Apellido",
        type: "text",
        value: lName.value,
        valid: lName.valid,
        onChange: (e) => setLName({ value: e.target.value, valid: verifyLastName(e.target.value) }),
        helperText: "Debe tener más de dos valores",
      },
      {
        label: "Email",
        type: "email",
        value: (email.value),
        valid: email.valid,
        onChange: (e) => setEmail({ value: e.target.value, valid: verifyEmail(e.target.value) }),
        helperText: "ingresa un correo válido",
      },
      {
        label: "Contraseña",
        type: "password",
        value: (password.value),
        valid: password.valid,
        onChange: (e) => setPassword({ value: e.target.value, valid: verifyPassword(e.target.value) }),
        helperText: "ingresa una contraseña válida",
      },
      {
        label: "Confirme su Contraseña",
        type: "confirmPassword",
        value: (confirmPassword.value),
        valid: confirmPassword.valid,
        onChange: (e) => setConfirmPassword({ value: e.target.value, valid: verifyPassword(e.target.value) }),
        helperText: "ingresa una contraseña válida",
      },

    ],
    buttonText: "Continuar",
    onSubmit

  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center">¡Sumate a nuestra comunidad!</Typography >
      <FormSpace>
        <Step data={stepData} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </FormSpace>

    </Container>
  )
}

export default FormSignUp;


/**            <TextField
              type='text'
              label= 'lastName'
              variant="filled"
              margin="normal"
              fullWidth
              onChange= {handleChangeLastName}
              helperText={!lName.value ? '': 'Ingresa tu apellido' }
              error={!lName.value }
              value={lName.value}
            /> */