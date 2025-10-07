import "./NumberofGuests.css"

export default function NumberofGuests(){
    return(
        <div className="nog-col">
            <h2>Select number of guests</h2>
            <div className="nog-grid">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
            </div>
            <p>Parties large than 6 can contact us <u>here</u></p>
        </div>
    )
}