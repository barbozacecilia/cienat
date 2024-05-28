import { useState } from "react";
import { Box, Button } from "@mui/material";
import TextField from '@mui/material/TextField';

function Step (props){
  const{ data, step }=props

  if(!data) {
    return null
  }

  const{inputs, buttonText, onSubmit} = data;
    
      return ( 
        <Box maxWidth="lg"
        component="form"
        autoComplete="off" 
        onSubmit={onSubmit}> 

        {
            inputs.map((input, i)=>{
            const {label, type, value, valid, onChange, helperText, validator} = input
                return(
                <TextField
                key={i}
                type={type}
                label={label}
                variant="filled"
                margin="normal"
                fullWidth
                helperText={valid === false && {helperText}}
                error={valid === false}
                onChange={(element)=> onChange(element,i,step, validator)}
                value={value}
                />
            
                )
            })
        } 
                
            <Button 
            variant="contained"
            type="submit">{buttonText}</Button>
        </Box>
)
}

export default Step;