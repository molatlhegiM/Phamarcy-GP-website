import { Icon } from './components/Icons';

export const COLORS = {
  primary: '#1F7FBF',
  teal: '#22C1BC',
  green: '#5CB85C',
  dark: '#1a1a1a'
};

export const PHARMACY_INFO = {
  name: 'Moshate Medical Centre',
  tagline: 'Your Health, Our Priority',
  suburb: 'Akasia',
  city: 'Pretoria',
  address: 'Moshate Gardens, M17 Road, Akasia, Pretoria',
  phone: '069 684 7864',
  whatsapp: '27696847864',
  email: 'info@moshatemedical.co.za',
  facebook: 'https://facebook.com/moshatemedicalcentre',
  mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.536760541402!2d28.0825313!3d-25.6534571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9579004f767851%3A0x89e83f0f983b28b!2sMoshate%20Gardens!5e0!3m2!1sen!2sza!4v1715600000000!5m2!1sen!2sza',
  openingHours: [
    { day: 'Monday - Friday', time: '08:00 - 18:00' },
    { day: 'Saturday', time: '08:00 - 13:00' },
    { day: 'Sunday & Public Holidays', time: 'Emergency calls only' }
  ]
};

export const MAIN_SERVICES = [
  { id: 'gp', title: 'GP Consultations', icon: 'Stethoscope', desc: 'Comprehensive family medicine and diagnostic services.' },
  { id: 'pharmacy', title: 'In-House Pharmacy', icon: 'Pill', desc: 'Convenient medication dispensing and chronic script support.' },
  { id: 'clinic', title: 'Clinic Services', icon: 'Activity', desc: 'Immunisations, IV drips, and basic health screenings.' },
  { id: 'women', title: "Women's Health", icon: 'Heart', desc: 'Safe procedures, pap smears, and family planning.' },
  { id: 'physio', title: 'Physiotherapy', icon: 'Scale', desc: 'Back pain relief, sports injuries, and joint recovery.' },
  { id: 'dental', title: 'Dental Care', icon: 'Sparkles', desc: 'Braces, whitening, extractions, and routine checks.' }
];

export const TRUST_REASONS = [
  {
    title: 'All-in-One Facility',
    text: 'Access GP, pharmacy, dental, and physio services under one roof for your convenience.',
    icon: <Icon name="Shield" className="w-6 h-6" />
  },
  {
    title: 'Patient Focused',
    text: 'We prioritize long-term health outcomes through personalized family care.',
    icon: <Icon name="Heart" className="w-6 h-6" />
  },
  {
    title: 'Medical Aid Ready',
    text: 'We accept most major South African medical aids for all our professional services.',
    icon: <Icon name="Truck" className="w-6 h-6" />
  }
];

export const PHARMACY_PRODUCTS = [
  {
    category: 'Pain & Fever Relief',
    items: [
      { name: 'Panado Tablets', desc: 'Trusted paracetamol for everyday fever and pain relief.', icon: 'Pill', badge: 'Family Essential' },
      { name: 'Nurofen Liquid Caps', desc: 'Fast-acting ibuprofen for headache and muscle pain.', icon: 'Activity', badge: 'Fast Relief' },
      { name: 'Myprodol Capsules', desc: 'Targeted relief for acute pain and inflammation.', icon: 'Shield', badge: 'In-Store' },
      { name: 'Disprin', desc: 'Dispersible tablets for fever reduction and mild pain.', icon: 'Sparkles', badge: 'Value' }
    ]
  },
  {
    category: 'Cold & Flu',
    items: [
      { name: 'Corenza C', desc: 'Complete cold and flu support with vitamin C.', icon: 'Thermometer', badge: 'Winter' },
      { name: 'Vicks VapoRub', desc: 'Soothing balm for congestion and cough relief.', icon: 'Wind', badge: 'Top Seller' },
      { name: 'Strepsils Honey & Lemon', desc: 'Gentle lozenges for sore throats.', icon: 'Heart', badge: 'Comfort' },
      { name: 'Benylin Wet Cough', desc: 'Expectorant syrup for chesty coughs.', icon: 'Activity', badge: 'Seasonal' }
    ]
  },
  {
    category: 'Vitamins & Supplements',
    items: [
      { name: 'Vital Gold Multivitamin', desc: 'Daily nutrition for energy and immunity.', icon: 'Sparkles', badge: '10% Off' },
      { name: 'Vitamin C 1000mg', desc: 'Immune support during winter months.', icon: 'Shield', badge: 'Wellness' },
      { name: 'Magnesium Effervescent', desc: 'Supports muscle recovery and relaxation.', icon: 'Activity', badge: 'Trending' },
      { name: 'Vitamin D3', desc: 'Bone and immune support for all ages.', icon: 'Heart', badge: 'Popular' }
    ]
  },
  {
    category: 'Baby & Wellness',
    items: [
      { name: 'Bepanthen Ointment', desc: 'Gentle protection for sensitive skin.', icon: 'Baby', badge: 'Baby Care' },
      { name: 'Purity Baby Cereal', desc: 'Nutritious first foods for growing infants.', icon: 'Sparkles', badge: 'Nutrition' },
      { name: 'Telament Colic Drops', desc: 'Relief for baby gas and digestive discomfort.', icon: 'Heart', badge: 'Trusted' },
      { name: "Bennett's Baby Cream", desc: 'Soothing daily skin care for babies.', icon: 'Shield', badge: 'Everyday' }
    ]
  }
];

export const OTC_CATEGORIES = [
  { title: 'Pain & Fever', examples: 'Paracetamol, Ibuprofen', icon: 'Pill' },
  { title: 'Cold & Flu', examples: 'Decongestants, Syrups', icon: 'Thermometer' },
  { title: 'Allergies', examples: 'Antihistamines, Sprays', icon: 'Wind' },
  { title: 'Wellness', examples: 'Vitamins, Supplements', icon: 'Sparkles' }
];