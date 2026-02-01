
import React from 'react';
import { TRUST_REASONS } from '../constants';

const TrustSection: React.FC = () => {
  return (
    <div className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_REASONS.map((reason, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
