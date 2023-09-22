import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import VideosSection from './components/VideosSection';
import Category from './components/Category';
import Footer from './components/Footer';
import CategoryForm from './components/CategoryForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';


function App() {
  const [showForm, setShowForm]= useState(false)
  const [videos, setVideos] = useState([ {
    id: uuid(), 
    category: "Biología",
      description: "Las ramas de la biología; te explicamos cuáles son y qué estudian",
    img: "https://s1.significados.com/foto/ramas-de-la-biologia-1.jpg",
    link: "https://www.youtube.com/watch?v=SaUprQT9gj0",
    title: "Las ramas de la biología"
  },
  {
    id: uuid(),
    category: "Biología",
    description: "Que es la biología y su importancia.",
    img: "https://img.youtube.com/vi/XViBPvJAaxI/mqdefault.jpg",
    link: "https://www.youtube.com/watch?v=XViBPvJAaxI",
    title: "¿QUE ES LA BIOLOGÍA ?"
  }
  ,
  {
    id: uuid(),
    category: "Química",
    description: "En este video definimos la química, damos ejemplos y vemos sus áreas de estudio.",
    img: "https://unibetas.com/wp-content/uploads/2022/01/que-estudia-la-quimica-como-ciencia-experimental.png",
    link: "https://www.youtube.com/watch?v=mdEYUTeIV6U",
    title: "¿Qué es la química? "
  },
  {
    id: uuid(),
    category: "Química",
    description: "En este video encontramos un rap de la tabla periódica",
    img: "https://i.ytimg.com/vi/4BiOoOvTN9M/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4BiOoOvTN9M",
    title: "RAP de la TABLA PERIÓDICA"
  },
  {
    id: uuid(),
    category: "Física",
    description: "En este video de introducción al curso, veremos el concepto de física, y veremos por qué es tan importante en nuestra vida. ",
    img: "https://img.youtube.com/vi/-GgrsezemTY/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=-GgrsezemTY",
    title: "¿Qué es la Física? ¿Para qué sirve?"
  }
  ,
  {
    id: uuid(),
    category: "Astronomía",
    description: "la definición de la Astronomía y su historia. ",
    img: "https://img.youtube.com/vi/XjcEYANHVpM/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=XjcEYANHVpM",
    title: "la definición de la Astronomía y su historia."
  }

])

//Update Categories
const [categories , updateCategories] = useState ([
  {
    id: uuid(),
    title:"Astronomía" ,
    colorPrimary: "#DB6EBF",
    colorSecondary:"#FAE9F5",
  },
  {
    id: uuid(),
    title:"Biología",
    colorPrimary: "#57C278" ,
    colorSecondary: "#D9F7E9" ,
  },
  {
    title:"Física" ,
    colorPrimary: "#82CFFA" ,
    colorSecondary:"#E8F8FF" ,
  },
  {
    id: uuid(),
    title:"Química" ,
    colorPrimary: "#A6D157" ,
    colorSecondary:"#F0F8E2",
  },
  {
    id: uuid(),
    title:"Otros" ,
    colorPrimary: "#E06B69" ,
    colorSecondary:"#FDE7E8",
  }])
  

//Delete Video
const deleteVideo = (id) =>{
  console.log("delete video", id)
  const newVideos = videos.filter((video)=>video.id !== id)
  setVideos(newVideos)
}

  const changeStateForm = () =>{
    setShowForm(!showForm)
  }

  //Update a category color
  const updateColor = (color, title) => {
    console.log ("update", color, title)
    const updateCategoriesColor = categories.map((category) => {
      if (category.title === title) {
        category.colorPrimary = color
      }
      return category
    })
    updateCategories(updateCategoriesColor)
  }

  //add new video
  const addNewVideo = (video) => {
    console.log("New video", video)
    //use Spreed operator to add new videos
    setVideos([...videos, video])
  }

  //set new category
  const createNewCategory = (newCategory) =>{
    console.log(newCategory)
    updateCategories([...categories,{...newCategory, id:uuid() }])
  }


  const location = window.location.pathname
  console.log(location)

  // const Router = () =>{
  //   if (location === "/"){
  //     return <Form categories={
  //       categories.map((category)=>category.title)}
  //       addNewVideo={addNewVideo}
  //       />
  //   }else{
  //     return (<>
  //       <VideosSection toShowForm={changeStateForm}/>
  //       {
  //         categories.map((category)=>{
  //           return <Category
  //            data={category} 
  //            key={category.title}
  //            videos={videos.filter(video=> video.category === category.title)}
  //            deleteVideo= {deleteVideo}
  //            updateColor={updateColor}
  //            />
  
  //         })
  //       }
  //       </>
  //     )
      
  //   }
  // }

   return (
    <div className="App">
      <Header/>
        {/*showForm && <CategoryForm  createNewCategory={createNewCategory}>*/}

    <Router>
      <Routes>
        <Route path='/add-new-category' element={
          <CategoryForm  createNewCategory={createNewCategory}></CategoryForm>
        }/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/add-new-video' element={
          <Form categories={
                  categories.map((category)=>category.title)}
                  addNewVideo={addNewVideo}
                />
        }/>       
        <Route path='/' element={
          <>
                <VideosSection toShowForm={changeStateForm}/>
                {
                  categories.map((category)=>{
                    return <Category
                     data={category} 
                     key={category.title}
                     videos={videos.filter(video=> video.category === category.title)}
                     deleteVideo= {deleteVideo}
                     updateColor={updateColor}
                     />
    
                  })
                }
                </>
        }/>
      </Routes>

    </Router>
           <Footer/>

    </div>
  );
}

export default App;
