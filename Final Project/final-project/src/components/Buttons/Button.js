
export default function Button({text, Icon, variant = "primary", ...props}){
    return(
        <button
        {...props}
        className={`btn btn-${variant}`}
        >
        {Icon && <Icon className = "icon"/>}
        {text}
        </button>
    )
}