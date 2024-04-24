import React from 'react'
import store from './store'
import AddPost from './components/AddPost'
import PostList from './components/PostList'
import DeletePost from './components/DeletePost'
import EditPost from './components/EditPost'

export default function App() {
  return (
    <div>
      <button onClick={()=> console.log(store.getState())}>Show state</button>
      <AddPost/>
      <PostList/>
      <DeletePost/>
      <EditPost/>
      
    </div>
  )
}
