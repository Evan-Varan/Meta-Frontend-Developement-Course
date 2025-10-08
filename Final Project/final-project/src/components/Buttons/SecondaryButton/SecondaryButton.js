import Button from "../Button";

export default function SecondaryButton({text,type, ...props}){
    return(
        <Button text = {text} type = {type} variant = "secondary" {...props}/>
    )
}