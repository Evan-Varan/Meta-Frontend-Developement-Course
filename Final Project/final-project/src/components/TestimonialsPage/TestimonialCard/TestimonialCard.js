import "./TestimonialCard.css"

export default function TestimonialCard({userImg,user,year,description}){
    return(
         <div className="test-card-background">
            <div className="test-card-column">
                <div className="profile-row">
                    <img src= {userImg} className="user-img"/>
                    <div className="user-info-col">
                        <p className="user-text">{user}</p>
                        <p className="year-text">Dining Since {year}</p>
                    </div>
                </div>
                <p className="test-description-text">{description}</p>
            </div>
         </div>
    )
}