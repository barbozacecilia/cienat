import "./InputForm.css"
import { useState } from "react"

const InputForm = (props) => {
        const placeholderModif = `${props.placeholder}...`

    const handleChange = (e) =>{
        props.setValor(e.target.value)
    }


    return <div className="input-form">
        <label>{props.label}</label>
        <input 
            placeholder={placeholderModif} 
            required={props.required}
            value={props.valor}
            onChange={handleChange} 
        />
    </div>
}

export default InputForm