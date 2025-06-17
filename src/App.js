import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Check if GA4 is loaded
    if (typeof window.gtag !== 'function') {
      console.warn('GA4 not loaded yet. begin_checkout events will not be tracked.');
    }
  }, []);

  const handleBookWalkClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'begin_checkout');
      console.log('✅ begin_checkout event sent to GA4');
    } else {
      console.warn('⚠️ GA4 not ready – begin_checkout not fired.');
    }

    // Open the Google Form in a new tab
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
          bord
