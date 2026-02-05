import React, { useMemo, useState } from 'react';
import { Icon } from './Icons';
import { PHARMACY_INFO } from '../constants';

interface AssistantSection {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  responses: string[];
  whatsappMessage: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  const sections = useMemo<AssistantSection[]>(
    () => [
      {
        id: 'gp',
        title: 'GP Consultations',
        subtitle: 'Appointments and general clinic info',
        icon: 'Stethoscope',
        responses: [
          'Same-day and scheduled GP consultations are available.',
          'We handle family medicine, check-ups, and minor procedures.',
          'For urgent symptoms, please call us directly for guidance.'
        ],
        whatsappMessage: 'Hello, I would like to book a GP consultation at Moshate Medical Centre.'
      },
      {
        id: 'pharmacy',
        title: 'Pharmacy Services',
        subtitle: 'Scripts, stock checks, and advice',
        icon: 'Pill',
        responses: [
          'Prescription dispensing and chronic medication support are available.',
          'Stock checks can be handled quickly on WhatsApp.',
          'No online sales or payments are offered for safety and compliance.'
        ],
        whatsappMessage: 'Hello, I would like to enquire about pharmacy services and stock availability.'
      },
      {
        id: 'women',
        title: "Women's Health (Confidential)",
        subtitle: 'Private and respectful care',
        icon: 'Heart',
        responses: [
          "Confidential women's health services are available on-site.",
          'Your privacy is protected and handled with discretion.',
          'Please contact us to arrange a private appointment.'
        ],
        whatsappMessage: "Hello, I would like to make a confidential women's health enquiry."
      },
      {
        id: 'physio',
        title: 'Physiotherapy',
        subtitle: 'Rehab, pain relief, and mobility',
        icon: 'Activity',
        responses: [
          'Physiotherapy support is available for pain management and recovery.',
          'We assist with sports injuries, joint recovery, and rehab plans.',
          'Contact us to arrange a session with our physiotherapist.'
        ],
        whatsappMessage: 'Hello, I would like to book a physiotherapy consultation.'
      },
      {
        id: 'dental',
        title: 'Dental Care',
        subtitle: 'Cleanings, extractions, and more',
        icon: 'Sparkles',
        responses: [
          'Dental services include routine check-ups and procedures.',
          'Appointments are handled directly with the dental team.',
          'Contact us for availability and suite details.'
        ],
        whatsappMessage: 'Hello, I would like to enquire about dental services at Moshate Medical Centre.'
      },
      {
        id: 'suites',
        title: 'Medical Suites for Rent',
        subtitle: 'Professional consulting rooms',
        icon: 'Building',
        responses: [
          'Suites are available for doctors and allied health professionals.',
          'Ideal for dentists, physiotherapists, optometrists, and nurses.',
          'We can share availability and rental details on request.'
        ],
        whatsappMessage: 'Hello, I would like to enquire about renting a consulting suite at Moshate Medical Centre.'
      }
    ],
    []
  );

  const activeSection = sections.find((section) => section.id === activeSectionId) || null;

  const whatsappLink = activeSection
    ? `https://wa.me/${PHARMACY_INFO.whatsapp}?text=${encodeURIComponent(activeSection.whatsappMessage)}`
    : `https://wa.me/${PHARMACY_INFO.whatsapp}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[320px] sm:w-[380px] h-[520px] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-moshate-blue p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/15 rounded-2xl flex items-center justify-center">
                <Icon name="MessageSquare" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Centre Assistant</h3>
                <p className="text-[10px] opacity-80 leading-none uppercase tracking-widest font-bold">Information Only - No Medical Advice</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded p-1">
              <Icon name="X" className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {!activeSection && (
              <div className="space-y-4">
                <p className="text-sm text-slate-600">
                  Select a topic below for quick, safe information.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSectionId(section.id)}
                      className="text-left bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm hover:border-moshate-blue hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-moshate-blue/10 text-moshate-blue flex items-center justify-center">
                          <Icon name={section.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{section.title}</p>
                          <p className="text-xs text-slate-500">{section.subtitle}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeSection && (
              <div className="space-y-4">
                <button
                  onClick={() => setActiveSectionId(null)}
                  className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2"
                >
                  <Icon name="ChevronLeft" className="w-4 h-4" /> Back to topics
                </button>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-moshate-blue/10 text-moshate-blue flex items-center justify-center">
                      <Icon name={activeSection.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{activeSection.title}</p>
                      <p className="text-xs text-slate-500">{activeSection.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {activeSection.responses.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-moshate-blue"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <a
                    href={`tel:${PHARMACY_INFO.phone}`}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm text-center hover:bg-slate-800 transition-colors"
                  >
                    Call {PHARMACY_INFO.phone}
                  </a>
                  <a
                    href={whatsappLink}
                    className="w-full px-4 py-3 rounded-2xl bg-moshate-teal text-white font-bold text-sm text-center hover:bg-[#1aa7a2] transition-colors"
                  >
                    Continue on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-3 bg-white border-t border-slate-100 text-[10px] text-slate-500 text-center">
            This assistant provides general information only and does not provide medical advice.
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-moshate-blue text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 hover:scale-110 active:scale-95 transition-all group relative"
        >
          <Icon name="MessageSquare" className="w-6 h-6" />
          <span className="absolute -top-12 right-0 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            How can we help?
          </span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
