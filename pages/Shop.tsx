
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, PRODUCT_ICONS } from '../constants';
import { Check, Gift, CreditCard, ShoppingCart, Play } from 'lucide-react';

const Shop: React.FC = () => {
  const [giftPacking, setGiftPacking] = useState<Record<string, boolean>>({});

  const toggleGift = (id: string) => {
    setGiftPacking(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="pt-36 min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4">Choose Your <span className="text-brand-pink">Comfort</span></h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Select the perfect Evereve device for your lifestyle. Every purchase comes with a 30-day money-back guarantee.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
            {PRODUCTS.map((product) => (
                <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                    <div className="relative h-64 md:h-80 bg-gray-200 group overflow-hidden">
                        <video 
                            src={product.videoUrl} 
                            autoPlay muted loop playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500 flex items-center justify-center">
                            <motion.div 
                                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20"
                            >
                                <span className="text-brand-pink font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                    <Play size={14} className="fill-current" /> {product.overlayText || "Watch Demo"}
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-2xl font-bold font-heading">{product.name}</h2>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-bold text-brand-pink">₹{product.price}</div>
                            </div>
                        </div>

                        <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg flex items-center gap-3">
                            <CreditCard size={20} className="text-blue-600 dark:text-blue-400" />
                            <div className="text-xs">
                                <span className="font-bold text-blue-700 dark:text-blue-300">EMI Available</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mb-8">
                            {PRODUCT_ICONS.slice(0, 4).map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-gray-700 flex items-center justify-center text-brand-pink">
                                        <item.icon size={18} />
                                    </div>
                                    <span className="text-[10px] uppercase font-bold text-gray-500">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto border-t border-gray-100 dark:border-gray-700 pt-6">
                            <button className="w-full bg-brand-dark dark:bg-white dark:text-black text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition flex items-center justify-center gap-2">
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
