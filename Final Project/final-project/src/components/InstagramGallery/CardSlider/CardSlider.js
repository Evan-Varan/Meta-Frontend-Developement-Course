import "./CardSlider.css"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CardSlider({changeCardsForward, changeCardsBackwards, slotTracker3}){
    return(
        <div className="card-slider">
            <FaArrowLeftLong  className="arrow" onClick={() => changeCardsBackwards()}/>
            <div className="insta-slider-divider-background">
                <div className="slider-divider-progress" style={{width: `${(slotTracker3 + 1) * 2}rem`}}></div>
            </div>
            
            <FaArrowRightLong className="arrow" onClick={() => changeCardsForward()}/>
        </div>
    )
}