import "./InstagramCards.css"
import InstagramCard from "../InstagramCard/InstagramCard"
import Diner from "../../../assets/yuliia-huzenko-x5jrushqsMg-unsplash.jpg"
import Outdoors from "../../../assets/artur-tumasjan-bVWGUemqotE-unsplash.jpg"
import Indoors from "../../../assets/baguette-knight-TS62YsZj53Y-unsplash.jpg"

export default function InstagramCards(){
    return(
        <div className="insta-cards">
            <InstagramCard img = {Diner} imageNum = "1" />
            <InstagramCard img = {Indoors} imageNum = "2" />
            <InstagramCard img = {Outdoors} imageNum = "3" />
        </div>
    )
}