import React, { useState } from 'react';
import { PHARMACY_INFO, PHARMACY_PRODUCTS } from '../constants';
import { Icon } from '../components/Icons';
import ContactModal from '../components/ContactModal';

const PharmacyPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Promotion Banner */}
      <div className="bg-moshate-blue text-white text-center py-3 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-4">
        <span>Winter Specials: 10% off selected wellness supplements</span>
        <div className="h-1 w-1 bg-white rounded-full hidden md:block"></div>
        <span className="hidden md:inline">No online purchases. Available in-store.</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-slate-100 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">In-House Pharmacy</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Convenient access to your medications immediately after your consultation. We stock chronic meds, acute treatment, and essential wellness products for the whole family.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="bg-moshate-blue text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all flex items-center gap-3"
            >
              <Icon name="Pill" /> Request Script Refill
            </button>
          </div>
        </div>

        {/* Promo Image Banner */}
        <div className="rounded-[3rem] overflow-hidden relative mb-24 h-[300px] flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1600" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Pharmacy Display" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
          <div className="relative px-12 md:px-20 text-white max-w-lg">
            <h2 className="text-4xl font-extrabold mb-4">Stocking Global & Local Brands</h2>
            <p className="text-blue-100 leading-relaxed">We process all major medical aids and offer professional medication reviews for every prescription dispensed.</p>
          </div>
        </div>

        {/* Product Catalog Categories */}
        <div className="space-y-24">
          {PHARMACY_PRODUCTS.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-12 bg-moshate-blue rounded-full"></div>
                <h3 className="text-3xl font-extrabold text-slate-900">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((product, pIdx) => (
                  <div key={pIdx} className="group bg-slate-50 rounded-[2.5rem] border border-slate-100 p-2 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all">
                    <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 bg-moshate-teal text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {product.badge}
                      </div>
                    </div>
                    <div className="px-6 pb-8">
                      <h4 className="font-extrabold text-slate-900 text-lg mb-2">{product.name}</h4>
                      <p className="text-slate-500 text-sm mb-4 leading-relaxed">{product.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-bold text-xs">Available In-Store</span>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <Icon name="Wind" className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-center text-white">
          <Icon name="Shield" className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Patient Notice</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Brooklyn Pharmacy (Moshate Medical Centre) is a physical, in-person facility. We do not support online medication sales. All pharmaceutical items are dispensed in-store following a valid prescription or consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHARMACY_INFO.phone}`} className="bg-moshate-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg">Call to Check Stock</a>
            <a href={`https://wa.me/${PHARMACY_INFO.whatsapp}`} className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all">WhatsApp Enquiry</a>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Script Refill Request"
        description="Provide your details and medication list. A pharmacist will review your request and contact you to confirm preparation."
        type="general"
      />
    </div>
  );
};

export default PharmacyPage;