import "./ContactInfo.css"
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton"
import { BiError } from "react-icons/bi";
import { useState } from "react";

export default function ContactInfo({setStep}){
    const [firstName, setFirstName] = useState ("");
    const [firstNameErrorText, setFirstNameErrorText] = useState("");

    const [familyName, setFamilyName] = useState ("");
    const [familyNameErrorText, setFamilyNameErrorText] = useState("");
    
    const [email, setEmail] = useState("");
    const [emailErrorText, setEmailErrorText] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneErrorText, setPhoneErrorText] = useState("");

    const [hasSubmitted, setHasSubmitted] = useState(false);


    const handleFormSubmission = (e) => {
        e.preventDefault();                 // keep SPA behavior
        const form = e.currentTarget;       // the <form>

        setHasSubmitted(true);

        const isEmailValid = validateEmail(email);
        const isPhoneValid = validatePhone(phone);
        const isFirstNameValid = validateFirstName(firstName);
        const isFamilyNameValid = validateFamilyName(familyName);

        if(isEmailValid && isPhoneValid && isFirstNameValid && isFamilyNameValid){
            const backendPhoneNumber = normalizePhone(phone);
            console.log(backendPhoneNumber);
            setStep(1);                          // proceed when everything is valid
        }
    };
    

    function validatePhone(phone){
        const digitsOnly = phone.replace(/\D/g, ""); //remove all non digits chars
        if(!/^[0-9()\s+.-]*$/.test(phone)){ //fails if contains invalid chars (extra check)
            setPhoneErrorText("Phone number contains unallowed characters.")
            return false;
        }
        else if(digitsOnly.length < 10){
            setPhoneErrorText("Phone number must contain at least 10 digits.")
            return false;
        }
        else if(digitsOnly.length > 15){
            setPhoneErrorText("Phone number can contain a max of 15 digits.")
        }
        else{
            setPhoneErrorText("");
            return true;
        }
    }
    
    //we would return the normalize digit string (5121234567) for the backend
    function normalizePhone(phone) {
        return phone.replace(/\D/g, "");
    }

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        validatePhone(value);
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    }

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        setFirstName(value);
        validateFirstName(value);
    }
    const handleFamilyNameChange = (e) => {
        const value = e.target.value;
        setFamilyName(value);
        validateFamilyName(value);
    }
    function validateFirstName(firstName){
        if (!firstName) {
            setFirstNameErrorText("Name is required");
            return false;
        } else if (firstName.length < 2) {
            setFirstNameErrorText("Name must be at least 2 characters");
            return false;
        } else if (!/^[a-zA-Z\s'-]+$/.test(firstName)) {
            setFirstNameErrorText("Name Contains invalid characters");
            return false;
        }
        setFirstNameErrorText("");
        return true;
    }
    function validateFamilyName(familyName){
        if (!familyName.trim()) {
            setFamilyNameErrorText("Name is required");
            return false;
        } else if (familyName.trim().length < 2) {
            setFamilyNameErrorText("Name must be at least 2 characters");
            return false;
        } else if (!/^[a-zA-Z\s'-]+$/.test(familyName)) {
            setFamilyNameErrorText("Name Contains invalid characters");
            return false;
        }
        setFamilyNameErrorText("");
        return true;
    }

    function validateEmail(email){
        const checks = {
            hasBeforeAt : /^[^@]+/, //Ensures there’s at least one character before the @ symbol.
            hasAt : /@/, //Makes sure there’s an @ present at all.
            hasDomain : /@[^@]+$/, //Checks that there’s something after the @, meaning a domain name exists.
            hasDot: /@[^@]*\./, //Verifies the domain includes at least one dot separating the domain and TLD (with 2 chars) (like example.com).
            validTopLevelDomain: /\.(com|net|org|io|edu|gov|co)$/i, //Restricts allowed top-level domains to a known whitelist.
            validCharacters : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~@-]*$/, //Ensures there are no illegal symbols like ,, ", (, or ).
            noSpaces : /\s/, //no spaces
        };

        if(!checks.hasBeforeAt.test(email)){
            setEmailErrorText("Missing text before @")
            return false;
        }
        else if(!checks.hasAt.test(email)){
            setEmailErrorText("Missing @ symbol")
            return false;
        }
        else if(!checks.hasDomain.test(email)){
            setEmailErrorText("Missing domain name")
            return false;
        }
        else if(!checks.hasDot.test(email)){
            setEmailErrorText("Domain must include a dot (e.g. .com)")
            return false;
        }
        else if(!checks.validTopLevelDomain.test(email)){
            setEmailErrorText("Invalid top-level domain")
            return false;
        }
        else if(!checks.validCharacters.test(email)){
            setEmailErrorText("Contains invalid characters")
            return false;
        }
        else if(checks.noSpaces.test(email)){
            setEmailErrorText("Email cannot contain spaces")
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
                        <input value = {firstName} onChange = {handleFirstNameChange} type = "text" placeholder ="First Name" id="first-name" minLength ="2" name="first-name" required autoComplete = "given-name" className={`contact-input ${firstNameErrorText ? "error" : ""}`}></input>
                        <div className={`error-message ${firstNameErrorText ? 'active' : ''}`}>
                            <BiError color = "#e74c3c"/>
                            <p>{firstNameErrorText}</p>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Last Name</label>
                        <input value = {familyName} onChange = {handleFamilyNameChange} type = "text" placeholder ="Last Name" id="last-name" minLength ="2" name="last-name" required autoComplete = "family-name" className={`contact-input ${familyNameErrorText ? "error" : ""}`}></input>
                        <div className={`error-message ${familyNameErrorText ? 'active' : ''}`}>
                            <BiError color = "#e74c3c"/>
                            <p>{familyNameErrorText}</p>
                        </div>
                    </div>
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input value = {email} inputMode = "email" onChange={handleEmailChange} type = "text" placeholder ="Email" id="email" name="email" required autoComplete = "email" className={`contact-input ${emailErrorText ? "error" : ""}`}></input>
                    <div className={`error-message ${emailErrorText ? 'active' : ''}`}>
                        <BiError color="#e74c3c"/>
                        <p id="email-error">{emailErrorText}</p>
                    </div>

                </div>
                <div className="input-group">
                    <label>Company - Optional</label>
                    <input type = "text" placeholder ="Company - Optional" id="company" minLength ="2" name="company" autoComplete = "organization"className="contact-input"></input>
                </div>
                <div className="input-group">
                    <label>Phone</label>
                    <input value = {phone} type = "text" placeholder ="Phone" onChange={handlePhoneChange} id="phone" minLength ="10" name="phone" required autoComplete = "tel" pattern="[0-9]{10}" className={`contact-input ${phoneErrorText ? "error" : ""}`}></input>
                    <div className={`error-message ${phoneErrorText ? 'active' : ''}`}>
                        <BiError color="#e74c3c"/>
                        <p id="email-error">{phoneErrorText}</p>
                    </div>
                </div>
            </div>
            <TertiaryButton
            type="submit"
            text="CONTINUE"
            />
        </form>
    )
}