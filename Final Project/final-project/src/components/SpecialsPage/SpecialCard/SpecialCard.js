import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton"
import "./SpecialCard.css"

export default function SpecialCard({name,description,imgSrc,size}){
    return(
        <div className="card-column">
            {size == "large" 
            ? 
            <img src = {imgSrc} className="image-large"/> 
            :
            <img src = {imgSrc} className="image-small"/>
            }
            <h4>{name}</h4>
            <p className="description-tag">{description}</p>
            <TertiaryButton text = "Order For Delivery"/>
        </div>
    )
}