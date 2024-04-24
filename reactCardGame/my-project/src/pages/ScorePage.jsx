import React from 'react'

export default function ScorePage({tryAgain,player,
    playerPoints,computerPoints,newGame,playersList,setPlayerList,addPlayer,playerIndex}) {
        const checkWinner = ()=> {
            if(playerPoints > computerPoints){
              playersList(playerIndex).win++
            return <h1 className='text-2xl font-bold text-green-500'>You win!</h1>
            }else if(playerPoints < computerPoints){
              playersList(playerIndex).lost++
            return <h1 className='text-2xl font-bold text-red-500'>You lose!</h1>
            }else {return <h1 className='text-xl font-bold text-blue-500'>Its a tie!</h1>}
        }
  return (
    <div className='text-center p-5'>
        {checkWinner()}
        <h2 className='text-lg'> wins: {playersList(playerIndex).wins} , Lost: {playersList(playerIndex).lost}</h2>
        <button className='mt-2 m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={tryAgain}>Try again </button>
        <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={newGame}
        > New Game  </button>
    </div>
  )
}
