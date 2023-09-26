import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { search } from "../../api/api"
import "./Video.css"

const VideoInfo = ({url}) => {
    const [videoInfo, setVideoInfo]= useState([])
    
    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        search(`videos/${id}`, setVideoInfo).catch(()=>{
            navigate('/no-found')
        })
    }
    ,[id])

 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{videoInfo.title}</h2>
       <p className = "text__card">{videoInfo.description}</p>
     </article>
   </main>
 )
}

export default VideoInfo
