
import React from 'react';
// Fixed: Changed SERVICES to MAIN_SERVICES and aliased it to resolve the import error
import { MAIN_SERVICES as SERVICES, PHARMACY_INFO } from '../constants';
import { Icon } from '../components/Icons';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Medical Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From GP consultations to pharmacy support and allied health services, we provide comprehensive care tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-emerald-200 transition-all">
              {/* Fixed: Used Icon component instead of rendering the raw string name */}
              <div className="mb-8 text-blue-600 opacity-80">
                <Icon name={service.icon} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              {/* Fixed: Used service.desc instead of service.description to match constants.tsx */}
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6">Need expert medication advice?</h2>
            <p className="text-emerald-100/80 text-lg max-w-xl mb-10 leading-relaxed">
              Our qualified pharmacists are always available for a personal consultation to ensure you understand your treatment.
            </p>
            <div className="flex gap-4">
              <a href={`tel:${PHARMACY_INFO.phone.replace(/\s/g, '')}`} className="bg-white text-emerald-900 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-colors">
                Call Pharmacist
              </a>
              <a href={`https://wa.me/${PHARMACY_INFO.whatsapp}`} className="bg-emerald-600 text-white border border-emerald-500 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-colors">
                WhatsApp Enquiry
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
