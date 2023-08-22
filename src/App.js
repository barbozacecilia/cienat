import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import VideosSection from './components/VideosSection';

function App() {
  const [showForm, setShowForm]= useState(true)
  const changeStateForm = () =>{
    setShowForm(!showForm)
  }
   return (
    <div className="App">
      <Header/>
      {/* {showForm === true ? <Form/> : <></>} */}
      {showForm && <Form/>}
      <VideosSection toShowForm={changeStateForm}/>
    </div>
  );
}

export default App;
