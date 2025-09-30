import Button from "../Button";

export default function SecondaryButton({text, ...props}){
    return(
        <Button text = {text} variant = "secondary" {...props}/>
    )
}