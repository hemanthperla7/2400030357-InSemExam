import React, { useState } from 'react';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setSubmitted(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Dashboard</h1>
        
        {!submitted ? (
          <div className="input-container">
            <h2>Enter Your Name</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="name-input"
                autoFocus
              />
              <button type="submit" className="submit-btn">
                Greet Me!
              </button>
            </form>
          </div>
        ) : (
          <div className="greeting-container">
            <Welcome name={name} />
            <button onClick={handleReset} className="reset-btn">
              Enter Another Name
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;