import "./CategoryList.css";

const CategoryList= () =>{

    const categories = [
        "Astronomía",
        "Biología",
        "Física",
        "Química"
    ]

    return <div className="category-list">
        <label>Categoría</label>
        <select>
            {categories.map( (category,index)=><option key={index}>{category}</option> )}
        </select>
        </div>
}

export default CategoryList;