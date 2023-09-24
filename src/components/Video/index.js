import "./Video.css"
import { GrClose } from "react-icons/gr"
import { Link } from "react-router-dom"

const Video = (props) =>{
    const {title, link, img, description, id, category}= props.data
    const {colorPrimary, deleteVideo } = props
    
    return <div className="video-container">
        <Link to={`/videos/${id}`} key={id}>
        <GrClose onClick={()=> deleteVideo(id)}  className="delete"/>

        <div className="top-card" style={{backgroundColor: colorPrimary}}>
           <a href={link}>
           <img src={img} alt={title}/></a> 

        </div>
        <div className="info">
            <h4>{title}</h4>
            <h5>{description}</h5>
        </div>
        </Link>
    </div>
}

export default Video