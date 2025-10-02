import "./AboutPage.css"
import AboutLeft from "./AboutLeft/AboutLeft"
import AboutHeader from "./AboutHeader/AboutHeader"

export default function AboutPage(){
    return(
        <div className="about-page">
            <AboutLeft/>
            <AboutHeader/>
        </div>
    )
}