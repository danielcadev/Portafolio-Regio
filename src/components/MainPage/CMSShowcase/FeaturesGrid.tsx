// components/CMSShowcase/FeaturesGrid.tsx
'use client'

import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { features } from '@/data/cms-features';

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}