import React, { useState, useEffect } from 'react';
import { Icon } from './Icons';
import { PHARMACY_INFO } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type?: 'general' | 'suites' | 'confidential' | 'physio' | 'dental';
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title, description, type = 'general' }) => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSent(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${type === 'confidential' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'}`}>
              <Icon name={type === 'confidential' ? 'Shield' : 'MessageSquare'} />
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Icon name="Wind" className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {!isSent ? (
            <>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {description}
              </p>

              <form onSubmit={handleSend} className="space-y-4">
                <input required type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" />
                <input required type="tel" placeholder="Contact Number" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea placeholder="Tell us more about your request..." rows={3} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Submit Request</>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-6">
                <a href={`tel:${PHARMACY_INFO.phone}`} className="text-blue-600 font-bold text-sm flex items-center gap-2">
                  <Icon name="Phone" className="w-4 h-4" /> Call
                </a>
                <a href={`https://wa.me/${PHARMACY_INFO.whatsapp}`} className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                  <Icon name="MessageSquare" className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-8 animate-in fade-in duration-500">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${type === 'confidential' ? 'bg-pink-100 text-pink-600' : 'bg-green-100 text-green-600'}`}>
                <Icon name={type === 'confidential' ? 'Shield' : 'Activity'} className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {type === 'confidential' ? 'Securely Sent' : 'Message Received!'}
              </h3>
              <p className="text-slate-500 mb-10 leading-relaxed">
                {type === 'confidential' 
                  ? 'Your private enquiry has been sent. A female health professional will respond to you discreetly and as quickly as possible.' 
                  : 'Thank you for reaching out. A member of our team will contact you shortly to assist with your request.'}
              </p>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={onClose} 
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold shadow-lg hover:bg-slate-800 transition-all"
                >
                  Close Window
                </button>
                
                <div className="flex items-center justify-center gap-6 pt-4">
                  <a href={`tel:${PHARMACY_INFO.phone}`} className="text-blue-600 font-bold text-sm flex items-center gap-2">
                    <Icon name="Phone" className="w-4 h-4" /> Call Directly
                  </a>
                  <a href={`https://wa.me/${PHARMACY_INFO.whatsapp}`} className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                    <Icon name="MessageSquare" className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;