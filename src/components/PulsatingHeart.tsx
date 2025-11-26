import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function PulsatingHeart() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Heart
          className="fill-pink-300 text-pink-300"
          style={{
            width: 200,
            height: 200,
            filter: 'blur(40px)',
          }}
        />
      </motion.div>
    </div>
  );
}
