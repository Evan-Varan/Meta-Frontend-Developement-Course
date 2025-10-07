import "./SubHeader.css"
export default function SubHeader({number,name}){
    return(
        <div className="subheader">
            <p>0{number}</p>
            <div className="vertical-line"></div>
            <h2>{name}</h2>
        </div>
    )
}