
import React from 'react';
import { PHARMACY_INFO } from '../constants';

const LocationSection: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Find & Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-emerald-600 text-2xl">📍</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Physical Address</h4>
                    <p className="text-slate-600">{PHARMACY_INFO.address}</p>
                    <p className="text-slate-500 text-sm mt-1">Convenient parking available directly in front of the pharmacy.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-emerald-600 text-2xl">📞</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Contact Details</h4>
                    <p className="text-slate-600">Tel: {PHARMACY_INFO.phone}</p>
                    <p className="text-slate-600">WhatsApp: {PHARMACY_INFO.whatsapp}</p>
                    <p className="text-slate-600">Email: {PHARMACY_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center space-x-2">
                <span>🕒</span> <span>Opening Hours</span>
              </h4>
              <div className="space-y-3">
                {PHARMACY_INFO.openingHours.map((h, i) => (
                  <div key={i} className="flex justify-between text-sm py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-600 font-medium">{h.day}</span>
                    <span className="text-slate-900 font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PHARMACY_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-white border-2 border-slate-200 py-4 rounded-xl font-bold text-slate-900 hover:border-emerald-500 hover:text-emerald-600 transition-all"
              >
                Open in Google Maps
              </a>
              <a 
                href={`tel:${PHARMACY_INFO.phone}`}
                className="flex-1 text-center bg-emerald-600 py-4 rounded-xl font-bold text-white hover:bg-emerald-700 transition-all"
              >
                Call Store
              </a>
            </div>
          </div>

          <div className="h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <iframe 
              src={PHARMACY_INFO.mapsUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Brooklyn Pharmacy Map"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationSection;
