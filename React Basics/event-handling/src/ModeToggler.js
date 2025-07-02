function ModeToggler(){
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function clickHandler() {
        darkModeOn = !darkModeOn
        if(darkModeOn){
            console.log("Dark Mode is On")
        }
        else{
            console.log("Light Mode is On")
        }
    }

    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick = {clickHandler}>Toggle Mode</button>
        </div>
    )
}
export default ModeToggler