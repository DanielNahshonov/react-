import React from 'react'

export default function Student(students) {
  return (
    <div><tr>
      <td>{students.name}</td>
      <td>{students.age}</td>
      <td>{students.major}</td>
      <td>{students.university}</td>
      <td>{students.averageGrade}</td>
      </tr></div>
  )
}

