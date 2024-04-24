import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import NewRoom from "./components/NewRoom";
import AddNewRoom from "./components/AddNewRoom";
import { useState } from "react";

function App() {
  const [rooms,setRooms]= useState([])
  const [name,setName] = useState('Guest')
  setName('David')

  

  let roomArr=[{}]
  return (
    <div>
      <Header />
      {name}
      <NewRoom />
      <Routes>
        <Route path="/addNewRoom" element={<AddNewRoom/>} />
        <Route path='/rooms/:userId' />
        {rooms.map( e =>{
          return <Route path={`/rooms/${e.name}`}}/>
        })}
        {/* <Route path="/" element={}/> */}
        <Route />
      </Routes>
    </div>
  );
}

export default App;
