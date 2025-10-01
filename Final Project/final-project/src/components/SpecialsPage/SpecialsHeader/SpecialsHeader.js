import PrimaryButton from "../../Buttons/PrimaryButton.js/PrimaryButton";
import "./SpecialsHeader.css"
import Logo from "../../../assets/Logo.svg"
export default function SpecialsHeader(){
    return(
        <div className="header-row"> 
            <div className="header-col-left">
                <h2>SPECIALS</h2>
                <h3>Explore Little Lemon</h3>
                <PrimaryButton text = "RESERVE"/>
            </div>
            <div className="header-col-right">
                <p className="header-description">Discover the heart of Mediterranean-inspired cuisine at Little Lemon. Blending tradition with fresh, vibrant flavors, our specials celebrate both comfort and creativity. Whether you’re joining us for a reserved evening or savoring our dishes at home, every bite brings the warmth of authentic hospitality.</p>
                <img src = {Logo} className="logo"/>
            </div>
        </div>
    )
}