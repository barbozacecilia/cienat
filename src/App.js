import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import VideosSection from './components/VideosSection';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm]= useState(false)
  const [videos, setVideos] = useState([ {
     category: "Biología",
      description: "Las ramas de la biología; te explicamos cuáles son y qué estudian",
      img: "https://s1.significados.com/foto/ramas-de-la-biologia-1.jpg",
      link: "https://www.youtube.com/watch?v=SaUprQT9gj0",
      title: "Las ramas de la biología"
  },
  {
    category: "Biología",
    description: "Que es la biología y su importancia.",
    img: "https://img.youtube.com/vi/XViBPvJAaxI/mqdefault.jpg",
    link: "https://www.youtube.com/watch?v=XViBPvJAaxI",
    title: "¿QUE ES LA BIOLOGÍA ?"
  }
  ,
  {
    category: "Química",
    description: "En este video definimos la química, damos ejemplos y vemos sus áreas de estudio.",
    img: "https://unibetas.com/wp-content/uploads/2022/01/que-estudia-la-quimica-como-ciencia-experimental.png",
    link: "https://www.youtube.com/watch?v=mdEYUTeIV6U",
    title: "¿Qué es la química? "
  },
  {
    category: "Química",
    description: "En este video encontramos un rap de la tabla periódica",
    img: "https://i.ytimg.com/vi/4BiOoOvTN9M/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4BiOoOvTN9M",
    title: "RAP de la TABLA PERIÓDICA"
  },
  {
    category: "Física",
    description: "En este video de introducción al curso, veremos el concepto de física, y veremos por qué es tan importante en nuestra vida. ",
    img: "https://img.youtube.com/vi/-GgrsezemTY/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=-GgrsezemTY",
    title: "¿Qué es la Física? ¿Para qué sirve?"
  }
  ,
  {
    category: "Astronomía",
    description: "la definición de la Astronomía y su historia. ",
    img: "https://img.youtube.com/vi/XjcEYANHVpM/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=XjcEYANHVpM",
    title: "la definición de la Astronomía y su historia."
  }

])

const [categories , updateCategories] = useState ([
  {
    title:"Astronomía" ,
    colorPrimary: "#DB6EBF",
    colorSecondary:"#FAE9F5",
  },
  {
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
    title:"Química" ,
    colorPrimary: "#A6D157" ,
    colorSecondary:"#F0F8E2",
  },
  {
    title:"Otros" ,
    colorPrimary: "#E06B69" ,
    colorSecondary:"#FDE7E8",
  }])
  

//Delete Video
const deleteVideo = () =>{
  console.log("delete video")
}

  const changeStateForm = () =>{
    setShowForm(!showForm)
  }

  //Update a category color
  const updateColor = (color, title) => {
    console.log ("update", color, title)
    const updateCategoriesColor = categories.map((category) => {
      if (category.title == title) {
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


   return (
    <div className="App">
      <Header/>
      {/* {showForm === true ? <Form/> : <></>} */}
      {showForm && <Form categories={
        categories.map((category)=>category.title)}
        addNewVideo={addNewVideo}
        />}
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
           <Footer/>

    </div>
  );
}

export default App;
