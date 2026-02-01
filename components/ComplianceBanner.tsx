
import React from 'react';
import { PHARMACY_INFO } from '../constants';

const ComplianceBanner: React.FC = () => {
  return (
    <div className="bg-slate-100 py-8 border-t border-slate-200 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 text-center text-xs md:text-sm space-y-3">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-medium text-slate-700">
          <span>Facility: {PHARMACY_INFO.name}</span>
          <span>Location: Akasia, Pretoria</span>
          <span>We accept most major medical aids.</span>
        </div>
        <p className="max-w-3xl mx-auto italic">
          Disclaimer: This website provides general health and medical information only and does not replace professional medical advice from a healthcare practitioner. For medical emergencies, please call emergency services immediately or visit your nearest hospital.
        </p>
      </div>
    </div>
  );
};

export default ComplianceBanner;
