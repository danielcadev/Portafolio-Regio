// components/Layout/Footer.tsx
"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/RegioSoft',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/regiosoft',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/regiosoft',
      icon: FaTwitter,
    },
  ];

  return (
    <footer className="w-full bg-[#E5E5E5] py-6 px-4">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo y Copyright */}
        <div className="text-center md:text-left">
          <span className="text-[#181717] text-sm md:text-base">
            RegioSoft — {currentYear}
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#181717] hover:text-[#181717]/70 transition-all duration-300 group"
              aria-label={link.name}
            >
              <div className="flex items-center gap-2">
                <span className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <link.icon className="w-5 h-5" />
                </span>
                <span className="hidden md:inline text-sm group-hover:underline">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}