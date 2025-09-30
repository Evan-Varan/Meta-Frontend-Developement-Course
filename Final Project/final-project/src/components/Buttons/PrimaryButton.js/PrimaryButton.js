import Button from "../Button";
import "../Button.css"

export default function PrimaryButton({text, ...props}){
    return(
    <Button text = {text} {...props}/>
    )
}