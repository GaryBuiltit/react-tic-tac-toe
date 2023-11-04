import React, {useState} from "react";


const Box = (props)=>{
    const id =props.id;
    const [playerClicked, setPlayerClicked] = useState("")
    
       const boxClicked = () =>{
        document.getElementById("box" + props.id).classList.add("bg-yellow-300");
        document.getElementById("box" + props.id).classList.remove("bg-white");
         setPlayerClicked(props.playerGo)
       }
        
    return (
        <div id={"box" + props.id} onClick={boxClicked} className="rounde-md h-32 w-32 bg-white rounded-lg m-4 flex flex-col items-center justify-center">
        <h1 className="text-black">{playerClicked}</h1>
        </div>
    )
}

export default Box;