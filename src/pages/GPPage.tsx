
import React from 'react';
import { PHARMACY_INFO } from '../constants';
import { Icon } from '../components/Icons';

const GPPage: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">General Practitioner</span>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Doctor's Consultations</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our experienced doctors provide compassionate care for a wide range of medical needs, from chronic condition management to acute illness and emergency procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Icon name="Activity" className="text-blue-600" /> Core GP Services
            </h3>
            <ul className="space-y-4">
              {[
                'Chronic Medication Management',
                'Emergency Care & Minor Procedures',
                'Medical Circumcision',
                'Diagnostic Laboratory Services',
                'Sick Notes & Insurance Reports',
                'Referrals to Specialists'
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000" 
              alt="Medical Consultation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-blue-900 rounded-[3rem] p-12 text-white text-center">
          <h2 className="text-3xl font-extrabold mb-6">Ready to see a doctor?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">We accept all major medical aids. Walk-ins are welcome, but appointments are recommended for specialized procedures.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href={`tel:${PHARMACY_INFO.phone}`} className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50">Call 069 684 7864</a>
             <a href={`https://wa.me/${PHARMACY_INFO.whatsapp}`} className="bg-blue-600 text-white border border-blue-500 px-8 py-4 rounded-2xl font-bold">WhatsApp Booking</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPPage;
