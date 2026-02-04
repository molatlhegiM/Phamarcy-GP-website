import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import GPPage from './pages/GPPage';
import PharmacyPage from './pages/PharmacyPage';
import ClinicPage from './pages/ClinicPage';
import WomenHealthPage from './pages/WomenHealthPage';
import PhysioPage from './pages/PhysioPage';
import DentalPage from './pages/DentalPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ComplianceBanner from './components/ComplianceBanner';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

export type Route = 'home' | 'gp' | 'pharmacy' | 'clinic' | 'women' | 'physio' | 'dental' | 'contact' | 'services';

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Route;
      if (['home', 'gp', 'pharmacy', 'clinic', 'women', 'physio', 'dental', 'contact', 'services'].includes(hash)) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('home');
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: Route) => {
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentRoute) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'gp': return <GPPage />;
      case 'pharmacy': return <PharmacyPage />;
      case 'clinic': return <ClinicPage />;
      case 'women': return <WomenHealthPage />;
      case 'physio': return <PhysioPage />;
      case 'dental': return <DentalPage />;
      case 'contact': return <ContactPage />;
      case 'services': return <ServicesPage />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth selection:bg-moshate-teal selection:text-white">
      <Header currentRoute={currentRoute} onNavigate={navigate} />
      
      <main className="flex-grow animate-in fade-in duration-700">
        {renderView()}
      </main>

      <ComplianceBanner />
      <Footer onNavigate={navigate} />
      
      <AIAssistant />
    </div>
  );
}

export default App;
