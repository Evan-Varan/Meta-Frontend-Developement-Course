import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton"
import "./SpecialCard.css"

export default function SpecialCard({name,description,imgSrc, videoSrc, size}){
    return(
        <div className="card-column">
            {size == "large" 
            ?
            <>
                <img src = {imgSrc} className="image-large"/> 
                <video src = {videoSrc} className="video-large" muted loop autoPlay 
    preload="metadata"></video>
            </>
            :
            <>
                <img src = {imgSrc} className="image-small"/> 
                <video src = {videoSrc} className="video-small" muted loop autoPlay 
    preload="metadata"></video>
            </>
            }
            <h4>{name}</h4>
            <p className="description-tag">{description}</p>
            <TertiaryButton text = "Order For Delivery"/>
        </div>
    )
}