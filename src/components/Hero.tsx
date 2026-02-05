import React from 'react';
import { PHARMACY_INFO } from '../constants';
import { Icon } from './Icons';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-emerald-900 overflow-hidden min-h-[500px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1600"
          alt="Clean Pharmacy Interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white z-10 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-emerald-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Your Local Health Partner
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Community Pharmacy in {PHARMACY_INFO.suburb}, Pretoria
          </h1>
          <p className="text-lg md:text-xl text-emerald-50/80 mb-10 leading-relaxed">
            Chronic medication, professional clinic services, and friendly health advice right here in your neighborhood.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${PHARMACY_INFO.whatsapp}?text=${encodeURIComponent('Hi, I would like to request a repeat script.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-center hover:bg-emerald-50 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Icon name="MessageSquare" className="w-5 h-5" /> WhatsApp Scripts
            </a>
            <a
              href="#contact"
              className="bg-emerald-600 text-white border border-emerald-500 px-8 py-4 rounded-xl font-bold text-center hover:bg-emerald-700 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Icon name="MapPin" className="w-5 h-5" /> Find Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;