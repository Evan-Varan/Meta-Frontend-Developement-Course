import { useState } from "react";
import "./BookingPage.css"
import Header from "./Header/Header";
import NumberofGuests from "./NumberofGuests/NumberofGuests";
import ChooseDate from "./ChooseDate/ChooseDate";
import ContactInfo from "./ContactInfo/ContactInfo";
import { useNavigate } from "react-router-dom";

export default function BookingPage(){
    const[step, setStep] = useState(1)

    const navigate = useNavigate();
    const handleHomePage = () => {
        navigate("/");
    };

    function stepForwards(){
        console.log("stepForward")
        if(step < 3){
            setStep(step+1);
        }
    }
    function stepBackwards(){
        if(step == 1){
            handleHomePage();
        }
        if(step > 1){
            setStep(step-1);
        }
        console.log("stepBackwards")
    }
    function renderStep(){
        if(step == 1){
            return <NumberofGuests stepForwards = {stepForwards}/>
        }
        else if(step == 2){
            return <ChooseDate stepForwards = {stepForwards}/>
        }
        else if(step == 3){
            return <ContactInfo setStep={setStep}/>
        }
        else{
            return null
        }
    }
    return(
        <div className="booking-page">
            <Header step ={step} setStep= {setStep} stepForwards = {stepForwards} stepBackwards= {stepBackwards}/>
            {renderStep()}
        </div>
    )
}