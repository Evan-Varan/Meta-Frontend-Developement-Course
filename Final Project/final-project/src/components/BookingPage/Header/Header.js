import SubHeader from "../SubHeader/SubHeader";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Header.css"
export default function Header(){
    return(
        <div className="header-col">
            <div className="main-header-row">
                <FaArrowLeftLong className="header-arrow"/>
                <h2>LITTLE LEMON</h2>
                <FaArrowRightLong className="header-arrow"/>
            </div>
            <div className="slider-divider-background">
                <div className="slider-divider-progress"></div>
            </div>
            <div className="secondary-header-row">
                <SubHeader number = "1" name = "Number of guests"/>
                <SubHeader number = "2" name = "Choose date"/>
                <SubHeader number = "3" name = "Contact info"/>
            </div>
        </div>
    )
}