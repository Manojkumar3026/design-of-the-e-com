
// Fix: Import React to resolve 'Cannot find namespace React' when using React.FC
import React from 'react';
import { motion } from 'framer-motion';

const Ticker: React.FC = () => {
  return (
    <div className="fixed top-0 w-full h-11 bg-brand-pink text-white py-2 overflow-hidden whitespace-nowrap z-50 flex items-center shadow-sm">
      <div className="flex items-center w-full">
        <motion.div 
          className="flex space-x-12 font-heading font-semibold tracking-widest text-xs md:text-sm uppercase items-center"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          style={{ width: "max-content", display: "flex" }} 
        >
          {/* Content */}
          <span className="flex items-center gap-2">HER COMFORT &bull; HER POWER &bull; HER FREEDOM</span>
          <span className="flex items-center gap-2">EVEREVE CARE &bull; PERIOD PEACE &bull; CONFIDENT DAYS</span>
          <span className="flex items-center gap-2">DESIGNED FOR HER &bull; SOOTHE &bull; RESTORE</span>
          <span className="flex items-center gap-2">MENSTRUAL WELLNESS &bull; EASE &bull; EVEREVE</span>
          
          {/* Repeat Content */}
          <span className="flex items-center gap-2">HER COMFORT &bull; HER POWER &bull; HER FREEDOM</span>
          <span className="flex items-center gap-2">EVEREVE CARE &bull; PERIOD PEACE &bull; CONFIDENT DAYS</span>
          <span className="flex items-center gap-2">DESIGNED FOR HER &bull; SOOTHE &bull; RESTORE</span>
          <span className="flex items-center gap-2">MENSTRUAL WELLNESS &bull; EASE &bull; EVEREVE</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Ticker;