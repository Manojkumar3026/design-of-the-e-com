
import { FaqItem, NewsOutlet, Product, Testimonial } from './types';
import { Battery, Zap, Activity, Feather, ShieldCheck, Clock, Usb, Droplets } from 'lucide-react';

export const FAQ_DATA: FaqItem[] = [
  {
    question: "What is EVEREVE?",
    answer: "EVEREVE is your gentle, drug-free companion designed to bring you relief from those monthly cramps using soothing PEMF (Pulsed Electromagnetic Field) therapy. It’s made to fit your lifestyle and help you feel your best."
  },
  {
    question: "How does Evereve help with menstrual pain?",
    answer: "Evereve uses PEMF therapy. Think of PEMF therapy as a gentle nudge to your body—using pulsed electromagnetic waves to relax your muscles and ease pain naturally. It’s a smart way to feel more comfortable without any medicines."
  },
  {
    question: "Is EVEREVE safe to use?",
    answer: "Absolutely! EVEREVE is proudly registered and approved by CDSCO in India. Just follow the simple instructions, and you’ll be in good hands."
  },
  {
    question: "What's the difference between Lite and Pro models?",
    answer: "Evereve Lite features simple on/off operation with a preset setting—perfect for straightforward, effective relief. Evereve Pro adds Bluetooth connectivity, allowing you to customize your experience through our app with 3 intensity levels."
  },
  {
    question: "How do I charge EVEREVE?",
    answer: "EVEREVE is rechargeable to keep you going. Just follow the charging steps in the welcome guide."
  },
  {
    question: "How should I clean my EVEREVE device?",
    answer: "Easy peasy! Just wipe your EVEREVE gently with a dry cloth—please avoid damp or wet cloths to keep it safe and sound."
  },
  {
    question: "Is EVEREVE waterproof?",
    answer: "EVEREVE has a water-resistant design that protects it from light splashes and sweat, but it is not fully waterproof. Please do not submerge it in water or use it in the shower or bath. Clean your device with a dry cloth only."
  },
  {
    question: "Can I use EVEREVE while sleeping?",
    answer: "It’s best to use EVEREVE while you’re awake and relaxed. Check the user guide for tips on making the most of your sessions."
  },
  {
    question: "Are there any side effects I should know about?",
    answer: "EVEREVE is gentle and safe. If you wear a pacemaker or any implanted medical device, please chat with your doctor before starting."
  },
  {
    question: "I have an IUD like Copper T—should I check with my doctor before using EVEREVE?",
    answer: "That’s a great question! If you’re using an IUD like Copper T, we recommend checking in with your healthcare provider before starting EVEREVE. They’ll make sure it’s the best fit for you and your health."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'evereve-pro',
    name: 'Evereve Pro',
    tagline: 'Connected care for personalized relief.',
    price: 2999,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 1234,
    features: ['12 Hours Battery', 'Bluetooth 5.0', 'App Controlled', 'Wireless Charging', 'Custom Intensity'],
    image: 'https://picsum.photos/id/96/800/800',
    isSmart: true,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-relaxing-with-a-book-41804-large.mp4',
    overlayText: 'Instant Soothe'
  },
  {
    id: 'evereve-lite',
    name: 'Evereve Lite',
    tagline: 'Essential relief, simply effective.',
    price: 1999,
    originalPrice: 3500,
    rating: 4.8,
    reviews: 1234,
    features: ['8 Hours Battery', 'One-Touch Relief', 'USB-C Charging', 'Silent Operation'],
    image: 'https://picsum.photos/id/64/800/800',
    isSmart: false,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-stretching-her-arms-in-bed-1579-large.mp4',
    overlayText: 'Relief in Minutes'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya S.",
    role: "Age 21",
    rating: 5,
    text: "EVEREVE gave me my life back. I don't cancel plans anymore, I don't miss work, and I finally feel like myself every day of the month. This device is a total game-changer.",
    image: "https://picsum.photos/id/338/100/100"
  },
  {
    id: 2,
    name: "Abinaya K.",
    role: "Age 30",
    rating: 5,
    text: "As someone who couldn't take pain meds, EVEREVE was my answer. It's gentle, natural, and actually works. I tell every woman I know about it—this is what we've been waiting for.",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 3,
    name: "Nandhini M.",
    role: "Age 22",
    rating: 5,
    text: "I was so skeptical, but EVEREVE proved me wrong. The pain that used to keep me in bed for days is now manageable. I feel empowered, not controlled by my cycle anymore.",
    image: "https://picsum.photos/id/342/100/100"
  }
];

export const PRODUCT_ICONS = [
  { icon: Battery, label: "Long Battery" },
  { icon: Zap, label: "Fast Relief" },
  { icon: Activity, label: "PEMF Tech" },
  { icon: Feather, label: "Lightweight" },
  { icon: ShieldCheck, label: "Safe & Cert." },
  { icon: Clock, label: "Long Usage" },
  { icon: Usb, label: "USB Charge" },
  { icon: Droplets, label: "Sweat Resistant" },
];

export const MEDIA_OUTLETS: NewsOutlet[] = [
  { name: "Times of India", logo: "https://placehold.co/150x50/white/black?text=TimesOfIndia", url: "#" },
  { name: "Healthline", logo: "https://placehold.co/150x50/white/black?text=Healthline", url: "#" },
  { name: "Femina", logo: "https://placehold.co/150x50/white/black?text=Femina", url: "#" },
  { name: "Vogue", logo: "https://placehold.co/150x50/white/black?text=Vogue", url: "#" },
  { name: "The Hindu", logo: "https://placehold.co/150x50/white/black?text=TheHindu", url: "#" },
  { name: "News18", logo: "https://placehold.co/150x50/white/black?text=News18", url: "#" },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Menstrual Cramps: Causes and Solutions",
    category: "Health Education",
    image: "https://picsum.photos/id/20/400/300"
  },
  {
    id: 2,
    title: "How TENS Technology Revolutionizes Pain Management",
    category: "Technology",
    image: "https://picsum.photos/id/36/400/300"
  },
  {
    id: 3,
    title: "5 Lifestyle Changes to Reduce Period Pain",
    category: "Wellness Tips",
    image: "https://picsum.photos/id/48/400/300"
  }
];
