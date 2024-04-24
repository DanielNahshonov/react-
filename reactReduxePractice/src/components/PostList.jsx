import React from 'react'
import { useSelector } from 'react-redux'

export default function PostList() {
    const posts = useSelector(state=> state.postReducer)
  return (
    <ul>
        {posts.map( post=> (
            <li key={post.id}>{post.name}: {post.body}</li>
        ))}
    </ul>
  )
}
