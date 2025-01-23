import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Enhanced Section component with more fluid animations
function Section({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-10% 0px -10% 0px',
    once: false,
  });

  const directionVariants = {
    up: { y: 100 },
    down: { y: -100 },
    left: { x: 100 },
    right: { x: -100 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
            }
          : {
              opacity: 0,
              ...directionVariants[direction],
            }
      }
      transition={{
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Section;
