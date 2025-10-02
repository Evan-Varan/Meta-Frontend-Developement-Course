import "./InstagramGallery.css"
import InstagramCards from "./InstagramCards/InstagramCards"
import InstagramHeader from "./InstagramHeader/InstagramHeader"
import CardSlider from "./CardSlider/CardSlider"

export default function InstagramGallery(){
    return(
        <div className="insta-gallery">
            <InstagramHeader/>
            <InstagramCards/>
            <CardSlider/>
        </div>
        
    )
}