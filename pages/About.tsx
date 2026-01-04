
import React from 'react';
import { Heart, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-36 min-h-screen bg-white dark:bg-gray-900">
      
      {/* Story Header */}
      <section className="container mx-auto px-6 mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-heading text-5xl font-bold text-brand-dark dark:text-white">The EVEREVE Story</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  EVEREVE was born from a simple yet powerful question: <span className="text-brand-pink font-semibold">"Why must women suffer in silence?"</span>
              </p>
          </div>
      </section>

      {/* Founder Section */}
      <section className="bg-rose-50 dark:bg-gray-800 py-20 mb-20">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2 relative">
                       <img src="https://picsum.photos/id/447/600/700" alt="Founder" className="relative z-10 w-full rounded-2xl shadow-2xl" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-6">
                      <h2 className="font-heading text-3xl font-bold">A Note from Evereve</h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          "We created Evereve and the Pulse devices because we believe menstrual care shouldn't just be about hygiene; it should be about wellness. Evereve is our promise to women—a promise of pain-free days and the freedom to be yourself."
                      </p>
                      <div className="pt-4">
                          <p className="font-bold text-lg font-heading">Ria Sharma</p>
                          <p className="text-sm text-gray-500 uppercase tracking-widest">Founder, EVEREVE</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Mission Values */}
      <section className="container mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 border border-gray-100 dark:border-gray-700 rounded-2xl">
                  <Heart size={32} className="mx-auto mb-6 text-brand-pink" />
                  <h3 className="font-bold text-xl mb-3">Empathy First</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">We design for the real problems women face every single month.</p>
              </div>
              <div className="text-center p-8 border border-gray-100 dark:border-gray-700 rounded-2xl">
                  <Globe size={32} className="mx-auto mb-6 text-teal-600" />
                  <h3 className="font-bold text-xl mb-3">Pure Science</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Drug-free, reusable, and clinically tested. Good for you, good for the planet.</p>
              </div>
              <div className="text-center p-8 border border-gray-100 dark:border-gray-700 rounded-2xl">
                  <Users size={32} className="mx-auto mb-6 text-purple-600" />
                  <h3 className="font-bold text-xl mb-3">Driven by You</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Our innovations are shaped by the voices of our community.</p>
              </div>
          </div>
      </section>
    </div>
  );
};

export default About;
