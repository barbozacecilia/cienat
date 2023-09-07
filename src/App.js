import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import VideosSection from './components/VideosSection';
import Category from './components/Category';

function App() {
  const [showForm, setShowForm]= useState(false)
  const [videos, setVideos] = useState([])

  const changeStateForm = () =>{
    setShowForm(!showForm)
  }

  //add new video

  const addNewVideo = (video) => {
    console.log("New video", video)
    //use Spreed operator to add new videos
    setVideos([...videos, video])
  }

  //List of Categories

  const categories = [
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
    },
    
  ]
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
           videos={videos}
           />
        })
      }
    </div>
  );
}

export default App;
