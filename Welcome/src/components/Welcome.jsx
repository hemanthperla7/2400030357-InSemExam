import React from 'react';

const Welcome = ({ name }) => {
  return (
    <div className="welcome-container">
      <h1>Welcome, {name}!</h1>
    </div>
  );
};

export default Welcome;