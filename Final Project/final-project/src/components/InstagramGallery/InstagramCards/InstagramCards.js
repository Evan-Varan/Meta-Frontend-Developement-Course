import "./InstagramCards.css"
import InstagramCard from "../InstagramCard/InstagramCard"
import Diner from "../../../assets/yuliia-huzenko-x5jrushqsMg-unsplash.jpg"
import Outdoors from "../../../assets/artur-tumasjan-bVWGUemqotE-unsplash.jpg"
import Indoors from "../../../assets/baguette-knight-TS62YsZj53Y-unsplash.jpg"

export default function InstagramCards({slot1,slot2,slot3}){
    return(
        <div className="insta-cards">
            {slot1}
            {slot2}
            {slot3}
        </div>
    )
}