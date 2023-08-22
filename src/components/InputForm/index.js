import "./InputForm.css"

const InputForm = (props) => {
    console.log("props", props)
    return <div className="input-form">
        <label>{props.label}</label>
        <input placeholder={props.placeholder} />
    </div>
}

export default InputForm