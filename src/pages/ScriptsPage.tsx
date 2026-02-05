import React, { useState } from 'react';
import { Icon } from '../components/Icons';

const ScriptsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    idNumber: '',
    details: '',
    collectionTime: 'Morning (08:00 - 12:00)'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', phone: '', idNumber: '', details: '', collectionTime: 'Morning (08:00 - 12:00)' });
    }, 1500);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-5">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-8">Repeat Scripts & Enquiries</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Managing your chronic medication should be stress-free. Send us your script details or general questions, and we will handle the rest.
            </p>

            <div className="space-y-8">
              {[
                { title: 'Secure Handling', desc: 'Your medical data is handled with the highest confidentiality.', icon: 'Shield' },
                { title: 'Fast Turnaround', desc: 'We usually process script requests within 2-4 hours.', icon: 'Clock' },
                { title: 'Local Delivery', desc: 'Delivery options are available for eligible Akasia addresses.', icon: 'Truck' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="bg-emerald-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100">
              {isSuccess ? (
                <div className="text-center py-10 animate-in zoom-in duration-300">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Icon name="CheckCircle" className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Request Received</h3>
                  <p className="text-slate-500 mb-10">Our pharmacist will review your request and contact you via phone or WhatsApp shortly.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-emerald-600 font-bold underline">Submit another request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-900">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        placeholder="e.g. Johannes Botha"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-900">Contact Number *</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        placeholder="012 345 6789"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900">ID or Medical Aid Number (Optional)</label>
                    <input
                      type="text"
                      value={formData.idNumber}
                      onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="For faster processing"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900">Medication or Enquiry Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="Please list your chronic meds or ask your question..."
                    ></textarea>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900">Preferred Collection Time</label>
                    <select
                      value={formData.collectionTime}
                      onChange={(e) => setFormData({ ...formData, collectionTime: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    >
                      <option>Morning (08:00 - 12:00)</option>
                      <option>Afternoon (12:00 - 16:00)</option>
                      <option>Evening (16:00 - 18:00)</option>
                    </select>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 active:scale-95 transition-all shadow-xl disabled:opacity-70 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? 'Processing...' : 'Submit Request'}
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    No online payments. We strictly follow SAPC regulations.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScriptsPage;