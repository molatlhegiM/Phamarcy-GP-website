
import React from 'react';
import { PHARMACY_INFO } from '../constants';
import { Icon } from '../components/Icons';

const ContactPage: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Contact Moshate Medical</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Visit us in Akasia for comprehensive healthcare services. We are conveniently located at Moshate Gardens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="space-y-12">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Icon name="MapPin" className="text-blue-600" /> Visit Our Centre
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">{PHARMACY_INFO.name}</h4>
                  <p className="text-slate-600 leading-relaxed">{PHARMACY_INFO.address}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800 text-sm font-medium flex gap-3">
                  <Icon name="Truck" className="w-5 h-5 flex-shrink-0" />
                  <span>Free secure parking available inside Moshate Gardens.</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Icon name="Clock" className="text-blue-600" /> Centre Hours
              </h3>
              <div className="space-y-4">
                {PHARMACY_INFO.openingHours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                    <span className="text-slate-600 font-bold">{h.day}</span>
                    <span className="text-slate-900 font-extrabold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${PHARMACY_INFO.phone}`} 
                className="flex-1 bg-blue-600 text-white p-6 rounded-3xl font-bold text-center flex items-center justify-center gap-3 shadow-xl hover:bg-blue-700 transition-all"
              >
                <Icon name="Phone" /> Call Now
              </a>
              <a 
                href={`https://wa.me/${PHARMACY_INFO.whatsapp}`} 
                className="flex-1 bg-white border-2 border-slate-200 text-slate-800 p-6 rounded-3xl font-bold text-center flex items-center justify-center gap-3 hover:border-blue-500 transition-all"
              >
                <Icon name="MessageSquare" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
            <iframe 
              src={PHARMACY_INFO.mapsUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Moshate Medical Centre Map"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
