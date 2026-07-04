import React from 'react'

const StudentComponent = ({student}) => {
  return (
    <div>
      <h1>Name: {student.name}</h1>
      <hr />
    </div>
  )
}

export default StudentComponent
