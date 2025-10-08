import Button from "../Button";

export default function TertiaryButton({text,Icon,type, ...props}){
    return(
        <Button text = {text} type = {type} Icon = {Icon} variant = "tertiary" {...props}/>
    )
}