'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  linkedin: string;
  avatarUrl: string;
}

export default function TeamCard({ name, title, description, linkedin, avatarUrl }: TeamCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-80 rounded-lg p-6 text-white w-full flex flex-col items-center justify-between h-full shadow-lg"
    >
      <div className="flex flex-col items-center text-center w-full">
        <div className="w-32 h-32 relative mb-4 overflow-hidden rounded-full border-4 border-blue-500">
          <Image
            src={avatarUrl || '/placeholder-avatar.png'}
            alt={`${name} avatar`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-blue-300 mb-2">{title}</p>
        <p className="text-sm mb-4 text-gray-300">{description}</p>
      </div>
      <a 
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300 w-full flex items-center justify-center mt-auto"
      >
        <FaLinkedin className="mr-2" /> LinkedIn
      </a>
    </motion.div>
  );
}