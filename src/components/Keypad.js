// Code Keypad Component Here
function Password(){
    return (
        <input type="password" onChange={() => console.log("Entering password...")} />
    )

}

function Keypad (){
    return (
        <div>
            <Password />
        </div>
    )
}

export default Keypad;