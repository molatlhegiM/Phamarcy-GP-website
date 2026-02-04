import React, { useState } from 'react';
import { PHARMACY_INFO, PHARMACY_PRODUCTS } from '../constants';
import { Icon } from '../components/Icons';
import ContactModal from '../components/ContactModal';

const PharmacyPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Promotional Header Banner */}
      <div className="bg-moshate-blue text-white overflow-hidden relative py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest uppercase gap-2">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="w-4 h-4 text-moshate-teal" />
            <span>Winter Health Specials: 20% OFF selected immune boosters</span>
          </div>
          <div className="flex items-center gap-6">
            <span>No Online Sales</span>
            <div className="h-4 w-[1px] bg-white/20 hidden md:block"></div>
            <span>Visit Us In-Store</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 pb-12 border-b border-slate-100">
          <div className="max-w-2xl">
            <span className="text-moshate-blue font-bold uppercase tracking-widest text-sm mb-4 block">Medical Grade Supplies</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">In-House Pharmacy</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Fast, professional, and reliable. Moshate Medical Centre Pharmacy stocks a comprehensive range of chronic and over-the-counter medications for Akasia families.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="bg-moshate-blue text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95"
            >
              <Icon name="Pill" /> Request Script Refill
            </button>
            <a 
              href={`https://wa.me/${PHARMACY_INFO.whatsapp}`}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition-all flex items-center gap-3"
            >
              <Icon name="MessageSquare" /> WhatsApp Stock Check
            </a>
          </div>
        </div>

        {/* Catalog Categories Navigation (Sticky) */}
        <div className="flex overflow-x-auto gap-4 mb-16 pb-4 no-scrollbar">
          {PHARMACY_PRODUCTS.map((cat, i) => (
            <a 
              key={i} 
              href={`#${cat.category.toLowerCase().replace(/\s/g, '-')}`}
              className="whitespace-nowrap px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-600 hover:border-moshate-blue hover:text-moshate-blue transition-all"
            >
              {cat.category}
            </a>
          ))}
        </div>

        {/* Catalog Layout */}
        <div className="space-y-24">
          {PHARMACY_PRODUCTS.map((category, idx) => (
            <section key={idx} id={category.category.toLowerCase().replace(/\s/g, '-')} className="scroll-mt-32">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-moshate-blue rounded-full"></div>
                  <h3 className="text-3xl font-extrabold text-slate-900">{category.category}</h3>
                </div>
                <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Store Inventory</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((product, pIdx) => (
                  <div key={pIdx} className="group bg-white rounded-[2.5rem] border border-slate-100 p-2 hover:shadow-2xl hover:border-blue-100 transition-all">
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative bg-slate-100">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 right-4 moshate-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                        {product.badge}
                      </div>
                    </div>
                    <div className="px-6 pb-8">
                      <h4 className="font-extrabold text-slate-900 text-lg mb-2">{product.name}</h4>
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed min-h-[40px]">{product.desc}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <span className="text-moshate-blue font-bold text-xs flex items-center gap-1">
                          <Icon name="Activity" className="w-3 h-3" /> Available Today
                        </span>
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-moshate-blue group-hover:bg-moshate-blue group-hover:text-white transition-colors">
                          <Icon name="Wind" className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="mt-24 rounded-[3.5rem] moshate-gradient p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6">Expert Pharmacist Advice</h2>
              <p className="text-blue-50 text-lg mb-10 leading-relaxed">
                Not sure which supplement is right for you? Our qualified pharmacists provide personalized consultations to ensure your health outcomes are maximized.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHARMACY_INFO.phone}`} className="bg-white text-moshate-blue px-8 py-4 rounded-2xl font-bold text-center shadow-lg">Call Centre</a>
                <button onClick={() => setModalOpen(true)} className="bg-black/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-bold">Refill Script</button>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <Icon name="Stethoscope" className="w-64 h-64 text-white/10" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mb-32 -mr-32 blur-3xl"></div>
        </div>

        {/* Patient Notice Footer */}
        <div className="mt-24 text-center max-w-2xl mx-auto border-t border-slate-100 pt-16">
          <p className="text-slate-400 text-sm italic mb-4">
            Moshate Medical Centre Pharmacy is registered with the South African Pharmacy Council (SAPC). 
          </p>
          <p className="text-slate-500 font-medium">
            Strictly no online medication sales. All items are dispensed in-person following clinical guidelines.
          </p>
        </div>
      </div>

      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Script Refill Request"
        description="Submit your details for a medication review. A pharmacist will contact you to confirm preparation for collection."
        type="general"
      />
    </div>
  );
};

export default PharmacyPage;