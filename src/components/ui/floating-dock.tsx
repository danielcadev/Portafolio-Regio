"use client"
import { useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionValueEvent,
  MotionValue
} from "framer-motion";
import Link from "next/link";

type Item = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

type FloatingDockProps = {
  items: Item[];
  desktopClassName?: string;
  mobileClassName?: string;
};

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) => {
  const [showDock, setShowDock] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowDock(latest > 100);
  });

  const variants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
      }
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.8,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          className="fixed bottom-4 left-0 right-0 z-50 flex justify-center"
        >
          <FloatingDockDesktop items={items} className={desktopClassName} />
          <FloatingDockMobile items={items} className={mobileClassName} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div className={cn("fixed bottom-4 right-4 block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            className="absolute bottom-full mb-2 right-0 flex flex-col gap-2 items-end"
          >
            {items.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="relative group">
                <Link
                  href={item.href}
                  className="h-12 w-12 rounded-full bg-black shadow-lg flex items-center justify-center"
                >
                  <div className="h-6 w-6 text-white">{item.icon}</div>
                </Link>
                <motion.span 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded-full whitespace-nowrap"
                >
                  {item.title}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full bg-black shadow-lg flex items-center justify-center"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6 text-white" />
      </motion.button>
    </motion.div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 items-end rounded-full bg-black px-6 pb-4 shadow-lg",
        className
      )}
    >
      {items.map((item) => (
        <motion.div 
          key={item.title}
          className="mx-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <IconContainer mouseX={mouseX} {...item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-full bg-black text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}