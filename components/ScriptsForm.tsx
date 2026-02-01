
import React, { useState } from 'react';
import { PHARMACY_INFO } from '../constants';
import { classifyUserEnquiry } from '../services/geminiService';

const ScriptsForm: React.FC = () => {
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
    
    // Simulate API call
    setTimeout(() => {
      const category = classifyUserEnquiry(formData.details);
      console.log(`Sending to ${PHARMACY_INFO.email} with category: ${category}`);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', phone: '', idNumber: '', details: '', collectionTime: 'Morning (08:00 - 12:00)' });
    }, 1500);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 shadow-inner border border-emerald-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Request a Script or Enquiry</h2>
            <p className="text-emerald-800/70">
              Submit your details below and we will contact you. No payments are handled online for your safety.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-white p-12 rounded-2xl text-center shadow-lg border-2 border-emerald-500 animate-in fade-in zoom-in duration-300">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-2">Request Sent Successfully!</h3>
              <p className="text-slate-600 mb-6">Our pharmacist or nurse will contact you shortly on the number provided.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-emerald-600 font-bold hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-emerald-900 mb-2">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="e.g. Johannes Botha"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-900 mb-2">Contact Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="012 345 6789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-emerald-900 mb-2">ID or Medical Aid (Optional)</label>
                <input
                  type="text"
                  value={formData.idNumber}
                  onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="For faster processing"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-emerald-900 mb-2">Details / Medication Required *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="Please list your items or ask a question..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-emerald-900 mb-2">Preferred Collection Time</label>
                <select
                  value={formData.collectionTime}
                  onChange={(e) => setFormData({...formData, collectionTime: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                >
                  <option>Morning (08:00 - 12:00)</option>
                  <option>Afternoon (12:00 - 16:00)</option>
                  <option>Evening (16:00 - 18:00)</option>
                </select>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-lg disabled:opacity-70 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </span>
                ) : 'Submit Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScriptsForm;
