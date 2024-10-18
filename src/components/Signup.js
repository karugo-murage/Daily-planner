import React, { useState } from 'react';

function Signup() {
  // State to store user input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
  });

  // State to store form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log(formData); // Log the form data for now
    setSubmitted(true); // Mark the form as submitted
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>

      {submitted && (
        <div className="success-message">
          <h3>Form Submitted Successfully!</h3>
          <p>Thank you, {formData.name}. You have signed up with the email {formData.email}.</p>
        </div>
      )}
    </div>
  );
}

export default Signup;