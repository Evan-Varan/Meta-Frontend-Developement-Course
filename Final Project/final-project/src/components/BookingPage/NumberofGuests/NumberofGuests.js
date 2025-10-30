import "./NumberofGuests.css"

export default function NumberofGuests({stepForwards}){
    return(
        <div className="nog-col">
            <h2>Select number of guests</h2>
            <div className="nog-grid">
                <button onClick={() => stepForwards()} data-testid ="button-one">1</button>
                <button onClick={() => stepForwards()}>2</button>
                <button onClick={() => stepForwards()}>3</button>
                <button onClick={() => stepForwards()}>4</button>
                <button onClick={() => stepForwards()}>5</button>
                <button onClick={() => stepForwards()}>6</button>
            </div>
            <p>Parties larger than 6 can contact us <u>here</u></p>
        </div>
    )
}