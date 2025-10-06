import "./InstagramCard.css"

export default function InstagramCard({img,imageNum}){
    return(
        <div className="insta-card-col fade-in">
            <h3>0{imageNum}/10</h3>
            <img src = {img} className="insta-img"/>
        </div>
    )
}