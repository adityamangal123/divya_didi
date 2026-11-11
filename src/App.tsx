import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync state with browser location path if user refreshes or pastes url
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, '');
      if (['about', 'services', 'solutions', 'partners', 'contact'].includes(path)) {
        setCurrentPage(path);
      } else {
        setCurrentPage('home');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleNavigate('services');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy-700 selection:bg-brand-blue selection:text-white">
      {/* Sticky Corporate Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

      {/* Main Page Content Body */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectService={handleSelectService}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate}
            selectedServiceId={selectedServiceId}
          />
        )}
        {currentPage === 'solutions' && (
          <SolutionsPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'partners' && (
          <PartnersPage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Corporate Enterprise Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

