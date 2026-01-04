
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  features: string[];
  image: string;
  isSmart: boolean;
  videoUrl?: string;
  overlayText?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

export interface NewsOutlet {
  name: string;
  logo: string;
  url: string;
}
