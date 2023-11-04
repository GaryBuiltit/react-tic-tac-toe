import React, {useState} from "react";
import Box from "./Box";

const Board = ()=>{
const [player, setPlayer] = useState("X")

   
const changeTurn = ()=>{
    player === "X" ? setPlayer("O") : setPlayer("X");
}

    const boxes = [0,1,2,3,4,5,6,7,8]
    return (
        <div className="grid grid-cols-3">
          {boxes.map((box)=>{
            return <div onClick={changeTurn} key={box}><Box id={box} playerGo={player} key={box}/></div>
          })}
        </div>
    )
}

export default Board;