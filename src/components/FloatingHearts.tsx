import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

const hearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 8 + Math.random() * 4,
  size: 20 + Math.random() * 30,
  opacity: 0.25 + Math.random() * 0.35,
}));

export function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-10%',
          }}
          animate={{
            y: [0, -1200],
            x: [0, Math.sin(heart.id) * 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Heart
            className="fill-pink-300 text-pink-300"
            style={{
              width: heart.size,
              height: heart.size,
              opacity: heart.opacity,
              filter: 'blur(1px)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
