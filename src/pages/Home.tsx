import React, { useState } from 'react';
import { PHARMACY_INFO, TRUST_REASONS, MAIN_SERVICES } from '../constants';
import { Icon } from '../components/Icons';
import { Route } from '../App';
import WhatsAppModal from '../components/WhatsAppModal';

interface HomeProps {
  onNavigate: (route: Route) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative moshate-gradient overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600"
            alt="Modern Medical Facility"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 text-white z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-white/20">
              <Icon name="Activity" className="w-4 h-4" />
              <span>{PHARMACY_INFO.tagline}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Moshate Medical Centre
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Comprehensive medical, dental, and pharmacy services in the heart of Akasia. Professional healthcare for the whole family.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={`tel:${PHARMACY_INFO.phone}`}
                className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold text-center hover:bg-slate-50 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
              >
                <Icon name="Phone" /> Call {PHARMACY_INFO.phone}
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-black/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-center hover:bg-black/30 transition-all flex items-center justify-center gap-3"
              >
                <Icon name="MapPin" /> Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Cards */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TRUST_REASONS.map((reason, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-moshate-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  {reason.icon}
                </div>
                <h3 className="font-extrabold text-slate-900 text-xl mb-3">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Suites Rental Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 overflow-hidden relative text-white">
            <div className="relative z-10 max-w-2xl">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">Practice Growth</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Professional Suites and Rooms for Rent</h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                Moshate Medical Centre offers professional suites for doctors, dentists, physiotherapists, optometrists, nurses, and allied health practitioners. Elevate your practice in a premium Akasia location.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl active:scale-95"
              >
                Enquire About Consulting Suites
              </button>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Main Service Hub */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Medical Departments</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Specialized care for every member of the family, all under one roof.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAIN_SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => onNavigate(service.id as Route)}
                className="group relative bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all text-left overflow-hidden"
              >
                <div className="bg-moshate-blue w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-inner">
                  <Icon name={service.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 mb-6 text-sm">{service.desc}</p>
                <p className="text-moshate-blue text-sm font-bold flex items-center gap-2">
                  Learn more <Icon name="Wind" className="w-4 h-4" />
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full group-hover:bg-blue-50 transition-colors -z-0"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Consulting Suites Enquiry"
        description="Speak with our admin team about availability, pricing, and suite features."
        whatsappMessage="Hello, I would like to enquire about consulting suites for rent at Moshate Medical Centre."
      />
    </div>
  );
};

export default Home;