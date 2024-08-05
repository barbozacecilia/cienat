import "./Category.css"
import Video from "../Video"
import hexToRgba from 'hex-to-rgba';


//REVISAR//


const Category = (props) => {
    const { colorPrimary, title } = props.data
    const { videos, deleteVideo, updateColor } = props

    const color = {
        backgroundColor: hexToRgba(colorPrimary, 0.6)
    }

    const borderTitle = {
        borderColor: colorPrimary
    }

    return <>
        {
            videos.length > 0 &&
            <section className="category" style={color}>
                <input
                    className="input-color"
                    type="color"
                    value={colorPrimary}
                    onChange={(event) => { updateColor(event.target.value, title) }}
                />
                <h3 style={borderTitle}>{title}</h3>
                <div className="videos">
                    {
                        videos.map((video, id) => <Video
                            data={video}
                            key={video.id}
                            colorPrimary={hexToRgba(colorPrimary, 0.6)}
                            deleteVideo={deleteVideo}
                        />)
                    }

                </div>
            </section>
        }

    </>
}
export default Category