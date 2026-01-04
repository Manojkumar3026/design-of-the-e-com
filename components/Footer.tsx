
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-50 dark:bg-gray-900 pt-16 pb-8 border-t border-rose-100 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-3xl font-bold text-brand-dark dark:text-white">EVEREVE</h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Empowering women with natural, effective menstrual pain relief.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-brand-pink shadow-sm hover:scale-110 transition"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-brand-pink shadow-sm hover:scale-110 transition"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-brand-pink shadow-sm hover:scale-110 transition"><Twitter size={20} /></a>
            </div>
            
            <div className="pt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                    <Mail size={16} /> help.evereve@gmail.com
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={16} /> 044 4234 7989
                </div>
                 <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-1 flex-shrink-0" /> 
                    <span>eMicrolabs, 139, First Floor, Luz Church Rd, Mylapore, Chennai, 600004</span>
                </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-dark dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li><Link to="/shop" className="hover:text-brand-pink">Product</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-brand-pink">How It Works</Link></li>
              <li><Link to="/about" className="hover:text-brand-pink">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-brand-pink">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-dark dark:text-white">Policy</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-pink">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-pink">Terms of Use</a></li>
              <li><a href="#" className="hover:text-brand-pink">Return Policy</a></li>
              <li><a href="#" className="hover:text-brand-pink">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
             <h4 className="font-bold text-lg mb-4 text-brand-dark dark:text-white">Our Newsletter</h4>
             <form className="flex flex-col gap-3">
                 <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:border-brand-pink" />
                 <button type="submit" className="bg-brand-pink text-white py-3 rounded-lg font-bold hover:bg-pink-600 transition">Join</button>
             </form>
          </div>
        </div>

        <div className="border-t border-rose-200 dark:border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} EVEREVE. All rights reserved. Made with care for women's health.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
