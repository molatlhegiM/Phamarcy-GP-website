import React from 'react';
import { Icon } from './components/Icons';

export const COLORS = {
  primary: "#1F7FBF",
  teal: "#22C1BC",
  green: "#5CB85C",
  dark: "#1a1a1a"
};

export const PHARMACY_INFO = {
  name: "Moshate Medical Centre",
  tagline: "Your Health, Our Priority",
  suburb: "Akasia",
  city: "Pretoria",
  address: "Moshate Gardens, M17 Road, Akasia, Pretoria",
  phone: "069 684 7864",
  whatsapp: "27696847864",
  email: "info@moshatemedical.co.za",
  facebook: "https://facebook.com/moshatemedicalcentre",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.536760541402!2d28.0825313!3d-25.6534571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9579004f767851%3A0x89e83f0f983b28b!2sMoshate%20Gardens!5e0!3m2!1sen!2sza!4v1715600000000!5m2!1sen!2sza",
  openingHours: [
    { day: "Monday - Friday", time: "08:00 - 18:00" },
    { day: "Saturday", time: "08:00 - 13:00" },
    { day: "Sunday & Public Holidays", time: "Emergency calls only" }
  ]
};

export const MAIN_SERVICES = [
  { id: 'gp', title: 'GP Consultations', icon: 'Stethoscope', desc: 'Comprehensive family medicine and diagnostic services.' },
  { id: 'pharmacy', title: 'In-House Pharmacy', icon: 'Pill', desc: 'Convenient medication dispensing and chronic script support.' },
  { id: 'clinic', title: 'Clinic Services', icon: 'Activity', desc: 'Immunisations, IV drips, and basic health screenings.' },
  { id: 'women', title: 'Women\'s Health', icon: 'Heart', desc: 'Safe procedures, pap smears, and family planning.' },
  { id: 'physio', title: 'Physiotherapy', icon: 'Scale', desc: 'Back pain relief, sports injuries, and joint recovery.' },
  { id: 'dental', title: 'Dental Care', icon: 'Sparkles', desc: 'Braces, whitening, extractions, and routine checks.' }
];

export const TRUST_REASONS = [
  {
    title: "All-in-One Facility",
    text: "Access GP, pharmacy, dental, and physio services under one roof for your convenience.",
    icon: <Icon name="Shield" className="w-6 h-6" />
  },
  {
    title: "Patient Focused",
    text: "We prioritize long-term health outcomes through personalized family care.",
    icon: <Icon name="Heart" className="w-6 h-6" />
  },
  {
    title: "Medical Aid Ready",
    text: "We accept most major South African medical aids for all our professional services.",
    icon: <Icon name="Truck" className="w-6 h-6" />
  }
];

export const PHARMACY_PRODUCTS = [
  {
    category: "Pain Relief",
    items: [
      { name: "Advil Liqui-Gels", desc: "Fast pain relief for headaches and fever.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200", badge: "Special" },
      { name: "Panado Capsules", desc: "Trusted relief for pain and fever symptoms.", image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=200", badge: "In-Store" },
      { name: "Nurofen for Children", desc: "Gentle fever reduction for little ones.", image: "https://images.unsplash.com/photo-1550572017-ed200f545dec?auto=format&fit=crop&q=80&w=200", badge: "Top Seller" },
      { name: "Grand-Pa Powders", desc: "Classic South African pain relief.", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=200", badge: "Stocked" }
    ]
  },
  {
    category: "Cold & Flu",
    items: [
      { name: "Corenza C", desc: "Effervescent relief for flu symptoms.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200", badge: "Winter Deal" },
      { name: "Vicks VapoRub", desc: "Soothing relief for nasal congestion.", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=200", badge: "Classic" },
      { name: "Benylin Cough Syrup", desc: "Effective cough suppression for adults.", image: "https://images.unsplash.com/photo-1471864190281-ad5fe9bb0720?auto=format&fit=crop&q=80&w=200", badge: "In-Store" },
      { name: "Strepsils Lozenges", desc: "Quick relief for sore throats.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200", badge: "Stocked" }
    ]
  },
  {
    category: "Vitamins & Wellness",
    items: [
      { name: "Vital Gold", desc: "Comprehensive daily multi-vitamin.", image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=200", badge: "10% Off" },
      { name: "Vitamin C 500mg", desc: "Immune system support for the family.", image: "https://images.unsplash.com/photo-1616671285433-88687707e436?auto=format&fit=crop&q=80&w=200", badge: "Essential" },
      { name: "Omega-3 Fish Oil", desc: "Heart and brain health support.", image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=200", badge: "Health" },
      { name: "Zinc & C Lozenges", desc: "Direct immune boost.", image: "https://images.unsplash.com/photo-1471864190281-ad5fe9bb0720?auto=format&fit=crop&q=80&w=200", badge: "Trending" }
    ]
  }
];

export const OTC_CATEGORIES = [
  { title: "Pain & Fever", examples: "Paracetamol, Ibuprofen", icon: "Pill" },
  { title: "Cold & Flu", examples: "Decongestants, Syrups", icon: "Thermometer" },
  { title: "Allergies", examples: "Antihistamines, Sprays", icon: "Wind" },
  { title: "Wellness", examples: "Vitamins, Supplements", icon: "Sparkles" }
];
