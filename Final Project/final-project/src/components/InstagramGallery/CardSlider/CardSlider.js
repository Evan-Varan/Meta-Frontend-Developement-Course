import "./CardSlider.css"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CardSlider(){
    return(
        <div className="card-slider">
            <FaArrowLeftLong />
            <div className="slider-divider"></div>
            <FaArrowRightLong />
        </div>
    )
}