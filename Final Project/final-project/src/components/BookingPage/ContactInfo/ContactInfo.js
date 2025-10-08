import "./ContactInfo.css"
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton"
import { BiError } from "react-icons/bi";
import { useState } from "react";


/*TODO:
    Regex for email and phone
    
    Must contain an @ symbol.

    Must have at least one period (.) in the domain portion.

    Must not contain invalid characters (spaces, commas, semicolons, etc.).

    Must not start or end with special characters.

    Local part (before @) ≤ 64 chars, domain part ≤ 255 chars.
*/

export default function ContactInfo({setStep}){
    const [emailErrorText, setEmailErrorText] = useState("");
    const [email, setEmail] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleFormSubmission = (e) => {
        e.preventDefault();                 // keep SPA behavior
        const form = e.currentTarget;       // the <form>
        const email = form.email.value.trim(); //from name = "email"

        setHasSubmitted(true);
        if(!validateEmail(email)){
            alert("Invalid Email!")
        }
        else{
            alert("valid Email")
        }

        const valid = form.checkValidity() && validateEmail(email);  // run native validation logic
        if(valid){
            setStep(1);                          // proceed when everything is valid
        }
    };
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const form = e.target.form
        if (form && form.classList.contains("was-validated")) {
            validateEmail(value);
        }
    }

    function validateEmail(email){
        const regex3CharsBeforeAt = /^[A-Za-z0-9._%+-]{3,}@/;
        const regexDomainAfterAt = /@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/;
        const regexDotAndTwoLetterDomain = /\.[A-Za-z]{2,}$/;
        const regexFull = /^[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if(!regex3CharsBeforeAt.test(email)){
            setEmailErrorText("Please enter at least 3 characters before the @ sign.")
            return false;
        }
        else if(!regexDomainAfterAt.test(email)){
            setEmailErrorText("Please enter a domain after the @ sign")
            return false;
        }
        else if(!regexDotAndTwoLetterDomain.test(email)){
            setEmailErrorText("Please enter a domain with at least two characters")
            return false;
        }
        else if(!regexFull.test(email)){
            setEmailErrorText("Please enter a valid email address")
            return false;
        }
        else{
             setEmailErrorText(""); // clear message when valid
            return true;
        }
    }


    return(
        /* noValidate allows us to just to validation through the onSubmit without the popups */
        <form className="contact-col" noValidate onSubmit={handleFormSubmission}>
            <h2>Enter your details</h2>
            <div className="contact-section">
                <div className="contact-row">
                    <div className="input-group">
                        <label>First Name</label>
                        <input type = "text" placeholder ="First Name" id="first-name" minLength ="2" name="first-name" required autoComplete = "given-name" className="contact-input"></input>
                        <div className="error-message">
                            <BiError color = "#e74c3c"/>
                            <p>Please enter your first name</p>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Last Name</label>
                        <input type = "text" placeholder ="Last Name" id="last-name" minLength ="2" name="last-name" required autoComplete = "family-name" className="contact-input"></input>
                        <div className="error-message">
                            <BiError color = "#e74c3c"/>
                            <p>Please enter your last name</p>
                        </div>
                    </div>
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input value = {email} onChange={handleEmailChange} type = "email" placeholder ="Email" id="email" name="email" required autoComplete = "email" className="contact-input"></input>
                    <div className="error-message">
                            <BiError color = "#e74c3c"/>
                            <p>{emailErrorText}</p>
                    </div>
                </div>
                <div className="input-group">
                    <label>Company - Optional</label>
                    <input type = "text" placeholder ="Company - Optional" id="company" minLength ="2" name="company" autoComplete = "organization"className="contact-input"></input>
                </div>
                <div className="input-group">
                    <label>Phone</label>
                    <input type = "tel" placeholder ="Phone"  id="phone" minLength ="10" name="phone" required autoComplete = "tel" pattern="[0-9]{10}" className="contact-input"></input>
                    <div className="error-message">
                        <BiError color = "#e74c3c"/>
                        <p>Please enter your phone number</p>
                    </div>
                </div>
            </div>
            <TertiaryButton
            type="submit"
            onClick={(e) => e.currentTarget.form.classList.add("was-validated")}
            text="CONTINUE"
            />
        </form>
    )
}