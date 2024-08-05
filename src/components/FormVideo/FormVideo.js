import { useEffect, useState } from "react"
import "./FormVideo.css"
import InputForm from "../InputForm"
import CategoryList from "../CategoryList"
import Button from "../Button"

import { Typography } from '@mui/material';
import { db, collection, addDoc, getDocs } from '../../firebase/firebase.config';


//REVISAR LA CONEXION DE FIREBASE CON LA COLLECCTION//


const Form = (props) => {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const [videoUrl, setVideoUrl] = useState('');


    const { addNewVideo } = props

    useEffect (()=>{
        const fetchCategories = async ()=>{
            try{
                const categoriesCollection = collection(db,'categories');
                const categoriesSnapshot = await getDocs(categoriesCollection);
                const categoriesList = categoriesSnapshot.docs.map(doc =>({id: doc.id, ...doc.data()}));
                setCategories(categoriesList)
            } catch (error){
                console.error('Error fetching categories: ', error)
            }
        }
        fetchCategories();
    },[])

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("manejar el envio", event)
        setError('');

        if (!videoUrl || !title || !description || !category) {
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            await addDoc(collection(db, 'videos'), {
                videoUrl,
                title,
                description,
                category,
                timestamp: new Date()
            });
            setVideoUrl('');
            setTitle('');
            setDescription('');
            setCategory('');
            alert('Video agregado exitosamente');
        } catch (error) {
            setError('Error al agregar el video');
            console.error(error);
        }
    };


    return <section className="form-video">
        <form onSubmit={handleSubmit}>
            <h2>Nuevo video</h2>
            <InputForm label="Título" placeholder="Ingresar el título del video "
                valor={title}
                setValor={setTitle}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <InputForm label="Link" placeholder="Escribe el link"
                valor={videoUrl}
                setValor={setVideoUrl}
                onChange={(e) => { setVideoUrl(e.target.value) }}
                required
            />
            <InputForm label="Link de imagen del video" placeholder="El link de la imagen del video"
                valor={img} setValor={setImg}
                onChange={(e) => { setImg(e.target.value) }}
                required
            />
            <InputForm label="Descripción" placeholder="Ingresar la descripción"
                valor={description} setValor={setDescription}
                onChange={(e) => { setDescription(e.target.value) }}
                required={false}
            />
            {error && (
                <Typography color="error" variant="body2">
                    {error}
                </Typography>
            )}
            <CategoryList valor={category} setCategory={setCategory} categories={categories} />
            <Button> Guardar </Button>
        </form>

    </section>
}

export default Form