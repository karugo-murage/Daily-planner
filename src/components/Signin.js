import React, { useState } from 'react';

function SignIn() {
  // State to store user input
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State to track form submission status
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
    console.log(formData); // Log form data for now
    setSubmitted(true); // Mark the form as submitted
  };

  return (
    <div className="signin-form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Sign In</button>
      </form>

      {submitted && (
        <div className="success-message">
          <h3>Login Successful!</h3>
          <p>You have signed in with the email {formData.email}.</p>
        </div>
      )}
    </div>
  );
}

export default SignIn;