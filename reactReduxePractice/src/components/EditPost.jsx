import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editPost } from '../actionCreator'

export default function EditPost() {
    const [id,setId] = useState ()
    const [body,setBody] = useState ('')
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" placeholder='enter id'   onChange={e=> setId(e.target.value)}/> <br />
        <input type="text" placeholder='enter body' onChange={e=> setBody(e.target.value)}/> <br />
        <button onClick={()=> dispatch(editPost(Number(id),body))}>edit</button>
    </div>
  )
}
