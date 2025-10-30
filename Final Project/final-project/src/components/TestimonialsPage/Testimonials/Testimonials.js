import TestimonialCard from "../TestimonialCard/TestimonialCard"
import "./Testimonials.css"
import Jordan from "../../../assets/jordan.webp"
import Tilly from "../../../assets/tilly.webp"
import Stewart from "../../../assets/stewart.webp"
import Veronica from "../../../assets/veronica.webp"

export default function Testimonials(){
    return(
        <div className="testimonials">
            <TestimonialCard 
            userImg = {Jordan} 
            user = "Jordan"
            year = "1999"
            description = "Little Lemon feels like a trip to the Mediterranean without leaving town. The flavors are authentic and fresh — the Greek salad tasted just like the one I had in Athens last summer. Every bite shows the love and tradition behind the recipes."
            />
            <TestimonialCard 
            userImg = {Tilly} 
            user = "Tilly"
            year = "2023"
            description = "From the moment you walk in, Little Lemon surrounds you with warmth — from the citrus-inspired décor to the attentive staff. The lemon-infused dessert was the perfect ending to an evening that felt more like a celebration than just dinner."
            />
            <TestimonialCard 
            userImg = {Stewart} 
            user = "Stewart"
            year = "2001"
            description = "I’ve never had such vibrant, fresh ingredients. The Mediterranean flavors at Little Lemon are both light and deeply satisfying. It’s the kind of place where you leave feeling nourished, not just full."
            />
            <TestimonialCard 
            userImg = {Veronica} 
            user = "Veronica"
            year = "2015"
            description = "Little Lemon blends fine dining with Mediterranean soul. The chef’s bites were beautifully plated and every course paired perfectly with the wine selection. It’s my new go-to spot for special occasions."
            />
        </div>
    )
}