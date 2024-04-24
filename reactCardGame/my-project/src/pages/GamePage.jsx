import React, { useState } from "react";
import Card from "../components/Card";

export default function GamePage({
  player,
  computerDeck,
  playerDeck,
  computerPoints,
  playerPoints,
  setPlayerPoints,
  setComputerPoints,
  setPage,
  setPlayer,}) {

const[index,setIndex] = useState(0)

const increaseIndex = () =>{
    if(computerDeck[index] > playerDeck[index]){
        setComputerPoints(computerPoints + 1)
    }else if(computerDeck[index] < playerDeck[index]){
        setPlayerPoints(playerPoints + 1)
    }
    setIndex((prevIndex)=> prevIndex +1)
    if(index === 25){
        let copiedPlayer = {...player}
        if(playerPoints > computerPoints){
            copiedPlayer.wins++
        }else if(playerPoints <= computerPoints){
            copiedPlayer.lost++
        }
        setPlayer(copiedPlayer)
        setPage(2)
    }
}
  return (
  <div className="text-center">
    <div className="flex justify-evenly">
    <div className="flex flex-col items-center my-4">
        <h1 className="text-xl font-bold">Computer</h1>
        <Card cardValue={computerDeck[index]}/>
        <p>wins: {computerPoints}</p>
    </div>
    <div className="flex flex-col items-center my-4">
        <h1 className="text-xl font-bold">{player.fullName}</h1>
        <Card cardValue = {playerDeck[index]}/>
        <p>wins: {playerPoints}</p>

    </div>
    </div>
    <p>score: {index}</p>
    <button
    onClick={increaseIndex}
    className="bg-blue-500 hover:bg-blue-700 text-white
     font-bold py-2 px-6 rounded-md"
    >Next</button>
  </div>
  )}
