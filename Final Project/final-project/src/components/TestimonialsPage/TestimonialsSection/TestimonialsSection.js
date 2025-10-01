import PrimaryButton from "../../Buttons/PrimaryButton.js/PrimaryButton"
import "./TestimonialsSection.css"
import Testimonials from "../Testimonials/Testimonials"

export default function TestimonialsSection(){
    return(
        <div className="testimonials-page">
            <h2>Testimonials</h2>
            <h3>Hear What Others Think</h3>
            <Testimonials/>
            <PrimaryButton text="View All Testimonials"/>
        </div>
    )
}