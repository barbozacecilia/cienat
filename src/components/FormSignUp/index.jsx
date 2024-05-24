import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import UserForm from "../FormLogIn/UserFormLogIn";
import PersonalDataForm from "./PersonalDataForm"
import Complete from "./CompleteForm";
import { FormSpace } from "./styles";
import StepperComponen from "../Stepper";
import Step from "../Step";

//validations
import {verifyEmail, verifyPassword, verifyName,verifyLastName} from "./validation"

function FormSignUp (props){
    const [step, setStep]= useState(0);
    const [ stepState , setStepState ] = useState({});
    //use localstorage
    // const selectStep = () => {
    //   switch (step){
    //   case 0: 
    //     return <FormUser/>
    //     break;
    //   case 1: 
    //     return <PersonalDataForm/>
    //     break;
    //   case 2: 
    //     return <Complete/>
    //     break;
    //     }
    // }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetch("http://localhost:5000/profile");
          const posts = await data.json();
          console.log(posts);
        } catch (e) {
          console.log(e);
        }
      };
    
      fetchData();
    }, []);

      // useEffect(async () => {
  //   try {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const posts = await data.json();
  //     console.log(posts);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });

    const onSubmit= (e)=>{
      e.preventDefault();
        let newStep = step +1
        setStep(newStep)
        console.log("newStep", newStep)
        console.log(step)
    }
    const updateStep =(stepNumber)=>{
      console.log("actualizar paso", stepNumber)
      setStep(stepNumber)
    }

    const handleSubmit = (signUpData) =>{
      console.log('signUpDataPersonalDataForm:', signUpData)
    }

    const steps ={
      0: <UserForm updateStep={updateStep}/>,
      1: <PersonalDataForm handleSubmit={handleSubmit} updateStep={updateStep}/>,
      2: <Complete updateStep={updateStep}/>
    };



    const handleChange = (element, position, currentStep, validator) =>{
      const value = element.target.value
      const valid = validator(value)
      console.log(value)
      console.log(valid)
      console.log(position,"position")
      console.log(currentStep, "currentStep")
      console.log(validator, "validator")

    }

    const stepsFlow ={
      0:{
        inputs: [
          {
            label: "Email",
            type: "email",
            value:"",
            valid:null,
            onChange: handleChange,
            helperText:"ingresa un correo válido",
            validator: verifyEmail ,
          },
          {
            label: "Contraseña",
            type: "password",
            value:"",
            valid:null,
            onChange: handleChange,
            helperText:"ingresa una contraseña valida",
            validator: verifyPassword ,
          }
        ],
        buttonText: "Siguiente",
        onSubmit
      },
      1:{
        inputs: [
          {
            label: "Nombre",
            type: "text",
            value:"",
            valid:null,
            onChange: handleChange,
            helperText:"Debe tener más de dos valores",
            validator: verifyName ,
          },
          {
            label: "Apellido",
            type: "text",
            value:"",
            valid:null,
            onChange: handleChange,
            helperText:"Debe tener más de dos valores",
            validator: verifyLastName ,
          }
        ],
        buttonText: "Siguiente",
        onSubmit
      }
    }



  
      return ( 
        <Container maxWidth="lg">
            <Typography variant="h4" align="center">¡Sumate a nuestra comunidad!</Typography >
            <FormSpace>
              { step < 3 && <StepperComponen step={step}/>}
              {/* {steps[step]} */}
              {/* {selectStep(step)} */}
              <Step data={stepsFlow[step]} step={step}/>
            </FormSpace>
        </Container>
)
}

export default FormSignUp;