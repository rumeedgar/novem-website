import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/common';
import { HomePage, CashPage, PaymentsPage } from './pages';
import { customStyles } from './styles/customStyles';

const App = () => {
  return (
    <Router basename="/">
      <div style={{
        ...customStyles.root,
        backgroundColor: 'var(--c-bg)',
        color: 'var(--c-text-primary)',
        fontFamily: 'var(--font-sans)',
        lineHeight: 1.5,
        WebkitFontSmoothing: 'antialiased',
        minHeight: '100vh',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 var(--space-md)'
        }}>
          <Navigation />
          <div style={{
            height: '1px',
            background: 'var(--c-border)',
            margin: '0 calc(-1 * var(--space-md))'
          }}></div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/cash" element={<CashPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
