import React from "react";

const EventObject = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted Successfully");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
        />
        <label htmlFor="">Age</label>
        <input
          type="text"
          placeholder="Enter your age"
        />
        <label htmlFor="">Rollno</label>
        <input
          type="text"
          placeholder="Enter your Rollno"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EventObject;
