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
      { name: "Advil Liqui-Gels", desc: "Fast-acting pain relief for headaches and muscle aches.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300", badge: "20% OFF" },
      { name: "Panado Capsules", desc: "Gentle on the stomach, effective for fever reduction.", image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=300", badge: "In-Store Only" },
      { name: "Nurofen for Children", desc: "Targeted fever and pain relief for infants and toddlers.", image: "https://images.unsplash.com/photo-1550572017-ed200f545dec?auto=format&fit=crop&q=80&w=300", badge: "Pediatric" },
      { name: "Myprodol Capsules", desc: "Potent relief for acute pain and inflammation.", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=300", badge: "Stocked" }
    ]
  },
  {
    category: "Cold & Flu",
    items: [
      { name: "Corenza C", desc: "Effervescent tablets for complete flu symptom relief.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300", badge: "Winter Special" },
      { name: "Vicks VapoRub", desc: "Classic soothing balm for congestion and cough.", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=300", badge: "Top Seller" },
      { name: "Benylin Wet Cough", desc: "Effective expectorant for chesty coughs.", image: "https://images.unsplash.com/photo-1471864190281-ad5fe9bb0720?auto=format&fit=crop&q=80&w=300", badge: "Adult Range" },
      { name: "Strepsils Honey & Lemon", desc: "Soothing lozenges for irritated sore throats.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300", badge: "Essentials" }
    ]
  },
  {
    category: "Vitamins & Wellness",
    items: [
      { name: "Vital Gold Multi-Vitamin", desc: "Complete daily nutrition for active adults.", image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=300", badge: "10% OFF" },
      { name: "Slow-Mag Effervescent", desc: "Magnesium supplement for muscle health and stress.", image: "https://images.unsplash.com/photo-1616671285433-88687707e436?auto=format&fit=crop&q=80&w=300", badge: "Trending" },
      { name: "Berocca Performance", desc: "Vitamin B & C energy boost for physical/mental clarity.", image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=300", badge: "In-Store" },
      { name: "Solal Vitamin D3", desc: "Bone and immune support for high-quality wellness.", image: "https://images.unsplash.com/photo-1471864190281-ad5fe9bb0720?auto=format&fit=crop&q=80&w=300", badge: "Premium" }
    ]
  },
  {
    category: "Baby & Child Care",
    items: [
      { name: "Bepanthen Ointment", desc: "Gentle protection against nappy rash and irritation.", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=300", badge: "Nursery" },
      { name: "Purity Baby Cereal", desc: "Nutritious first foods for growing infants.", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=300", badge: "Nutrition" },
      { name: "Telament Colic Drops", desc: "Relief for baby gas and digestive discomfort.", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=300", badge: "New Parent" },
      { name: "Bennett's Baby Cream", desc: "Soothing skin care for delicate baby skin.", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=300", badge: "Safe" }
    ]
  }
];

export const OTC_CATEGORIES = [
  { title: "Pain & Fever", examples: "Paracetamol, Ibuprofen", icon: "Pill" },
  { title: "Cold & Flu", examples: "Decongestants, Syrups", icon: "Thermometer" },
  { title: "Allergies", examples: "Antihistamines, Sprays", icon: "Wind" },
  { title: "Wellness", examples: "Vitamins, Supplements", icon: "Sparkles" }
];
