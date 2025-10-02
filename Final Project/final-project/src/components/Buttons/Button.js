
export default function Button({text, Icon, variant = "primary", ...props}){
    return(
        <button
        {...props}
        className={`btn btn-${variant}`}
        >
        {text}
        {Icon && <Icon className = "icon"/>}
        </button>
    )
}