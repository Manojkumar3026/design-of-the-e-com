import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../constants';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pt-36 pb-20 min-h-screen bg-rose-50/50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold text-brand-dark dark:text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 dark:text-gray-300">Everything you need to know about LIBERA.</p>
        </div>

        <div className="space-y-4">
            {FAQ_DATA.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <button 
                        onClick={() => toggle(index)}
                        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                    >
                        <span className="font-semibold text-lg text-brand-dark dark:text-white pr-4">{item.question}</span>
                        <div className={`p-1 rounded-full bg-rose-50 dark:bg-gray-700 text-brand-pink transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                            {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                    </button>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-brand-pink/20">
            <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-pink">
                <MessageCircle size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Our support team is just a message away.</p>
            <button className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition">
                Chat with Support
            </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;