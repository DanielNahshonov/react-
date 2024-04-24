import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import studentList from './components/studentList'

function App() {
  const [count, setCount] = useState(0)



const students = [
  {
    id: 1,
    name: "Brad Pitt",
    age: 24,
    major: "Film Studies",
    university: "Tel Aviv University",
    averageGrade: 88,
  },
  {
    id: 2,
    name: "Angelina Jolie",
    age: 22,
    major: "International Relations",
    university: "Hebrew University of Jerusalem",
    averageGrade: 92,
  },
  {
    id: 3,
    name: "Leonardo DiCaprio",
    age: 23,
    major: "Environmental Science",
    university: "Ben-Gurion University",
    averageGrade: 90,
  },
  {
    id: 4,
    name: "Meryl Streep",
    age: 21,
    major: "Drama",
    university: "University of Haifa",
    averageGrade: 95,
  },
  {
    id: 5,
    name: "Denzel Washington",
    age: 25,
    major: "Political Science",
    university: "Bar-Ilan University",
    averageGrade: 87,
  },
  {
    id: 6,
    name: "Kate Winslet",
    age: 22,
    major: "Literature",
    university: "Technion",
    averageGrade: 91,
  },
  {
    id: 7,
    name: "Tom Hanks",
    age: 24,
    major: "History",
    university: "Weizmann Institute of Science",
    averageGrade: 89,
  },
  {
    id: 8,
    name: "Natalie Portman",
    age: 23,
    major: "Psychology",
    university: "Princeton University",
    averageGrade: 93,
  },
]



  return (
    <>
    <studentList students={students}/>
    </>
  )
}

export default App