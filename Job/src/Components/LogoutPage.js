import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any stored session information (e.g., localStorage, cookies, etc.)
    // Here, we'll assume you're storing a token in localStorage for authentication.

    localStorage.removeItem('authToken'); // Remove auth token from localStorage (if used)
    sessionStorage.removeItem('authToken'); // Remove auth token from sessionStorage (if used)

    // Optionally, you could clear cookies or other session data if necessary.
    // document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Redirect the user to the login page after logging out.
    navigate('/login');
  }, [navigate]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h2 className="card-title mb-4">Logging out...</h2>
              <p>Please wait while we log you out...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
