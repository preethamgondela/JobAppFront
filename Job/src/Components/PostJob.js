import React, { useState } from 'react';

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission to post a new job
  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      description,
      location,
    };

    fetch('http://localhost:8080/api/postings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then((response) => response.json())
      .then((data) => setMessage('Job posted successfully!'))
      .catch((error) => {
        console.error('Error posting job:', error);
        setMessage('Failed to post job. Please try again.');
      });
  };

  return (
    <div>
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Post Job</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PostJob;
