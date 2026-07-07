import React from "react";

const Miniproject = () => {
  const student = {
    name: "Rohit Kumar",
    isLogin: true,
    age: 20,
    marks: 72,
    feesPaid: false,
    assignments: 3,
    attendance: 82,
    isMonitor: true,
  };

  return (
    <div>
      {student.isLogin && <h1>Welcome, {student.name}</h1>}
      {student.age >= 18 ? <h2>Eligible For voting</h2> : <h2>Not Eligible</h2>}
      {student.marks >= 80 ? (
        <h3>Grade: Excellent</h3>
      ) : student.marks >= 60 ? (
        <h3>Grade: Pass</h3>
      ) : (
        <h3>Fail</h3>
      )}
      {student.feesPaid == true ? <h4>Fees paid</h4> : <h4>Fees Pending</h4>}
      {student.assignments > 0 && <h5>{student.assignments} Pending</h5>}
      {student.attendance < 75 && <h5>Your attendence is short</h5>}
      {student.isMonitor && <h3>👑 Class Monitor</h3>}
      {student.marks > 90 ? (
        <h3>Grade: A+</h3>
      ) : student.marks > 80 ? (
        <h3>Grade: A</h3>
      ) : student.marks > 70 ? (
        <h3>Grade: B</h3>
      ) : student.marks > 60 ? (
        <h3>Grade: C</h3>
      ) : (
        <h3>Grade: D</h3>
      )}
    </div>
  );
};

export default Miniproject;
