import React, { useState, useEffect } from 'react';

const MyPostings = () => {
  const [postings, setPostings] = useState([]);

  // Fetch the employer's job postings from the backend
  useEffect(() => {
    fetch('http://localhost:8080/api/postings')
      .then((response) => response.json())
      .then((data) => setPostings(data))
      .catch((error) => console.error('Error fetching postings:', error));
  }, []);

  return (
    <div>
      <h2>My Postings</h2>
      <ul>
        {postings.length > 0 ? (
          postings.map((posting) => (
            <li key={posting.id}>
              <h3>{posting.title}</h3>
              <p>{posting.description}</p>
              <p><strong>Location:</strong> {posting.location}</p>
            </li>
          ))
        ) : (
          <p>No job postings found.</p>
        )}
      </ul>
    </div>
  );
};

export default MyPostings;
