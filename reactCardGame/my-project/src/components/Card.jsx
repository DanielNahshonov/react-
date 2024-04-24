import React from 'react'

export default function Card({cardValue}) {
  return (
    <div className='bg-gray-200 m-2 p-4 border-2
     border-green-400 rounded-lg shadow-lg w-24
      h-24 flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>{cardValue}</h1>
    </div>
  )
}
