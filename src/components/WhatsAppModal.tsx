import React, { useEffect } from 'react';
import { PHARMACY_INFO } from '../constants';
import { Icon } from './Icons';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  whatsappMessage: string;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, title, description, whatsappMessage }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappLink = `https://wa.me/${PHARMACY_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-emerald-100 text-emerald-600">
              <Icon name="MessageSquare" />
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Icon name="X" className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">{description}</p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-600 mb-6">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-bold">Prefilled message</p>
            <p>{whatsappMessage}</p>
          </div>

          <div className="space-y-3">
            <a
              href={whatsappLink}
              className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg hover:bg-emerald-700 transition-all text-center block"
            >
              Open WhatsApp
            </a>
            <a
              href={`tel:${PHARMACY_INFO.phone}`}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-lg hover:bg-slate-800 transition-all text-center block"
            >
              Call {PHARMACY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppModal;
