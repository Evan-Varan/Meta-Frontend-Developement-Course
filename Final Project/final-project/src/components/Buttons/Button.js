
export default function Button({text, Icon, type, variant = "primary", ...props}){
    return(

        <button
        {...props}
        className={`btn btn-${variant}`}
        type = {type}
        >
        <span>{text}</span>
        {Icon && <Icon className = "icon"/>}
        </button>
        
    )
}