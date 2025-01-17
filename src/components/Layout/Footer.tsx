// components/Layout/Footer.tsx
"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#E5E5E5] py-4">
      <div className="w-[1120px] mx-auto flex justify-between items-center">
        <div>
          <span className="text-[#181717]">RegioSoft — {currentYear}</span>
        </div>
        <div className="flex gap-8">
          <a 
            href="https://github.com/RegioSoft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#181717] hover:text-gray-600 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/company/regiosoft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#181717] hover:text-gray-600 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com/regiosoft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#181717] hover:text-gray-600 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}