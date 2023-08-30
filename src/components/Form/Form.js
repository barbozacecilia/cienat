import { useState } from "react"
import "./Form.css"
import InputForm from "../InputForm"
import CategoryList from "../CategoryList"
import Button from "../Button"

const Form = ()=>{
    const [title, setTitle] = useState ("");
    const [link, setLink] = useState("");
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")
    const [list, setList] = useState("")

    const handleButton = (e) =>{
        e.preventDefault()
        console.log("manejar el envio", e)
        let dataToSend ={
            title: title,
            link: link,
            img: img,
            description: description
        }
        console.log(dataToSend)
    }

    return <section className="form-video">
        <form onSubmit={handleButton}>
            <h2>Nuevo video</h2>
            <InputForm label="Titulo" placeholder="Ingresar el titulo del video "
             valor={title} 
             setValor={setTitle} 
             required
             />
            <InputForm label="Link" placeholder="Escribe el link" 
            valor={link}
            setValor={setLink} 
            required
            />
            <InputForm label="Link de imagen del video" placeholder="El link de la imagen del video" 
            valor={img} setValor={setImg} required
            />
            <InputForm label="Descripción" placeholder="Ingresar la descripción" 
            valor={description} setValor={setDescription} required={false}
            />
            <CategoryList valor={list} setValor={setList}/>
            <Button> Guardar </Button>
        </form>
    </section>
}

export default Form