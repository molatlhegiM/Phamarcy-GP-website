import React from 'react';
import { PHARMACY_INFO } from '../constants';
import { Route } from '../App';
import { Icon } from './Icons';

interface FooterProps {
  onNavigate: (route: Route) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                B
              </div>
              <span className="font-bold text-white text-2xl tracking-tight">
                {PHARMACY_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-10 leading-relaxed text-lg">
              A modern community pharmacy dedicated to the health and wellbeing of our Brooklyn families. Professional care, local heart.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all">
                <Icon name="Wind" className="w-5 h-5 text-white" />
              </a>
              <a href={`https://wa.me/${PHARMACY_INFO.whatsapp}`} className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all">
                <Icon name="MessageSquare" className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8">Quick Navigation</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-500 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-emerald-500 transition-colors">Pharmacy Services</button></li>
              <li><button onClick={() => onNavigate('clinic')} className="hover:text-emerald-500 transition-colors">Nurse Clinic</button></li>
              <li><button onClick={() => onNavigate('otc')} className="hover:text-emerald-500 transition-colors">OTC Medicines</button></li>
              <li><button onClick={() => onNavigate('scripts')} className="hover:text-emerald-500 transition-colors">Repeat Scripts</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8">Store Info</h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex gap-4">
                <Icon name="MapPin" className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>{PHARMACY_INFO.address}</span>
              </li>
              <li className="flex gap-4">
                <Icon name="Phone" className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>{PHARMACY_INFO.phone}</span>
              </li>
              <li className="flex gap-4">
                <Icon name="Clock" className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Mon-Fri: 08h00 - 18h00<br/>Sat: 08h00 - 13h00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-bold tracking-widest gap-6">
          {/* Changed 'uppercase' prop to 'className="uppercase"' to fix DOM attribute error */}
          <p className="uppercase">© {new Date().getFullYear()} BROOKLYN PHARMACY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-10 uppercase">
            <a href="#" className="hover:text-emerald-500">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500">Terms of Service</a>
            <a href="#" className="hover:text-emerald-500">PAIA Manual</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;