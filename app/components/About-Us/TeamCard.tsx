// components/TeamCard.tsx
'use client';

import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  linkedin: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, description, linkedin }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-white w-64 flex flex-col items-center justify-between h-full"
  >
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 bg-gray-400 rounded-full mb-4"></div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-300 mb-2">{title}</p>
      <p className="text-sm mb-4">{description}</p>
    </div>
    <a 
      href={linkedin} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 w-full flex items-center justify-center mt-auto"
    >
      <FaLinkedin className="mr-2" /> LinkedIn
    </a>
  </motion.div>
);

export default TeamCard;