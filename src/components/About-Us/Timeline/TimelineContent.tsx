// components/Timeline/TimelineContent.tsx
import { motion } from 'framer-motion';
import { TimelineContent as TimelineContentType } from '@/types/timeline';
import { TimelineImage } from './TimelineImage';

interface TimelineContentProps {
  content: TimelineContentType;
}

export const TimelineContent = ({ content }: TimelineContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="relative">
        <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <p 
          className="text-[#181717] text-base md:text-lg font-normal relative"
          dangerouslySetInnerHTML={{
            __html: content.highlights?.reduce((acc, highlight) => {
              return acc.replace(
                highlight,
                `<strong class="text-[#181717] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#181717]/10">${highlight}</strong>`
              );
            }, content.text) || content.text
          }}
        />

        {content.image && <TimelineImage image={content.image} />}

        {content.images && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {content.images.map((image, index) => (
              <TimelineImage key={index} image={image} index={index} />
            ))}
          </div>
        )}

        {content.additionalText && (
          <motion.p 
            className="text-[#181717] text-base md:text-lg font-normal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {content.additionalText}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};