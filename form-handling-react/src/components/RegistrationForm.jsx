import React, { useState } from "react";

const RegistrationForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    if (!username){
      setErrors("All fields are required");
      return false;
    }
    if (!email){
        setErrors("All fields are required");
        return false;
      }
      if (!password){
        setErrors("All fields are required");
        return false;
      }
    setErrors("");
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      // Here you'd send the data to the mock API endpoint.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} // Controlled component
          onChange={handleChange} // Update state
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} // Controlled component
          onChange={handleChange} // Update state
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} // Controlled component
          onChange={handleChange} // Update state
        />
      </div>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
