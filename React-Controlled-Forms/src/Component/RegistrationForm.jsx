import React, { useState } from "react";
import "../App.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    age: "",
  });
  const [submitData, setSubmitData] = useState(null);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.city ||
      !formData.age
    ) {
      setError("Please fill all fields!");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Please Enter a Valid Email");
      return;
    }

    if (formData.phone.length !== 10) {
      setError("Phone Number must be 10 digits");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password Must be 6 or more Characters");
      return;
    }

    if (formData.age < 18) {
      setError("Age must be 18+");
      return;
    }

    setError("");

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      city: "",
      age: "",
    });

    setSubmitData(formData);
  }

  console.log(formData);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <form action="" onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="">Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student Name"
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter student Email"
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Set Password"
          min={6}
          max={10}
        />

        <label htmlFor="">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter student Phone Number"
        />

        <label htmlFor="">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter student City"
        />

        <label htmlFor="">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter student age"
        />

        <button>Submit </button>
      </form>

      <div>
        {submitData && (
          <div>
            <h1>Name: {submitData.name}</h1>
            <p>Email: {submitData.email}</p>
            <p>
              <b>Phone:</b> {submitData.phone}
            </p>
            <p>
              <b>City:</b> {submitData.city}
            </p>
            <p>
              <b>Age:</b> {submitData.age}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
