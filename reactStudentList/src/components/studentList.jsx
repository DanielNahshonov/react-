import React from 'react'
import Student from './Student'

export default function studentList({students}) {
  return (
    <div> 
      <tr>
      <td>name</td>
      <td>age</td>
      <td>major</td>
      <td>university</td>
      <td>averageGrade</td>
      </tr>
      {students.map((students,idx)=>{
        <Student students={students} key={idx}/>
      })}
    </div>
  )
}



