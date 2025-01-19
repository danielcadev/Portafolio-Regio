// components/Timeline/index.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TimelineEntry } from '@/types/timeline';
import { TimelineItem } from './TimelineItem';

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

    return (
        <div ref={containerRef} className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

            <div ref={ref} className="relative w-full max-w-[1120px] mx-auto pb-20 mt-24 px-4 md:px-0">
                {/* Timeline line */}
                <div
                    style={{ height: height + "px" }}
                    className="absolute left-[41px] md:left-0 top-0 overflow-hidden w-[1px] bg-gradient-to-b from-transparent via-[#181717] to-transparent"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[1px] bg-[#181717] rounded-full"
                    />
                </div>

                {data.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};