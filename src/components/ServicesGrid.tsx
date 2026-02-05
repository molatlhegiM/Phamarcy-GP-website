
import React from 'react';
// Fixed: Changed SERVICES to MAIN_SERVICES and aliased it to resolve the import error
import { MAIN_SERVICES as SERVICES } from '../constants';
// Added missing Icon import
import { Icon } from './Icons';

const ServicesGrid: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive primary healthcare and medication management designed for our Pretoria community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all group"
            >
              {/* Fixed: Used Icon component instead of rendering the raw string name */}
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block text-blue-600">
                <Icon name={service.icon} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              {/* Fixed: Used service.desc instead of service.description to match constants.tsx */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
