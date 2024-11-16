import React, { useState } from 'react';
import './Auth.css'; // Import the CSS file for styling
import axios from 'axios'
const Auth = () => {
  const [formData, setFormData] = useState({ name: '', bio: '' });
  const [submittedData, setSubmittedData] = useState(null);

  
  const handleChange = async(e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', bio: '' }); // Clear the form after submission
  };

  return (
    <div className="container">
      <h2>Auth Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            className="form-input"
            rows="4"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Bio:</strong> {submittedData.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Auth;