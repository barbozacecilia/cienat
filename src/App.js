import { useEffect, useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import FormVideo from './components/FormVideo/FormVideo';
import VideosSection from './components/VideosSection';
import Category from './components/Category';
import Footer from './components/Footer';
import CategoryForm from './components/CategoryForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import { search } from './api/api';
import VideoInfo from './components/Video/VideoInfo';
import FormSignUp from './components/FormSignUp';
import FormLogIn from './components/FormLogIn';
import { AuthProvider } from './context/AuthContext';
import StepperSingUp from './components/SignUp';
function App() {
  const [showForm, setShowForm]= useState(false)

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
  const [videos, setVideos]= useState([])

  useEffect(() => {
      search('/videos', setVideos)
  }, [])

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

  const handleSubmit = (signUpData) =>{
    console.log('signUpData:', signUpData)
  }

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
    <AuthProvider>
      <div className="App">
      
        {/*showForm && <CategoryForm  createNewCategory={createNewCategory}>*/}

    <Router>
    <Header/>
      <Routes>
        <Route path='/add-new-category' element={
          <CategoryForm  createNewCategory={createNewCategory}></CategoryForm>
        }/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/add-new-video' element={
          <FormVideo categories={
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
        <Route path='videos/:id' element={<VideoInfo/>}/>
        <Route path='/log-in' element={<FormLogIn/>}/>
        <Route path='/sign-up' element={<StepperSingUp handleSubmit={handleSubmit} />}/>
      </Routes>

    </Router>
           <Footer/>

    </div>
    </AuthProvider>
  
  );
}

export default App;
