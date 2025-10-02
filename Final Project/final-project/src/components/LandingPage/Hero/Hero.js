import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton"
import "./hero.css"

export default function Hero(){
    return(
        <div className="hero">
            <div className="inner-spacing">
                <h1 className="welcome-to">Welcome to</h1>
                <h1 className="little-lemon">Little <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>Lemon</span></h1>
            </div>
            <div className="inner-spacing">
                <p className="heading-description">
                    At Little Lemon we celebrate bold Mediterranean flavors and slow, thoughtful hospitality. 
                    Our menu blends time-honored recipes with seasonal ingredients—bright citrus, fragrant herbs, and simple preparations that let each ingredient sing. 
                    Come for the food, stay for the warmth: every dish is crafted to feel like a meal at a friend’s table. </p>
                <div className="buttons">
                    <PrimaryButton text = "RESERVE"/>
                    <SecondaryButton text = "LEARN MORE"/>
                </div>
            </div>
        </div>
    )
}