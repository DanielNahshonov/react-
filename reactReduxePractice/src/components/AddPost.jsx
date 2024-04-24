import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../actionCreator'

export default function AddPost() {
    const [name,setName] = useState('')
    const [body,setBody] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" placeholder='enter Name' onChange={e => setName(e.target.value)} /> <br />
        <input type="text" placeholder='enter Body' onChange={e => setBody(e.target.value)} /> <br />
        <button onClick={()=>dispatch(addPost(name,body))}>addPost</button>
    </div>
  )
}
