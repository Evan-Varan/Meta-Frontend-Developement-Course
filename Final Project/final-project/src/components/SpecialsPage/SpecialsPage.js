import SpecialsHeader from "./SpecialsHeader/SpecialsHeader"
import SpecialCard from "./SpecialCard/SpecialCard"
import "./SpecialsPage.css"

export default function SpecialsPage(){
    return(
        <div className="specials-page">
            <SpecialsHeader/>
            <SpecialCard/>
        </div>
    )
}