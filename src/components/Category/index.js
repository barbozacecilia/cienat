import "./Category.css"
import Video from "../Video"


const Category = (props) => {
    const{ colorPrimary, colorSecondary, title} = props.data
    const {videos} = props

    const color = {
        backgroundColor: colorSecondary
    } 

    const borderTitle ={
        borderColor: colorPrimary
    }

    return <>
        {
        videos.length > 0 && 
            <section className="category" style={color}>
            <h3 style={borderTitle}>{title}</h3>
            <div className="videos">
                {
                videos.map((video, index)=> <Video 
                    data={video}
                    key={index} 
                    colorPrimary={colorPrimary}
                    /> )
                }
            </div>
        </section>
    }
    
    </>
}
export default Category