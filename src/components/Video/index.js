import "./Video.css"

const Video = (props) =>{
    const {title, link, img, description, category}= props.data
    const {colorPrimary}=props
    return <div className="video-container">
        <div className="top-card" style={{backgroundColor: colorPrimary}}>
            <img src={img} alt={title}/>
        </div>
        <div className="info">
            <h4>{title}</h4>
            <h5>{description}</h5>
            <h5>{link}</h5>
        </div>
    </div>
}

export default Video