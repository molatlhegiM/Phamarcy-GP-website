
import React from 'react';
import { PHARMACY_INFO } from '../constants';
import { Icon } from '../components/Icons';

const ClinicPage: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Clinic Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Essential primary healthcare provided by our professional nursing team. Fast, efficient, and professional care for everyday health needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Immunisations', desc: 'Full range of baby and adult vaccinations including flu shots.', icon: 'Shield' },
            { title: 'IV Drip Therapy', desc: 'Hydration and vitamin therapy under professional supervision.', icon: 'Activity' },
            { title: 'Health Screenings', desc: 'BP, glucose, cholesterol, and BMI monitoring.', icon: 'Scale' },
            { title: 'Family Planning', desc: 'Confidential consultations and contraceptive support.', icon: 'Heart' },
            { title: 'HIV Testing', desc: 'Rapid, professional, and confidential testing and counseling.', icon: 'Wind' },
            { title: 'Wound Care', desc: 'Dressing of minor wounds and surgical recovery support.', icon: 'Thermometer' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
               <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm">
                 <Icon name={item.icon} />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicPage;
