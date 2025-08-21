import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import SupportPage from './pages/SupportPage';
import MarketingPage from './pages/MarketingPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
            <a href="#main-content" className="skip-link">
              Asosiy kontentga o'tish
            </a>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/marketing" element={<MarketingPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;