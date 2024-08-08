import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Complete from '../FormSignUp/CompleteForm';
import InfoSignUp from './InfoSignUp';
import FormSignUp from '../FormSignUp/index'

const steps = ['Crea una nueva cuenta', 'Disfruta tu cuenta', 'Cuenta creada'];

function getStepContent(stepIndex, setActiveStep) {
  switch (stepIndex) {
    case 0:
      return <FormSignUp setActiveStep={setActiveStep} />
    case 1:
      return <InfoSignUp setActiveStep={setActiveStep} />
    case 2:
      return <Complete setActiveStep={setActiveStep} />
    default:
      return null
  }
}

function StepperSingUp() {
  const [activeStep, setActiveStep] = useState(0)

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStep = (step) => () => {
    setActiveStep(step)
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label} >
              <StepLabel >{label}</StepLabel>

            </Step>
          );
        })}
      </Stepper>
      <div>{getStepContent(activeStep, setActiveStep)}</div>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Tu cuenta ha sido creada
          </Typography>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleReset}>Crea otra cuenta</Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            type="submit"
            onClick={handleStep(activeStep + 1)}
          >{activeStep === steps.length - 1 ? 'Finaliza' : 'Siguiente'}
          </Button>
        </>
      )}

    </Box>
  );
}


export default StepperSingUp;