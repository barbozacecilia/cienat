import "./Category.css"
import Video from "../Video"


const Category = (props) => {
    const{ colorPrimary, colorSecondary, title} = props.data

    const color = {
        backgroundColor: colorSecondary
    } 

    const borderTitle ={
        borderColor: colorPrimary
    }

    return <section className="category" style={color}>
        <h3 style={borderTitle}>{title}</h3>
        <div className="videos">
            <Video/>
            <Video/>
        </div>
    </section>
}

export default Category