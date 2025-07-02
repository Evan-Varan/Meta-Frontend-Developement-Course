// function Btn(){
//     const clickHandler = () => console.log("Button Clicked!")
//     return(
//         <button onClick = {clickHandler}>Click Me!</button>
//     )
// }
// export default Btn

function Btn(){
    const mouseOverHandler = () => console.log("Moused Over!")
    return(
        <button onMouseOver = {mouseOverHandler}>Hover Me!</button>
    )
}
export default Btn
