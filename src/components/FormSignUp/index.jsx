import { useState, useContext, useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import UserForm from "../FormLogIn/UserFormLogIn";
import PersonalDataForm from "./PersonalDataForm"
import Complete from "./CompleteForm";
import { FormSpace } from "./styles";
import StepperComponen from "../Stepper";
import Step from "../Step";

//Auth
//import { useAuth } from "../../context/AuthContext";
//import { AuthContext } from "../../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";

//Firebase db users
import { setDoc , doc} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase.config";
//validations
import {verifyEmail, verifyPassword, verifyName,verifyLastName} from "./validation"

function FormSignUp (props){
    const [step, setStep]= useState(0);
    //const [ stepState , setStepState ] = useState({});
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

    /**Auth */
    //const auth = useAuth()  
    //const { register, user, loading } = useContext(AuthContext)
    //const {register} = useAuth();
    const[email, setEmail]=useState({value: '', valid: null})
    const[password, setPassword]=useState({value: '', valid: null})
    const [fName, setFName] = useState({value: '', valid: null});
    const [lName, setLName] = useState({value: '', valid: null})

/*
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
    }, []);*/

      // useEffect(async () => {
  //   try {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const posts = await data.json();
  //     console.log(posts);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });


    const onSubmit= async (e)=>{
      e.preventDefault()
      try{
       await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = auth.currentUser;
        console.log("User:", user);
          let newStep = step + 1;
          setStep(newStep);
          if(user){
            // Add a new document in collection "users"
           await setDoc(doc(db, "users", user.uid), {
              firstName: fName,
              lastName: lName
            })
          }
          console.log("User Registered Successfully!!");
        }catch(e){
          console.log(e.message)
        }
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

    const handleChangeFistName = (e) =>{
      const value = e.target.value
      const valid = verifyName(value)
      setFName(e.target.value)
    }

    const handleChangeLastName = (e) =>{
      const value = e.target.value
      const valid = verifyLastName(value)
      setLName(e.target.value)
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
            value: lName.value,
            valid: lName.valid,
            onChange: handleChangeLastName,
            helperText:"Debe tener más de dos valores",
            validator: verifyLastName ,
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