"use client"
import NavbarLinks from "./NavbarLinks";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden fixed inset-0 flex flex-col items-start space-y-4 px-6 py-4 bg-black bg-opacity-90 z-50">
      <button 
        onClick={onClose}
        className="self-end text-white text-2xl font-bold mb-4"
        aria-label="Cerrar menú"
      >
        X
      </button>
      <div className="flex flex-col w-full space-y-2">
        <NavbarLinks onClick={onClose} />
      </div>
    </div>
  );
}