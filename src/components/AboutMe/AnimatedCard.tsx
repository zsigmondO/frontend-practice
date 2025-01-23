import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

function AnimatedCard({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
