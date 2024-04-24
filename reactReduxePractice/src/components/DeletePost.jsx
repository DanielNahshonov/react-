import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../actionCreator'

export default function DeletePost() {
    const[postId,setPostId] = useState()
    const dispatch = useDispatch()
  return (
    <div>
        <input type="number" placeholder='enter post number' onChange={e=> setPostId(e.target.value)} /> <br />
        <button onClick={()=> dispatch(deletePost(postId))}>delete post</button>
    </div>
  )
}
