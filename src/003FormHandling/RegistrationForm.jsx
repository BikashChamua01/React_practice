import React, { useState } from "react";
import styled from "styled-components";

// helper functions for the registration form
// const validateEmail = (email) => {
//   // very simple RFC‐compliant regex
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// };

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name + " " + value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Wrapper>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="name-field element">
            <label htmlFor="name">Enter your name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="email-fiels element">
            <label htmlFor="email">Enter you email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jogh@gmail.com"
              required
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="gender element">
            <label htmlFor="gender">Select gender</label>
            <select
              id="gender"
              name="gender"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            >
              <option value={"male"}>male</option>
              <option value={"female"}>female</option>
            </select>
          </div>
          <button type="Submit" className="text-pink-200">
            Submit
          </button>
        </form>
        <div className="form-data">
          <div>The Entered Data</div>
          <div>
            <div>{formData.name}</div>
            <div>{formData.email}</div>
            <div>{formData.gender}</div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  color: black;
  font-family: a;
  max-width: 40vw;
  border-radius: 2rem;
  box-shadow: 10px 10px 20px 1px pink;
  border: 2px solid orange;
  padding: 2vw;

  form > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px;
  }

  input {
    width: 100%;
    padding: 2px;
    padding: 3px;
    border: 1px solid yellow;
    border-radius: 3px;
    outline: none;
  }

  label {
    display: block;
  }
`;

export default RegistrationForm;
