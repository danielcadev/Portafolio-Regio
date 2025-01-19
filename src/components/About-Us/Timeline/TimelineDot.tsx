// components/About-Us/Timeline/TimelineDot.tsx
import { motion } from 'framer-motion';

export const TimelineDot = () => (
  <motion.div 
     className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-[#181717] flex items-center justify-center absolute left-[10px] md:-left-5"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-[#E5E5E5] border border-[#181717] p-2" />
  </motion.div>
);