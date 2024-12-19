import React, { useState, useEffect } from 'react';
import MyPostings from './MyPostings';
import PostJob from './PostJob';

const App = () => {
  const [activeTab, setActiveTab] = useState('myPostings'); // default tab

  // Switch between tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1>Employer Dashboard</h1>

      <div className="tabs">
        <button onClick={() => handleTabChange('MyPostings')}>My Postings</button>
        <button onClick={() => handleTabChange('PostJob')}>Post a New Job</button>
      </div>

      {activeTab === 'MyPostings' && <MyPostings />}
      {activeTab === 'PostJob' && <PostJob />}
    </div>
  );
};

export default App;
