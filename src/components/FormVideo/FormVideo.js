import { useState } from "react"
import "./FormVideo.css"
import InputForm from "../InputForm"
import CategoryList from "../CategoryList"
import Button from "../Button"

const Form = (props)=>{
    const [title, setTitle] = useState ("");
    const [link, setLink] = useState("");
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const {addNewVideo} = props

    const handleButton = (e) =>{
        e.preventDefault()
        console.log("manejar el envio", e)
        let dataToSend ={
            title: title,
            link: link,
            img: img,
            description: description,
            category: category
        }
        addNewVideo(dataToSend)
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
            <CategoryList valor={category} setValor={setCategory} categories={props.categories}/>
            <Button> Guardar </Button>
        </form>
    </section>
}

export default Form