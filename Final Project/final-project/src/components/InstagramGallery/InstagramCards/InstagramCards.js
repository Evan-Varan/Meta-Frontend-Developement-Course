import "./InstagramCards.css"

export default function InstagramCards({slot1,slot2,slot3}){
    return(
        <div className="insta-cards">
            {slot1}
            {slot2}
            {slot3}
        </div>
    )
}