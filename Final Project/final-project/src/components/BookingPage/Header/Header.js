import SubHeader from "../SubHeader/SubHeader";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Header.css"
export default function Header({setStep, stepForwards, stepBackwards}){
    return(
        <div className="header-col">
            <div className="main-header-row">
                <FaArrowLeftLong className="header-arrow" onClick={() => stepBackwards()}/>
                <h2>LITTLE LEMON</h2>
                <FaArrowRightLong className="header-arrow" onClick={() => stepForwards()}/>
            </div>
            <div className="slider-divider-background">
                <div className="slider-divider-progress"></div>
            </div>
            <div className="secondary-header-row">
                <SubHeader number = "1" name = "Number of guests" onClick={() => setStep(1)}/>
                <SubHeader number = "2" name = "Choose date" onClick={() => setStep(2)}/>
                <SubHeader number = "3" name = "Contact info" onClick={() => setStep(3)}/>
            </div>
        </div>
    )
}