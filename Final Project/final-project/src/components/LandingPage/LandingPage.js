import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import Awards from "./Awards/Awards"
import './landingpage.css'

export default function LandingPage({
    landingPageRef,
    specialsPageRef,
    aboutPageRef,
    testimonialsSectionRef,
    experienceRef,
    instagramGalleryRef,
    scrollToSection}
){
    return(
        <div className="landing-bg">
            <header>
                <Navbar
                    landingPageRef = {landingPageRef}
                    specialsPageRef = {specialsPageRef}
                    aboutPageRef = {aboutPageRef}
                    testimonialsSectionRef = {testimonialsSectionRef}
                    experienceRef = {experienceRef}
                    instagramGalleryRef = {instagramGalleryRef}
                    scrollToSection = {scrollToSection}
                />
            </header>
            <div className="border-line"></div>
            <main>
                <Hero/>
                <Awards/>
            </main>
        </div>
    )
}