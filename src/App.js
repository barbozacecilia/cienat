import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import VideosSection from './components/VideosSection';
import Category from './components/Category';

function App() {
  const [showForm, setShowForm]= useState(false)
  const changeStateForm = () =>{
    setShowForm(!showForm)
  }
   return (
    <div className="App">
      <Header/>
      {/* {showForm === true ? <Form/> : <></>} */}
      {showForm && <Form/>}
      <VideosSection toShowForm={changeStateForm}/>
      <Category category="Astronomia"/>
      <Category category="Biologia"/>
      <Category category="Fisica"/>
      <Category category="Quimica"/>
    </div>
  );
}

export default App;
