// components/Timeline/TimelineImage.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TimelineImage as TimelineImageType } from '@/types/timeline';

interface TimelineImageProps {
  image: TimelineImageType;
  index?: number;
}

export const TimelineImage = ({ image, index = 0 }: TimelineImageProps) => {
  const ImageWrapper = image.url ? 'a' : motion.div;
  const wrapperProps = image.url ? {
    href: image.url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "block overflow-hidden rounded-xl md:rounded-2xl group",
  } : {
    className: "block overflow-hidden rounded-xl md:rounded-2xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <ImageWrapper {...wrapperProps}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="rounded-xl md:rounded-2xl object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group-hover:scale-105"
        />
      </ImageWrapper>
    </motion.div>
  );
};