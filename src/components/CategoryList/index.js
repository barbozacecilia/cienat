import "./CategoryList.css";

const CategoryList= (props) =>{

    const categories = [
        "Astronomía",
        "Biología",
        "Física",
        "Química"
    ]
const handleChangeCategory = (event) =>{
    console.log("cambio", event.target.value)
    props.setValor(event.target.value)
}
    return <div className="category-list">
        <label>Categoría</label>
        <select value={props.valor} onChange={handleChangeCategory}>
            <option value="" disabled defaultValue="" hidden>Selecciona la categoria</option>
            {categories.map( (category,index)=><option key={index} value={category}>{category}</option> )}
        </select>
        </div>
}

export default CategoryList;