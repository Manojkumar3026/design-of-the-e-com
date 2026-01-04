
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ShoppingBag, Sparkles } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'FAQs', path: '/faq' },
  ];

  return (
    <nav className={`fixed w-full z-40 top-11 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
           <div className="w-10 h-10 bg-brand-pink rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-200 group-hover:rotate-12 transition-transform">
             <Sparkles size={24} />
           </div>
           <span className={`font-heading font-bold text-2xl tracking-tighter ${scrolled ? 'text-brand-dark dark:text-white' : 'text-brand-dark dark:text-white'}`}>
             EVEREVE
           </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-xs font-semibold hover:text-brand-pink transition-colors font-sans uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/shop" className="bg-brand-pink hover:bg-pink-500 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-pink-200 flex items-center gap-2">
            <ShoppingBag size={18} />
            Buy Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark dark:text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 absolute top-full left-0 w-full shadow-lg py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-brand-dark dark:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/shop" 
            onClick={() => setIsOpen(false)}
            className="bg-brand-pink text-white text-center py-3 rounded-lg font-bold"
          >
            Buy Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
