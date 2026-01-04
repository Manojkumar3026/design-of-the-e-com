
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, CheckCircle, Smartphone, Bluetooth, ShieldCheck, Zap, Star, Leaf, Activity, Award } from 'lucide-react';
import { PRODUCTS, TESTIMONIALS, BLOG_POSTS, MEDIA_OUTLETS } from '../constants';

const Home: React.FC = () => {
  const proProduct = PRODUCTS.find(p => p.id === 'evereve-pro');
  const liteProduct = PRODUCTS.find(p => p.id === 'evereve-lite');

  // Parallax Setup
  const { scrollY } = useScroll();
  const yHeroBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yHeroImg = useTransform(scrollY, [0, 1000], [0, 80]);
  const yShape1 = useTransform(scrollY, [0, 1500], [0, -200]);
  const yShape2 = useTransform(scrollY, [500, 2000], [100, -100]);
  const yPEMF = useTransform(scrollY, [2000, 3500], [0, 100]);

  return (
    <div className="w-full overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-rose-50 to-white dark:from-gray-900 dark:to-gray-800 pt-32 overflow-hidden">
        <motion.div 
          style={{ y: yHeroBg }}
          className="absolute top-0 right-0 w-2/3 h-full bg-pink-50/50 dark:bg-pink-900/10 rounded-bl-[200px] -z-0"
        />
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
             <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block"
             >
                 <span className="text-brand-pink font-semibold tracking-wider uppercase text-sm bg-pink-100 dark:bg-pink-900 px-3 py-1 rounded-full">
                     Gentle Care. Total Comfort.
                 </span>
             </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl font-bold text-brand-dark dark:text-white leading-[1.1]"
            >
              The gentle, drug-free hug for your <span className="text-brand-pink">menstrual cycle.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link to="/shop" className="bg-brand-pink text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition flex items-center justify-center gap-2">
                Soothe with EVEREVE
              </Link>
              <a href="#how-it-works" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium">
                Our Science <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ y: yHeroImg }}
            className="relative"
          >
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                <img 
                    src="https://picsum.photos/id/342/800/800" 
                    alt="Woman in comfort" 
                    className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="font-heading text-2xl font-bold">Relief has a new name.</p>
                </div>
             </div>
             
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl max-w-xs flex items-center gap-4 border border-gray-100 dark:border-gray-700"
             >
                 <img src="https://picsum.photos/id/20/100/100" className="w-16 h-16 rounded-lg object-cover" alt="Device" />
                 <div>
                     <p className="font-bold text-brand-dark dark:text-white text-sm">Evereve Pro</p>
                     <div className="flex text-yellow-400 text-xs">★★★★★</div>
                 </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- MEDIA TICKER --- */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="container mx-auto px-6 mb-6 text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">As Seen In</p>
        </div>
        <motion.div 
            className="flex items-center gap-16 whitespace-nowrap"
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            style={{ width: "max-content" }}
        >
            {[...MEDIA_OUTLETS, ...MEDIA_OUTLETS].map((outlet, idx) => (
                <div key={idx} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 cursor-pointer">
                    <img src={outlet.logo} alt={outlet.name} className="h-8 md:h-10 w-auto object-contain" />
                </div>
            ))}
        </motion.div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
          <motion.div style={{ y: yShape1 }} className="absolute top-20 left-10 w-64 h-64 bg-teal-50 dark:bg-teal-900/10 rounded-full blur-3xl -z-0" />
          <motion.div style={{ y: yShape1 }} className="absolute bottom-20 right-10 w-96 h-96 bg-pink-50 dark:bg-pink-900/10 rounded-full blur-3xl -z-0" />

          <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-16">
                  <h4 className="text-brand-pink font-bold uppercase tracking-widest mb-4">Welcome to Evereve</h4>
                  <h2 className="font-heading text-4xl font-bold text-brand-dark dark:text-white mb-6">
                      You deserve relief that works with your body
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      EVEREVE is here to bridge the gap between technology and feminine wellness. No more missing out, no more pushing through pain.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="p-8 bg-rose-50/80 dark:bg-gray-800 backdrop-blur-sm rounded-3xl">
                      <div className="text-5xl font-bold text-brand-pink mb-2">98%</div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">customer satisfaction</p>
                  </div>
                  <div className="p-8 bg-teal-50/80 dark:bg-gray-800 backdrop-blur-sm rounded-3xl">
                      <div className="text-5xl font-bold text-teal-500 mb-2">0</div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">side effects</p>
                  </div>
                  <div className="p-8 bg-purple-50/80 dark:bg-gray-800 backdrop-blur-sm rounded-3xl">
                      <div className="text-5xl font-bold text-purple-500 mb-2">100%</div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">drug-free relief</p>
                  </div>
              </div>
          </div>
      </section>

      {/* --- SHOP SECTION --- */}
      <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="font-heading text-4xl font-bold mb-4">Choose Your Ease</h2>
                  <p className="text-gray-500">Discover the perfect companion for your comfort journey.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Pro Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-brand-pink shadow-xl overflow-hidden relative transform hover:-translate-y-2 transition duration-300">
                      <div className="absolute top-0 right-0 bg-brand-pink text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider z-20">
                          PRO EXPERIENCE
                      </div>
                      
                      <div className="relative h-64 bg-gray-200 group overflow-hidden">
                        <video 
                            src={proProduct?.videoUrl} 
                            autoPlay muted loop playsInline
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                                <span className="text-brand-pink font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                    <Play size={12} className="fill-current" /> Instant Soothe
                                </span>
                            </div>
                        </div>
                      </div>

                      <div className="p-8 pb-0">
                          <h3 className="font-heading text-3xl font-bold text-brand-dark dark:text-white mb-2">Evereve Pro</h3>
                          <p className="text-gray-500 mb-4">Total control, total comfort.</p>
                          <div className="flex items-end gap-2 mb-6">
                              <span className="text-4xl font-bold text-brand-dark dark:text-white">₹2,999</span>
                              <div className="flex items-center text-sm text-gray-500 mb-2">
                                  <Star size={14} className="text-yellow-400 fill-current mr-1" />
                                  (1.2k+ reviews)
                              </div>
                          </div>
                      </div>
                      <div className="p-8">
                          <Link to="/shop" className="block w-full bg-brand-pink text-white text-center py-4 rounded-xl font-bold hover:bg-pink-600 transition">
                              Shop Pro
                          </Link>
                      </div>
                  </div>

                  {/* Lite Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 flex flex-col">
                      <div className="relative h-64 bg-gray-200 group overflow-hidden">
                        <video 
                            src={liteProduct?.videoUrl} 
                            autoPlay muted loop playsInline
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                                <span className="text-brand-pink font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                    <Play size={12} className="fill-current" /> Relief in Minutes
                                </span>
                            </div>
                        </div>
                      </div>

                      <div className="p-8 flex-grow">
                          <h3 className="font-heading text-3xl font-bold text-brand-dark dark:text-white mb-2">Evereve Lite</h3>
                          <p className="text-gray-500 mb-4">Simplicity at its finest.</p>
                          <div className="flex items-end gap-2 mb-6">
                              <span className="text-4xl font-bold text-brand-dark dark:text-white">₹1,999</span>
                          </div>
                      </div>
                      <div className="p-8">
                          <Link to="/shop" className="block w-full bg-brand-dark dark:bg-white dark:text-black text-white text-center py-4 rounded-xl font-bold hover:opacity-90 transition">
                              Shop Lite
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- WHY LOVE EVEREVE --- */}
      <section className="py-20 bg-rose-50 dark:bg-gray-800 relative overflow-hidden">
          <motion.div style={{ y: yShape2 }} className="absolute -left-20 top-1/2 w-80 h-80 bg-white/50 dark:bg-gray-700/20 rounded-full blur-3xl -z-0" />
          <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="font-heading text-4xl font-bold mb-8">Why women love Evereve</h2>
                      <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg relative mb-12">
                          <div className="text-6xl text-brand-pink opacity-20 absolute top-4 left-6">"</div>
                          <p className="text-xl text-gray-600 dark:text-gray-300 italic relative z-10 leading-relaxed">
                              EVEREVE changed my cycle forever. I can finally focus on my work instead of the pain.
                          </p>
                          <div className="mt-6 flex items-center gap-4">
                              <div className="w-12 h-12 bg-pink-200 rounded-full"></div>
                              <div><p className="font-bold">Ananya, 25</p></div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                          <Leaf className="text-teal-500 mb-4" size={32} />
                          <h4 className="font-bold text-lg mb-2">Pure Relief</h4>
                          <p className="text-sm text-gray-500 mb-4">Drug-free pulses for your body</p>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                          <Zap className="text-yellow-500 mb-4" size={32} />
                          <h4 className="font-bold text-lg mb-2">Rapid Ease</h4>
                          <p className="text-sm text-gray-500 mb-4">Relief in 15 minutes</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-24 bg-brand-pink text-white text-center">
          <div className="container mx-auto px-6">
              <h2 className="font-heading text-5xl font-bold mb-6">You Deserve to Live Pain Free</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Join thousands of women who've reclaimed their power and peace of mind with EVEREVE.</p>
              <Link to="/shop" className="inline-block bg-white text-brand-pink px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition">
                  Experience Evereve Today
              </Link>
          </div>
      </section>

    </div>
  );
};

export default Home;
