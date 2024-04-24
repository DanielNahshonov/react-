import React from 'react'

export default function Post({title,info}) {
  return (
    <div>
        <h1>Title: {title}</h1>
        <h2>Info: {info}</h2>
    </div>
  )
}
