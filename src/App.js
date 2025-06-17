import React from 'react';
import './App.css';

function App() {
  const handleBookWalkClick = () => {
    if (typeof gtag === 'function') {
      gtag('event', 'begin_checkout');
    }
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSe0zbWuDfXxqza-cUODxd4U_WaEpqjMXCcXcTan86uk6F4Phg/viewform',
      '_blank'
    );
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>BackupBuddy</h1>
      <p>Helping you feel safer walking alone.</p>
      <button
        onClick={handleBookWalkClick}
        style={{
          padding: '14px 28px',
          background: '#0069ff',
          color: 'white',
          fontSize: '18px',
          borderRadius: '8px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Book a Walk
      </button>
    </div>
  );
}

export default App;
