import React from "react";

const Students = () => {
  const students = [
    { id: 1, name: "Rohit", age: 20 },
    { id: 2, name: "Aman", age: 22 },
    { id: 3, name: "Rahul", age: 19 },
  ];
  return (
    <div>
        <h1>Students Details:</h1>
        {students.map((stu) => (
            <p key={stu.id}>{stu.name} - {stu.age}</p>
        ))}
    </div>
  )
};

export default Students;
