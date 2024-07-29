"use client"
import NavbarLinks from "./NavbarLinks";
import { motion } from "framer-motion";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div 
      className="md:hidden fixed inset-0 flex flex-col items-start bg-black bg-opacity-95 z-50"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <motion.button 
        onClick={onClose}
        className="self-end text-white text-2xl font-bold m-4"
        aria-label="Cerrar menú"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        X
      </motion.button>
      <div className="flex flex-col w-full p-4">
        <NavbarLinks onClick={onClose} mobile />
      </div>
    </motion.div>
  );
}