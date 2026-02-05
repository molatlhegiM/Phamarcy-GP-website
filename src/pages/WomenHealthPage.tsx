import React, { useState } from 'react';
import { Icon } from '../components/Icons';
import NoticeModal from '../components/NoticeModal';

const WomenHealthPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="py-20 bg-pink-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">Specialized Care</span>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Women&apos;s Health Clinic</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A safe, private, and supportive environment for all women&apos;s health needs. Our female practitioners are dedicated to your comfort, health, and dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Family Planning', desc: 'Contraception advice and procedures including implants and injections.', icon: 'Activity' },
            { title: 'Safe Procedures', desc: 'Professional care and guidance up to 12 weeks, handled with confidentiality.', icon: 'Shield' },
            { title: 'Preventative Care', desc: 'Pap smears, STI screening, and breast health examinations.', icon: 'Heart' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-pink-100 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-pink-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-pink-200">
                <Icon name={item.icon} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl font-extrabold mb-6">Confidential & Supportive</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We understand the importance of privacy and sensitive care. Reach out to our team directly through our confidential channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-pink-600 hover:bg-pink-500 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-pink-900/40 transition-all flex items-center justify-center gap-3"
              >
                <Icon name="Shield" /> Message Confidentially
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        </div>
      </div>

      <NoticeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Message Sent Confidentially"
        message="Your message has been sent confidentially. Our team will respond promptly and discreetly."
      />
    </div>
  );
};

export default WomenHealthPage;