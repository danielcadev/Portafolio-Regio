// components/CMSShowcase/FeatureCard.tsx
'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import type { FeatureCardProps } from '@/types/cms';

export function FeatureCard({ title, description, image, badge, gradient, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative h-[600px] rounded-3xl overflow-hidden group ${gradient}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative h-full w-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>

      <motion.div 
        className="absolute inset-x-0 bottom-0 p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white">
          {badge}
        </Badge>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-white/80 max-w-xl">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}