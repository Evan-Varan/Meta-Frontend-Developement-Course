import "./SubHeader.css"
export default function SubHeader({number,name, onClick}){
    return(
        <div className="subheader" onClick={onClick}>
            <p>0{number}</p>
            <div className="vertical-line"></div>
            <h2>{name}</h2>
        </div>
    )
}