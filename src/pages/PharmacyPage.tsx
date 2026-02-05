import React, { useState } from 'react';
import { PHARMACY_INFO, PHARMACY_PRODUCTS } from '../constants';
import { Icon } from '../components/Icons';
import WhatsAppModal from '../components/WhatsAppModal';

const PharmacyPage: React.FC = () => {
  const [refillModalOpen, setRefillModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-moshate-blue text-white overflow-hidden relative py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest uppercase gap-2">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="w-4 h-4 text-moshate-teal" />
            <span>Winter Flu Season Special</span>
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
            <span className="text-moshate-blue font-bold uppercase tracking-widest text-sm mb-4 block">In-House Pharmacy</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Pharmacy Catalogue</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Educational product highlights and trusted pharmacy essentials. All items are dispensed in person to meet clinical and SAPC requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setRefillModalOpen(true)}
              className="bg-moshate-blue text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95"
            >
              <Icon name="Pill" /> Request Script Refill
            </button>
            <a
              href={`https://wa.me/${PHARMACY_INFO.whatsapp}?text=${encodeURIComponent('Hello, I would like to check stock availability at Moshate Medical Centre Pharmacy.')}`}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition-all flex items-center gap-3"
            >
              <Icon name="MessageSquare" /> WhatsApp Stock Check
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Promotion</p>
              <h3 className="text-2xl font-extrabold text-emerald-900">10% OFF Wellness Products</h3>
              <p className="text-sm text-emerald-800/70">Selected vitamins and daily supplements. Ask in store for details.</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <Icon name="Sparkles" className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">Seasonal</p>
              <h3 className="text-2xl font-extrabold text-blue-900">Winter Flu Season Special</h3>
              <p className="text-sm text-blue-800/70">Cold and flu essentials available while stocks last.</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
              <Icon name="Thermometer" className="w-6 h-6" />
            </div>
          </div>
        </div>

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

        <div className="space-y-24">
          {PHARMACY_PRODUCTS.map((category, idx) => (
            <section key={idx} id={category.category.toLowerCase().replace(/\s/g, '-')} className="scroll-mt-32">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 bg-moshate-blue rounded-full"></div>
                  <h3 className="text-3xl font-extrabold text-slate-900">{category.category}</h3>
                </div>
                <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Catalogue</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((product, pIdx) => (
                  <div key={pIdx} className="group bg-white rounded-[2.5rem] border border-slate-100 p-6 hover:shadow-2xl hover:border-blue-100 transition-all flex flex-col">
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative bg-slate-100 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200"></div>
                      <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/80 text-moshate-blue flex items-center justify-center shadow">
                        <Icon name={product.icon} className="w-6 h-6" />
                      </div>
                      <div className="absolute top-4 right-4 moshate-gradient text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                        {product.badge}
                      </div>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-lg mb-2">{product.name}</h4>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">{product.desc}</p>
                    <a
                      href={`https://wa.me/${PHARMACY_INFO.whatsapp}?text=${encodeURIComponent(`Hello, I would like to enquire about ${product.name} (${category.category}).`)}`}
                      className="mt-auto w-full py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm text-center hover:bg-slate-800 transition-colors"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 rounded-[3.5rem] moshate-gradient p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6">Expert Pharmacist Support</h2>
              <p className="text-blue-50 text-lg mb-10 leading-relaxed">
                Not sure which supplement is right for you? Our qualified pharmacists provide personal guidance to ensure your health outcomes are supported.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHARMACY_INFO.phone}`} className="bg-white text-moshate-blue px-8 py-4 rounded-2xl font-bold text-center shadow-lg">Call Centre</a>
                <button onClick={() => setRefillModalOpen(true)} className="bg-black/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-bold">Refill Script</button>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <Icon name="Stethoscope" className="w-64 h-64 text-white/10" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mb-32 -mr-32 blur-3xl"></div>
        </div>

        <div className="mt-24 text-center max-w-2xl mx-auto border-t border-slate-100 pt-16">
          <p className="text-slate-400 text-sm italic mb-4">
            Moshate Medical Centre Pharmacy is registered with the South African Pharmacy Council (SAPC).
          </p>
          <p className="text-slate-500 font-medium">
            No online medication sales. All items are dispensed in-person following clinical guidelines.
          </p>
        </div>
      </div>

      <WhatsAppModal
        isOpen={refillModalOpen}
        onClose={() => setRefillModalOpen(false)}
        title="Script Refill Request"
        description="Send us your script details on WhatsApp and we will confirm collection readiness."
        whatsappMessage="Hello, I would like to request a script refill at Moshate Medical Centre Pharmacy."
      />
    </div>
  );
};

export default PharmacyPage;