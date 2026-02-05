
import React from 'react';
import { OTC_CATEGORIES, PHARMACY_INFO } from '../constants';
import { Icon } from '../components/Icons';

const OTCPage: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Over-the-Counter Medicines</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Essential health and wellness products available for purchase without a prescription. Our pharmacists are here to guide your selection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {OTC_CATEGORIES.map((cat, i) => (
            <div key={i} className="group p-1 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-emerald-300 hover:bg-white hover:shadow-2xl transition-all">
              <div className="p-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Icon name={cat.icon} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{cat.title}</h3>
                <div className="space-y-2 mb-8">
                  {cat.examples.split(', ').map((ex, j) => (
                    <div key={j} className="flex items-center gap-3 text-slate-500 text-sm">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                      {ex}
                    </div>
                  ))}
                </div>
                <button className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:underline">
                  Check availability <Icon name="Wind" className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-50 border border-slate-200 rounded-[3rem] text-center max-w-4xl mx-auto">
          <Icon name="Shield" className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Safe Use of OTC Medicines</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Always read the label before use. If symptoms persist, please consult our pharmacist or your medical doctor. Availability of specific brands may vary by season and stock levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHARMACY_INFO.phone}`} className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold">Call to Check Stock</a>
            <a href={`https://wa.me/${PHARMACY_INFO.whatsapp}`} className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold">WhatsApp Enquiries</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTCPage;
