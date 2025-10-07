import "./BookingPage.css"
import Header from "./Header/Header";
import NumberofGuests from "./NumberofGuests/NumberofGuests";

export default function BookingPage(){
    return(
        <div className="booking-page">
            <Header/>
            <NumberofGuests/>
        </div>
    )
}