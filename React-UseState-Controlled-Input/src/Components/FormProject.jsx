import React, { useState } from "react";

const FormProject = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [city, setCity] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedAge, setSubmittedAge] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedName(name);
    setSubmittedAge(age);
    setSubmittedCity(city);
  }

  function handlename(e) {
    setName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleCity(e) {
    setCity(e.target.value);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <br />
        <input type="text" value={name} onChange={handlename} />
        <br />
        <label htmlFor="">Age</label>
        <br />
        <input type="number" value={age} onChange={handleAge} />
        <br />
        <label htmlFor="">City</label>
        <br />
        <input type="text" value={city} onChange={handleCity} />
        <br />
        <button>Submit</button>
      </form>

      <hr />
      <h1>Name: {submittedName}</h1>
      <p>
        <b>Age:</b> {submittedAge}
      </p>
      <p>
        <b>City:</b> {submittedCity}
      </p>
    </div>
  );
};

export default FormProject;
