import "./ContactInfo.css"
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton"

/*TODO:
    Our own validation instead of builtin validation message
    Regex for email and phone
*/



export default function ContactInfo({setStep}){

    const handleFormSubmission = (e) => {
    e.preventDefault();                 // keep SPA behavior
    const form = e.currentTarget;       // the <form>

    const valid = form.checkValidity();  // run native validation logic
    if(valid){
        setStep(1);                          // proceed when everything is valid
    }
  };


    return(
        <form className="contact-col" onSubmit={handleFormSubmission}>
            <h2>Enter your details</h2>
            <div className="contact-row">
                <div className="input-group">
                    <label>First Name</label>
                    <input type = "text" placeholder ="First Name" id="first-name" minLength ="2" name="first-name" required autoComplete = "given-name" className="contact-input"></input>
                </div>
                <div className="input-group">
                    <label>Last Name</label>
                    <input type = "text" placeholder ="Last Name" id="last-name" minLength ="2" name="last-name" required autoComplete = "family-name" className="contact-input"></input>
                </div>
            </div>
            <div className="input-group">
                <label>Email</label>
                <input type = "email" placeholder ="Email" id="email" name="email" required autoComplete = "email" className="contact-input"></input>
            </div>
            <div className="input-group">
                <label>Company - Optional</label>
                <input type = "text" placeholder ="Company - Optional" id="company" minLength ="2" name="company" autoComplete = "organization"className="contact-input"></input>
            </div>
            <div className="input-group">
                <label>Phone</label>
                <input type = "tel" placeholder ="Phone"  id="phone" minLength ="10" name="phone" required autoComplete = "tel" pattern="[0-9]{10}" className="contact-input"></input>
            </div>
            <TertiaryButton
            type="submit"
            onClick={(e) => e.currentTarget.form.classList.add("was-validated")}
            text="CONTINUE"
            />
        </form>
    )
}