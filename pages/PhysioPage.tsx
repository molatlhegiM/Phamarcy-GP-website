import React, { useState } from 'react';
import { PHARMACY_INFO } from '../constants';
import { Icon } from '../components/Icons';
import ContactModal from '../components/ContactModal';

const PhysioPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-moshate-blue font-bold uppercase tracking-widest text-sm mb-4 block">Physical Recovery</span>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-8">Expert Physiotherapy</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Regain your mobility and reduce pain with our evidence-based physiotherapy services. We treat patients of all ages, from athletes to the elderly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Sports Injuries', icon: 'Activity' },
                { title: 'Back & Neck Pain', icon: 'Shield' },
                { title: 'Joint Recovery', icon: 'Scale' },
                { title: 'Post-Surgery Rehab', icon: 'Heart' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Icon name={item.icon} className="text-blue-600" />
                  <span className="font-bold text-slate-800">{item.title}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto bg-moshate-blue hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Icon name="MessageSquare" /> Contact Physiotherapist
            </button>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
              alt="Physiotherapy session" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Physiotherapy Booking"
        description="Request a consultation with our on-site Physiotherapist. Tell us about your condition or injury so we can prepare your treatment plan."
        type="physio"
      />
    </div>
  );
};

export default PhysioPage;