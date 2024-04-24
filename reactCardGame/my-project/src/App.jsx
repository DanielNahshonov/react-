import { useState } from 'react'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import ScorePage from './pages/ScorePage'


function App() {
  const[page,setPage] = useState(0)
  const [player,setPlayer] = useState({})
  const [playerDeck,setPlayerDeck] = useState([])
  const [computerDeck,setComputerDeck] = useState([])
  const [playerPoints,setPlayerPoints] = useState(0)
  const [computerPoints,setComputerPoints] = useState(0)
  const [playersList,setPlayersList] = useState([])
  const[playerIndex,setPlayerIndex] = useState()

  const addPlayer = (player) => {
    setPlayersList([...playersList, player]);
};  
  const createDeck =()=>{
    let cardDeck =[]
    for(let i = 0;i<4; i++){
      for(let j=1; j<=13; j++){
        cardDeck.push(j)
      }
    }
    let rndIndex;
    let compDeck = []
    let playDeck = []
    
    for( let i =0; i<26; i++){
      rndIndex = Math.floor(Math.random() * cardDeck.length)
      playDeck.push(cardDeck[rndIndex])
      cardDeck.splice(rndIndex,1)
      
      rndIndex = Math.floor(Math.random() * cardDeck.length)
      compDeck.push(cardDeck[rndIndex])
      cardDeck.splice(rndIndex,1)
      
    }
    
    setPlayerDeck([...playDeck])
    setComputerDeck([...compDeck])
  }

  const validName = (name) => {
    const existingPlayer = playersList.find( p => p.fullName === name)
    if(!existingPlayer){
      setPlayer({ fullName: name, wins: 0, lost: 0 });
      addPlayer({ fullName: name, wins: 0, lost: 0 })
      
    }else{
      let index = playersList.indexOf(existingPlayer)
      setPlayerIndex(index)
      setPlayer(playersList(index))
    }
    createDeck();
        setPage(1);




    // let found = false;
    // for (let i = 0; i < playersList.length; i++) {
    //     if (name === playersList[i].fullName) {
    //         setPlayer(playersList[i]);
    //         createDeck();
    //         setPage(1);
    //         found = true;
    //         break; 
    //     }
    // }
    // if (!found) {
    //     setPlayer({ fullName: name, wins: 0, lost: 0 });
    //     createDeck();
    //     addPlayer()
    //     setPage(1);
    // }
};

//! here
  const newGame =()=>{
    createDeck()
    setPlayerPoints(0)
    setComputerPoints(0)
    setPage(0)
    setPlayerIndex()
  }

  const tryAgain = () =>{
    createDeck()
    setPlayerPoints(0)
    setComputerPoints(0)
    setPage(1)
    setPlayerIndex()

  }

  const showPages = () =>{
    if(page === 0){
      return <HomePage validName={validName}
      playersList={playersList}
      playerIndex={playerIndex}/>
    }else if (page === 1){
      return <GamePage 
      playerIndex={playerIndex}
      playersList={playersList}
      player= {player}
      computerDeck = {computerDeck}
      playerDeck = {playerDeck}
      computerPoints = {computerPoints}
      playerPoints = {playerPoints}
      setPlayerPoints = {setPlayerPoints}
      setComputerPoints = {setComputerPoints}
      setPage = {setPage}
      setPlayer = {setPlayer}
      />
    } else if (page === 2){
      return <ScorePage
      playerIndex={playerIndex}
      playersList={playersList}
      setPlayersList={setPlayersList}
      addPlayer={addPlayer}
      newGame = {newGame}
      player={player}
      playerPoints = {playerPoints}
      computerPoints = {computerPoints}
      tryAgain={tryAgain}/>
    }
  }
  
  return (
    <>
  <div>
    {showPages()}
  </div>
  </>
  )
}

export default App
