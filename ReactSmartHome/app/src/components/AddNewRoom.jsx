import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddNewRoom() {
  const navigate = useNavigate()

  function createRoom(){
    if(true)
    {
      navigate('/')
    }
  }
  return (
    <div>
        <select name="" id="" placeholder='chose room'>
            <option value="">bath</option>
            <option value="">kithchen</option>
            <option value="">salon</option>
            <option value="">bedroom</option>
            </select>
        <input type="text" placeholder='chose name' />
        <input type="color" placeholder='chose color' />
        <button onClick={createRoom}>select</button>
    </div>
  )
}
