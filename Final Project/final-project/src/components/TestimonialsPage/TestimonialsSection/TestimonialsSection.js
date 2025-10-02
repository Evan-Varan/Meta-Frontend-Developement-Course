import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import "./TestimonialsSection.css"
import Testimonials from "../Testimonials/Testimonials"
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton"
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton"

export default function TestimonialsSection(){
    return(
        <div className="testimonials-page">
            <div className="header-spacing">
                <h2>Testimonials</h2>
                <h3>Hear What Others Think</h3>
                <div className="divider"></div>
            </div>
            
            <Testimonials/>
            <TertiaryButton text="View All Testimonials"/>
        </div>
    )
}