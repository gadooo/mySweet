import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface MessageCardProps {
  message: string;
  date: string;
  index: number;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function MessageCard({ message, date, index, isHovered, onHoverStart, onHoverEnd }: MessageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="group cursor-pointer"
    >
      <div 
        className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
        style={{
          boxShadow: isHovered 
            ? '0 20px 60px rgba(236, 72, 153, 0.4), 0 0 40px rgba(236, 72, 153, 0.3)' 
            : '0 10px 30px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Decorative Heart Icon */}
        <div className="absolute -top-3 -right-3">
          <motion.div
            animate={isHovered ? { rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-8 h-8 fill-pink-400 text-pink-400 drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Message Text */}
        <p className="text-white mb-4 leading-relaxed">
          {message}
        </p>

        {/* Date */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
          <Heart className="w-4 h-4 fill-pink-300 text-pink-300" />
          <p className="text-pink-200 text-sm italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
            {date}
          </p>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.2), transparent 70%)',
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
