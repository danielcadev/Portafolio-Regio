"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TimelineEntry } from '@/types/timeline';
import Image from 'next/image';

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline = ({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === ref.current) {
          setHeight(entry.contentRect.height);
        }
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => resizeObserver.disconnect();
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const renderContent = (content: TimelineEntry['content'], index: number) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          {/* Gradient overlay for text */}
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

          {content.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={content.image.width}
                height={content.image.height}
                className="rounded-xl md:rounded-2xl object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-transform duration-300 hover:scale-[1.02]"
              />
            </motion.div>
          )}

          {content.images && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {content.images.map((image, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * imgIndex }}
                >
                  {image.url ? (
                    <a 
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-xl md:rounded-2xl group"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="rounded-xl md:rounded-2xl object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group-hover:scale-105"
                      />
                    </a>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="rounded-xl md:rounded-2xl object-cover h-48 md:h-44 lg:h-60 w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-transform duration-300 hover:scale-[1.02]"
                    />
                  )}
                </motion.div>
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
    <div ref={containerRef} className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div ref={ref} className="relative w-full max-w-[1120px] mx-auto pb-20 mt-24 px-4 md:px-0">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 md:pt-40 gap-4 md:gap-10 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-start top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div 
                className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-[#181717] flex items-center justify-center absolute left-0 md:-left-5"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-[#E5E5E5] border border-[#181717] p-2" />
              </motion.div>
              <h3 className="hidden md:block text-xl md:pl-16 md:text-5xl font-bold text-[#181717] opacity-90 hover:opacity-100 transition-opacity">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 md:pl-20 pr-0 md:pr-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#181717]">
                {item.title}
              </h3>
              {renderContent(item.content, index)}
            </div>
          </motion.div>
        ))}
        
        {/* Timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-4 md:left-0 top-0 overflow-hidden w-[1px] bg-gradient-to-b from-transparent via-[#181717] to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1px] bg-[#181717] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};