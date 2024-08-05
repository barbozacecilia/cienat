import { useState, useContext, useEffect } from "react";
//mui
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
//forms
import UserForm from "../FormLogIn/UserFormLogIn";
//import PersonalDataForm from "./PersonalDataForm"
import { FormSpace } from "./styles";
import Step from "../Step";
//components
import Complete from "./CompleteForm";
import StepperComponen from "../Stepper";

//Auth
//import { useAuth } from "../../context/AuthContext";
//import { AuthContext } from "../../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";

//Firebase db users
import { setDoc , doc, updateDoc} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase.config";
//validations
import {verifyEmail, verifyPassword, verifyName,verifyLastName} from "./validation"

//REVISAR EL TEXTHELPER//


function FormSignUp (props){
    const [step, setStep]= useState(0);

    /**Auth */
    //const auth = useAuth()  
    //const { register, user, loading } = useContext(AuthContext)
    //const {register} = useAuth();
    const[email, setEmail] = useState({value: '', valid: null})
    const[password, setPassword]= useState({value: '', valid: null})
    const[fName, setFName] = useState({value: '', valid: null});
    const[lName, setLName] = useState({value: '', valid: null})


    const onSubmit= async (e)=>{
      e.preventDefault()
      try{
       await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = auth.currentUser;
        console.log("User:", user);
          let newStep = step + 1;
          setStep(newStep);
          //const refUser = doc(db,"users", user.id)
          if(user){
            // Add a new document in collection "users"
           await setDoc(doc(db, "users", user.uid), {
              email: email,
              firstName: fName,
              lastName: lName,
            })
          }
          console.log("User Registered Successfully!!");
        }catch(e){
          console.log("Hubo un error en el registro",e.message)
        }
      }
      const onSubmitNext =()=>{

      }

    const updateStep =(stepNumber)=>{
      console.log("actualizar paso", stepNumber)
      setStep(stepNumber)
    }
/**    const handleSubmit = (signUpData) =>{
      console.log('signUpDataPersonalDataForm:', signUpData)
    } */


    const steps ={
      0: <UserForm updateStep={updateStep}/>,
      1: <Complete updateStep={updateStep}/>
    };

    const handleChangeFistName = (e) =>{
      const value = e.target.value
      const valid = verifyName(value)
      setFName({ value, valid });
    }

    const handleChangeLastName = (e) =>{
      const value = e.target.value
      const valid = verifyLastName(value)
      setLName({value, valid})
    }

    const handleChangePassword = (e, position, currentStep, validator) =>{
      const value = e.target.value
      const valid = validator(value)
      console.log(value)
      console.log(valid)
      console.log(position,"position")
      console.log(currentStep, "currentStep")
      console.log(validator, "validator")
      setPassword({value:value , valid: valid})
    }

    const handleChangeEmail = (e, position, currentStep, validator) =>{
      const value = e.target.value
      const valid = validator(value)
      console.log(position,"position")
      console.log(currentStep, "currentStep")
      console.log(validator, "validator")
      setEmail({value:value, valid: valid})
    }

    const stepsFlow ={
      0:{
        inputs: [
          {
            label: "Nombre",
            type: "text",
            value: fName.value,
            valid: fName.valid,
            onChange: handleChangeFistName,
            helperText:"Debe tener más de dos valores",
            validator: verifyName ,
          },
          {
            label: "Apellido",
            type: "text",
            value:lName.value,
            valid: lName.valid,
            onChange: handleChangeLastName,
            helperText:"Debe tener más de dos valores",
            validator: verifyLastName ,
          },
          {
            label: "Email",
            type: "email",
            value:(email.value),
            valid:email.valid,
            onChange: handleChangeEmail,
            helperText:"ingresa un correo válido",
            validator: verifyEmail ,
          },
          {
            label: "Contraseña",
            type: "password",
            value: (password.value),
            valid: password.valid,
            onChange: handleChangePassword,
            helperText:"ingresa una contraseña valida",
            validator: verifyPassword ,
          },

        ],
        buttonText: "Siguiente",
        onSubmit
      },
      1: {
          buttonText: "Siguiente",
           onSubmitNext
           
        }
    }

  
      return ( 
        <Container maxWidth="lg">
            <Typography variant="h4" align="center">¡Sumate a nuestra comunidad!</Typography >
            <FormSpace>
              { step < 1 && <StepperComponen step={step}/>}
              <Step data={stepsFlow[step]} step={step}/>
            </FormSpace>
        </Container>
)
}

export default FormSignUp;