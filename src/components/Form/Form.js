import "./Form.css"
import InputForm from "../InputForm"
import CategoryList from "../CategoryList"
import Button from "../Button"

const Form = ()=>{

    const handleButton = (event) =>{
        event.preventDefault()
        console.log("manejar el envio", event)
    }

    return <section className="form-video">
        <form onSubmit={handleButton}>
            <h2>Nuevo video</h2>
            <InputForm label="Titulo" placeholder="Ingresar el titulo del video "/>
            <InputForm label="Link" placeholder="Escribe el link "/>
            <InputForm label="Link de imagen del video" placeholder="El link de la imagen del video"/>
            <InputForm label="Descripción" placeholder="Ingresar la descripción "/>
            <CategoryList/>
            <Button> Guardar </Button>
        </form>
    </section>
}

export default Form