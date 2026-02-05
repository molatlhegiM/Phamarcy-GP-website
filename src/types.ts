
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum FormCategory {
  REPEAT_SCRIPT = 'Repeat Script',
  GENERAL_ENQUIRY = 'General Enquiry',
  CLINIC_REQUEST = 'Clinic Request'
}

export interface EnquiryForm {
  fullName: string;
  contactNumber: string;
  idOrMedicalAid?: string;
  details: string;
  preferredTime: string;
  category: FormCategory;
}
