
export default function Button({text, Icon, variant = "primary", ...props}){
    return(

        <button
        {...props}
        className={`btn btn-${variant}`}
        >
        <span>{text}</span>
        {Icon && <Icon className = "icon"/>}
        </button>
        
    )
}