import React, { useState } from 'react';
import { PHARMACY_INFO } from '../constants';
import { Icon } from '../components/Icons';
import ContactModal from '../components/ContactModal';

const DentalPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="py-20 bg-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Family Dental Care</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          Comprehensive dental services for a brighter, healthier smile. From routine cleaning to specialized orthodontic work.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { title: 'Braces', icon: 'Sparkles', desc: 'Orthodontic solutions for all ages.' },
            { title: 'Whitening', icon: 'Wind', desc: 'Professional brightening treatments.' },
            { title: 'Extractions', icon: 'Shield', desc: 'Safe and painless surgical removal.' },
            { title: 'Fillings', icon: 'Activity', desc: 'Restore tooth function and aesthetics.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-blue-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                <Icon name={item.icon} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto bg-white p-10 rounded-[3rem] border border-blue-200 shadow-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Soon</h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Dental services are available or coming soon to Moshate Medical Centre. Enquire now for booking information or practice opportunities.
          </p>
          <button 
            onClick={() => setModalOpen(true)}
            className="w-full bg-moshate-blue hover:bg-blue-700 text-white px-8 py-5 rounded-2xl font-bold shadow-lg transition-all"
          >
            Enquire About Dental Services
          </button>
        </div>
      </div>

      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Dental Care Enquiry"
        description="Request information about dental consultations or professional opportunities within our dental department."
        type="dental"
      />
    </div>
  );
};

export default DentalPage;