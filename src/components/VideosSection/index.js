import "./VideosSection.css";
import { useState } from "react";
import Videos from "../Video/Videos";

const VideosSection = (props) =>{
    //const [show, setShow] = useState(true)
     console.log(props)
    // const handleClick= ()=>{
    //     console.log("show/hide", !show)
    //     setShow(!show)
       
    // }

return <section className="videos-section-container">
    <h2 className="title-videos-section">Videos CieNat</h2>
    <img src="./img/add-video-button.png" alt="Icono para agregar un nuevo video" onClick={props.toShowForm}/>
</section>

}

export default VideosSection