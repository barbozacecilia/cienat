import "./Video.css"
import { GrClose } from "react-icons/gr"

const Video = (props) =>{
    const {title, link, img, description, category}= props.data
    const {colorPrimary, deleteVideo } = props
    
    return <div className="video-container">
        <GrClose onClick={deleteVideo}  className="delete"/>

        <div className="top-card" style={{backgroundColor: colorPrimary}}>
           <a href={link}>
           <img src={img} alt={title}/></a> 

        </div>
        <div className="info">
            <h4>{title}</h4>
            <h5>{description}</h5>
        </div>
    </div>
}

export default Video