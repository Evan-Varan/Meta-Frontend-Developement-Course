import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import Awards from "./Awards/Awards"
import './landingpage.css'

export default function LandingPage(){
    return(
        <div className="landing-bg">
            <header>
                <Navbar/>
            </header>
            <div className="border-line"></div>
            <main>
                <Hero/>
                <Awards/>
            </main>
        </div>
    )
}