import React from "react";
import Board from "./Board";

const App = ()=>{
    return (
        <div className="flex flex-col items-center bg-blue-950 h-full"> 
    <h1 className="font-extrabold text-5xl pt-6">Tic Tac Toe</h1>
        <Board />
        </div>
    )
}

export default App;