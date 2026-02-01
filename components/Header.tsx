
import React, { useState } from 'react';
import { PHARMACY_INFO } from '../constants';
import { Route } from '../App';

interface HeaderProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { name: string; id: Route }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Doctor', id: 'gp' },
    { name: 'Pharmacy', id: 'pharmacy' },
    { name: 'Clinic', id: 'clinic' },
    { name: 'Women\'s Health', id: 'women' },
    { name: 'Physio', id: 'physio' },
    { name: 'Dental', id: 'dental' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: Route) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="flex items-center space-x-2 text-left">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <div>
            <span className="font-bold text-slate-900 text-lg md:text-xl block leading-none">
              Moshate Medical
            </span>
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest hidden sm:block">
              {PHARMACY_INFO.tagline}
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600 px-2 py-1 ${
                currentRoute === link.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'
              }`}
            >
              {link.name}
            </button>
          ))}
          <a
            href={`tel:${PHARMACY_INFO.phone}`}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-sm active:scale-95 ml-2"
          >
            Call 069 684 7864
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden p-2 text-slate-600"
        >
          {isMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 py-6 px-4 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200 overflow-y-auto max-h-[80vh]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`block w-full text-left py-3 px-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-colors ${
                currentRoute === link.id ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 px-4">
            <a
              href={`tel:${PHARMACY_INFO.phone}`}
              className="block text-center bg-blue-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg"
            >
              Call Centre
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
