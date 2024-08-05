import { useEffect, useState } from "react";
import "./CategoryList.css";
//De firebase para interactuar con la base de datos
import { collection, getDocs, db } from '../../firebase/firebase.config';


const CategoryList = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        //sera una funcion asincronica que obtiene datos
        const fetchCategories = async () => {
            //ref a la base de datos de firebase
            const categoriesCollection = collection(db, 'categories')
            //recupera doc de la coleccion
            const categoriesSnapshot = await getDocs(categoriesCollection)
            // transf la list de doc en un array de obj con el id de cada uno y todo el resto de info
            const categoriesList = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            //con esto actualiza el estado de la list de las categorias
            setCategories(categoriesList)
        }
        //llamamos para ejectuar la funcion async y traer datos de firestore cuadno se arma el compomente
        fetchCategories();
    },
        //solo se monta una vez
        []);

    const handleChangeCategory = (event) => {
        console.log("cambio", event.target.value)
        //lo llamo pasando la prop de setCategory
        props.setCategory(event.target.value)
    }
    return <div className="category-list">
        <label>Categoría</label>
        <select value={props.valor} onChange={handleChangeCategory}>
            <option value="" disabled defaultValue="" hidden>Selecciona la categoria</option>
            {categories.map((category) => (
                <option key={category.id} value={category.title}>{category.title}</option>))}
        </select>

    </div>
}

export default CategoryList;