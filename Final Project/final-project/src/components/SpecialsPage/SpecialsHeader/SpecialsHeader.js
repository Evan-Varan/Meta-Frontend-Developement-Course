import PrimaryButton from "../../Buttons/PrimaryButton.js/PrimaryButton";
import "./SpecialsHeader.css"
export default function SpecialsHeader(){
    return(
        <div className="header-grid"> 
            <h2>SPECIALS</h2>
            <p>Discover the heart of Mediterranean-inspired cuisine at Little Lemon. Blending tradition with fresh, vibrant flavors, our specials celebrate both comfort and creativity. Whether you’re joining us for a reserved evening or savoring our dishes at home, every bite brings the warmth of authentic hospitality.</p>
            <h3>Explore Little Lemon</h3>
            <p>Little Lemon</p>
            <PrimaryButton text = "RESERVE"/>
        </div>
    )
}