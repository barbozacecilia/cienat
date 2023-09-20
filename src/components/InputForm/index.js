import "./InputForm.css"
import { useState } from "react"

const InputForm = (props) => {
    const placeholderModif = `${props.placeholder}...`

    
    const {type = "text"} = props

    const handleChange = (e) =>{
        props.setValor(e.target.value)
    }


    return <div className={`field field-${type}`}>
        <label>{props.label}</label>
        <input 
            placeholder={placeholderModif} 
            required={props.required}
            value={props.valor}
            onChange={handleChange} 
            type= {type}
        />
    </div>
}

export default InputForm