
import React, { useState } from 'react';

function SignPage() {
  // State to toggle between Sign Up and Sign In
  const [isSignUp, setIsSignUp] = useState(true);

  // State to store user input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    gender: '',
    password: '',
  });

  // State to store sign in input
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  // State to store form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handle input change for both forms
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  // Handle form submission for both Sign Up and Sign In
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Sign Up Data:", formData);
    } else {
      console.log("Sign In Data:", signInData);
    }
    setSubmitted(true);
  };

  // Toggle between Sign Up and Sign In forms
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setSubmitted(false); // Reset form submission status
  };

  return (
    <div className="auth-form-container">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp ? (
          <>
            <div className='label-input'>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='label-input'>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='label-input'>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='label-input'>
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
            <div className='label-input'>
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
          </>
        ) : (
          <>
            <div className='label-input'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={signInData.email}
                onChange={handleSignInChange}
                required
              />
            </div>
          </>
        )}

        <div className='label-input'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={isSignUp ? formData.password : signInData.password}
            onChange={isSignUp ? handleInputChange : handleSignInChange}
            required
          />
        </div>

        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>

      {submitted && (
        <div className="success-message">
          <h3>Form Submitted Successfully!</h3>
          {isSignUp ? (
            <p>
              Thank you, {formData.firstName} {formData.lastName}. You have signed up with the username "{formData.username}" and the email {formData.email}.
            </p>
          ) : (
            <p>Welcome back! You have successfully signed in.</p>
          )}
        </div>
      )}

      <button className="buttonspecial" onClick={toggleForm}>
        {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
      </button>
    </div>
  );
}

export default SignPage;