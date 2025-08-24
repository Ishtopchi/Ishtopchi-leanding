import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Language } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import SupportPage from './pages/SupportPage';
import MarketingPage from './pages/MarketingPage';
import PrivacyPage from './pages/PrivacyPage';
import DataSecurityPage from './pages/DataSecurityPage';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Language wrapper component
const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const validLanguages = ['uz', 'en', 'ru'];
  
  if (!lang || !validLanguages.includes(lang)) {
    return <Navigate to="/uz" replace />;
  }
  
  return (
    <LanguageProvider initialLanguage={lang as Language}>
      {children}
    </LanguageProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
          <a href="#main-content" className="skip-link">
            Asosiy kontentga o'tish
          </a>
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/uz" replace />} />
            
            {/* Language-based routes */}
            <Route path="/:lang" element={
              <LanguageWrapper>
                <HomePage />
              </LanguageWrapper>
            } />
            <Route path="/:lang/support" element={
              <LanguageWrapper>
                <SupportPage />
              </LanguageWrapper>
            } />
            <Route path="/:lang/marketing" element={
              <LanguageWrapper>
                <MarketingPage />
              </LanguageWrapper>
            } />
            <Route path="/:lang/privacy" element={
              <LanguageWrapper>
                <PrivacyPage />
              </LanguageWrapper>
            } />
            <Route path="/:lang/privacy" element={
              <LanguageWrapper>
                <PrivacyPage />
              </LanguageWrapper>
            } />
            <Route path="/:lang/data-security" element={
              <LanguageWrapper>
                <DataSecurityPage />
              </LanguageWrapper>
            } />
            
            {/* Fallback for any other routes */}
            <Route path="*" element={<Navigate to="/uz" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;