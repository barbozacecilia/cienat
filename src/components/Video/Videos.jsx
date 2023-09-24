import { useState, useEffect } from "react"
import "./Video.css"
import { GrClose } from "react-icons/gr"
import { search } from "../../api/api"
import { Link } from "react-router-dom"

const Videos = ( props) =>{
//    const {title, link, img, description, id, category}= props.data
    const {colorPrimary, deleteVideo, url } = props
    const [videos, setVideos]= useState([])

    useEffect(() => {
        search(url, setVideos)
    }, [url])
    

    return <div className="video-container">
         
    
    {
                videos.map(video => {
                    const { id, category,description,img, link, title} = video;
                    return <Link to={`/videos/${id}`} key={id}>
                        <GrClose onClick={()=> deleteVideo(id)}  className="delete"/>  
                        <div className="top-card" style={{backgroundColor: colorPrimary}}>
                        <a href={link}>
                        <img src={img} alt={title}/></a> 
                        </div>
                        <div className="info">
                            <p>{category}</p>
                            <h4>{title}</h4>
                            <h5>{description}</h5>
                        </div>
                    </Link>
                })
    }
        {/*
        <GrClose onClick={()=> deleteVideo(id)}  className="delete"/>
        <div className="top-card" style={{backgroundColor: colorPrimary}}>
           <a href={link}>
           <img src={img} alt={title}/></a> 

        </div>
        <div className="info">
            <h4>{title}</h4>
            <h5>{description}</h5>
        </div> */}
    </div>
}

export default Videos