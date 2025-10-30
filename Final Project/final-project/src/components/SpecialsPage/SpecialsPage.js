import SpecialsHeader from "./SpecialsHeader/SpecialsHeader"
import SpecialCard from "./SpecialCard/SpecialCard"
import ChefBites from "../../assets/restauranfood.webp"
import Bruchetta from "../../assets/bruchetta.svg"
import GreekSalad from "../../assets/greek-salad.webp"
import LemonDessert from "../../assets/lemon-dessert.webp"
import chefBitesVideo from "../../assets/3298720-uhd_2160_4096_25fps.mp4"
import greekSaladVideo from "../../assets/4255507-uhd_2160_4096_25fps.mp4"
import bruchettaVideo from "../../assets/3196463-uhd_3840_2160_25fps.mp4"
import lemonDessertVideo from "../../assets/3325984-hd_1920_1080_24fps.mp4"
import "./SpecialsPage.css"

export default function SpecialsPage(){
    return(
        <div className="specials-page">
            <SpecialsHeader/>
            <div className="specials-cards">
            <SpecialCard 
                name ="Chef Bites" 
                description = "Start your journey with our chef’s signature bites—perfectly balanced, flavorful appetizers crafted to awaken your taste buds and set the stage for a memorable dining experience."
                imgSrc = {ChefBites}
                videoSrc={chefBitesVideo}
                size = "large"
            />
            <SpecialCard 
                name ="Bruchetta" 
                description = "Experience the artistry of our kitchen with every plate. Our chefs bring passion and precision to each dish, ensuring your meal is as delightful to look at as it is to taste."
                imgSrc = {Bruchetta}
                videoSrc={bruchettaVideo}
                size = "small"
            />
            <SpecialCard 
                name ="Greek Salad" 
                description = "Fresh, crisp, and bursting with flavor, our Greek Salad is a classic favorite. Featuring garden vegetables, briny olives, and tangy feta, it’s a refreshing option for any meal of the day."
                imgSrc = {GreekSalad}
                videoSrc={greekSaladVideo}
                size = "large"
            />
            <SpecialCard 
                name ="Lemon Dessert" 
                description = "End on a sweet note with our signature lemon-infused dessert. Light, zesty, and indulgent, it’s the perfect balance of citrus brightness and creamy decadence."
                imgSrc = {LemonDessert}
                videoSrc={lemonDessertVideo}
                size = "small"
            />
            </div>
        </div>
    )
}