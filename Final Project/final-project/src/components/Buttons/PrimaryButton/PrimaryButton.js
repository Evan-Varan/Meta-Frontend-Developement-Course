import Button from "../Button";
import "../Button.css"

export default function PrimaryButton({text,type, ...props}){
    return(
    <Button text = {text} type = {type} {...props}/>
    )
}