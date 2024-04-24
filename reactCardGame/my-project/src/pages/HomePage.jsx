import React, { useState } from 'react'
import Table from '../components/Table'

export default function HomePage({validName}) {
const [name,setName] = useState('')


  return (
    <div className='text-center p-5'>
        <h1 className='text-3xl font-bold mb-4'>Ready for War?</h1>
        <hr />
        <input type="text" placeholder='Enter your name'
        onChange={e=>setName(e.target.value)}
        className='mt-2 p-2 border-2 rounded border-gray-300'/>
        <br />
        <button
        onClick={()=> validName(name)}
        className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >Start</button>
        <Table/>
    </div>
  )
}
