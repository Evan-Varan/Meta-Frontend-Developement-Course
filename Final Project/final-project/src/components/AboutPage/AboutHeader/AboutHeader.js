import "./AboutHeader.css"
import PeopleEating from "../../../assets/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg"
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton"
import LLLogo from "../../../assets/Logo.svg"
import { FaArrowRightLong } from "react-icons/fa6";
export default function AboutHeader(){
    return(
        <div className="about-header">
            <div className="text-chunk">
                <h2>About Us</h2>
                <h3>About Little Lemon</h3>
                <div className="divider"></div>
            </div>
            <div className="text-chunk">
                <p className="description-tag">Discover the heart of Mediterranean-inspired cuisine at Little Lemon. Blending tradition with fresh, vibrant flavors, our specials celebrate both comfort and creativity. Whether you’re joining us for a reserved evening or savoring our dishes at home, every bite brings the warmth of authentic hospitality.</p>
                <p className="description-tag">Discover the heart of Mediterranean-inspired cuisine at Little Lemon. Blending tradition with fresh, vibrant flavors, our specials celebrate both comfort and creativity. Whether you’re joining us for a reserved evening or savoring our dishes at home, every bite brings the warmth of authentic hospitality.</p>
                <TertiaryButton text= "View All Locations" Icon = {FaArrowRightLong}/>
            </div>
            <img src={LLLogo} className="lllogo"/>
        </div>
    )
}