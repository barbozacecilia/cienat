import { useEffect, useState } from "react"
import "./CategoryForm.css"
import InputForm from "../InputForm"
import CategoryList from "../CategoryList"
import Button from "../Button"
import { Link } from "react-router-dom";
import { search } from "../../api/api";


const CategoryForm = (props)=>{
const {createNewCategory} = props
    const [title, setTitle] = useState("")
    const [color, setColor] = useState("")
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        search(`/categories`, setCategories)
    }, [])
    const handleButton = (e) =>{
        e.preventDefault()
        createNewCategory({title, colorPrimary: color})
    }

    return <div className="form-container">
            <form onSubmit={handleButton}>
            <h2>Nueva Categoría</h2>
            <InputForm label="Titulo de la Categoría" placeholder="Ingresar el titulo de la nueva categoría "
            valor={title}
            setValor={setTitle}
             required
             />
            <InputForm label="Color" placeholder="Escribe el en Hex" 
            valor={color}
            setValor={setColor}
            required
            type= "color"
            />
            <Button> Agregar Categoría</Button>
            </form>

            <ul className="category-list container flex">
            {
                categories.map(category => (
                    <Link to={`/categoria/${category.id}`} key={category.id}>
                        <li className={`category-list__category category-list__category--${category.id}`}>
                            {category.title}
                        </li>
                    </Link>
                ))
            }
        </ul>
    </div>
}

export default CategoryForm