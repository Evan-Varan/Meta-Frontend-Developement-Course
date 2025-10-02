import Button from "../Button";

export default function TertiaryButton({text,Icon, ...props}){
    return(
        <Button text = {text} Icon = {Icon} variant = "tertiary" {...props}/>
    )
}