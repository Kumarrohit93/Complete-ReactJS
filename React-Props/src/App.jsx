import React from 'react'
import StudentComponent from './Components/StudentComponent'

const App = () => {
  const obj1 = [{
    name: 'John Doe',
    age: 20,
    course: 'Computer Science',
    skills: ['JavaScript', 'React', 'Node.js']
  },
  {
    name: 'Jane Smith',
    age: 22,
    course: 'Information Technology',
    skills: ['Python', 'Django', 'SQL']
  }, 
{
    name: 'Alice Johnson',
    age: 21,
    course: 'Software Engineering',
    skills: ['Java', 'Spring', 'Hibernate']
}]
  return (
    <div>
      <StudentComponent name="Rohit"/>
    </div>
  )
}

export default App
