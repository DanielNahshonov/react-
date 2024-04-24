import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post'
import PostList from './components/PostList'

function App() {
  let postList =[
    {
      title: "Post 1",
      info: "This is the information about the first post. It contains details and relevant content."
    },
    {
      title: "Post 2",
      info: "Here's the information regarding the second post. It includes various insights and discussions."
    },
    {
      title: "Post 3",
      info: "This is the content associated with the third post. It may include updates, analysis, or other relevant data."
    }
  ]
  

  return (
    <>
     <Post info={postList[0].info} title={postList[0].title}/>
     <PostList postList={postList}/>

    </>
  )
}

export default App
