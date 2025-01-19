// components/About-Us/Timeline/TimelineItem.tsx
import { motion } from 'framer-motion';
import { TimelineEntry } from '@/types/timeline';
import { TimelineDot } from './TimelineDot';
import { TimelineImage } from './TimelineImage';

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const renderContent = () => {
    const { content } = item;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <p 
            className="text-[#181717] text-base md:text-lg font-normal mb-8 relative"
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
              {content.images.map((image, imgIndex) => (
                <TimelineImage 
                  key={imgIndex} 
                  image={image} 
                  index={imgIndex}
                />
              ))}
            </div>
          )}

          {content.additionalText && (
            <motion.p 
              className="text-[#181717] text-base md:text-lg font-normal mt-8"
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

  return (
    <motion.div
      className="flex justify-start pt-10 md:pt-40 gap-4 md:gap-10 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-start top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <TimelineDot />
        <h3 className="hidden md:block text-xl md:pl-16 md:text-5xl font-bold text-[#181717] opacity-90 hover:opacity-100 transition-opacity">
          {item.title}
        </h3>
      </div>

      <div className="relative pl-12 md:pl-20 pr-0 md:pr-4 w-full">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#181717]">
          {item.title}
        </h3>
        {renderContent()}
      </div>
    </motion.div>
  );
};