
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
// Added imports for previously unlinked pages
import ServicesPage from './pages/ServicesPage';
import OTCPage from './pages/OTCPage';
import ScriptsPage from './pages/ScriptsPage';
import ComplianceBanner from './components/ComplianceBanner';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

// Updated Route type to include 'services', 'otc', and 'scripts' to fix type errors in Footer.tsx
export type Route = 'home' | 'gp' | 'pharmacy' | 'clinic' | 'women' | 'physio' | 'dental' | 'contact' | 'services' | 'otc' | 'scripts';

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash.replace('#', '') as Route;
      if (path) setCurrentRoute(path);
    };
    window.addEventListener('popstate', handlePopState);
    
    const initialPath = window.location.hash.replace('#', '') as Route;
    if (initialPath) setCurrentRoute(initialPath);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: Route) => {
    setCurrentRoute(route);
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
      // Added missing cases for navigation
      case 'services': return <ServicesPage />;
      case 'otc': return <OTCPage />;
      case 'scripts': return <ScriptsPage />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header currentRoute={currentRoute} onNavigate={navigate} />
      
      <main className="flex-grow animate-in fade-in duration-500">
        {renderView()}
      </main>

      <ComplianceBanner />
      <Footer onNavigate={navigate} />
      
      <AIAssistant />
    </div>
  );
}

export default App;
