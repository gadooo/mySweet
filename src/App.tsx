import { useState } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { MessageCard } from './components/MessageCard';
import { PulsatingHeart } from './components/PulsatingHeart';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

const loveMessages = [
  {
    id: 1,
    message: "Every moment with you feels like a beautiful dream I never want to wake up from.",
    date: "Forever & Always"
  },
  {
    id: 2,
    message: "You are the poetry my heart has been trying to write all along.",
    date: "Eternally Yours"
  },
  {
    id: 3,
    message: "In your eyes, I found my home. In your heart, I found my love.",
    date: "Today & Tomorrow"
  },
  {
    id: 4,
    message: "Your smile is the sunrise that brightens my darkest days.",
    date: "With All My Love"
  },
  {
    id: 5,
    message: "I fell in love with your soul before I could even touch your skin.",
    date: "Yours Truly"
  },
  {
    id: 6,
    message: "You are my today and all of my tomorrows, my everything.",
    date: "Endless Love"
  },  {
    id: 7,
    message: "لا اعلم سوى شيء واحد انني كلما اراك اتعافى من جروحي.... يضيئ قلبي يبتسم فاهي استريح في لون عينيك",
    date: "Endless Love"
  }
];

export default function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#B26EF7] via-[#9356EB] to-[#7B3FE4]">
      {/* Floating Hearts Background */}
      <FloatingHearts />
      
      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          {/* Pulsating Heart Behind Title */}
          <PulsatingHeart />
          
          <h1 className="relative z-10 mb-4 text-white" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Love Messages For My Beloved 💜
          </h1>
          
          <p className="text-white/90 text-lg mb-10 relative z-10">
            Every heartbeat has a word for you.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white shadow-[0_0_30px_rgba(178,110,247,0.6)] hover:shadow-[0_0_50px_rgba(178,110,247,0.8)] transition-all duration-300"
          >
            💌 Send New Message
          </motion.button>
        </motion.div>

        {/* Message Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {loveMessages.map((msg, index) => (
            <MessageCard
              key={msg.id}
              message={msg.message}
              date={msg.date}
              index={index}
              isHovered={hoveredCard === msg.id}
              onHoverStart={() => setHoveredCard(msg.id)}
              onHoverEnd={() => setHoveredCard(null)}
            />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-white/90 relative"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-4 h-4 fill-pink-300 text-pink-300 animate-pulse" />
            <Heart className="w-3 h-3 fill-pink-200 text-pink-200 animate-pulse" style={{ animationDelay: '0.2s' }} />
          </div>
          
          <p style={{ fontFamily: "'Dancing Script', cursive" }}>
            Made with love — Always Yours 💜
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-2">
            <Heart className="w-3 h-3 fill-pink-200 text-pink-200 animate-pulse" style={{ animationDelay: '0.4s' }} />
            <Heart className="w-4 h-4 fill-pink-300 text-pink-300 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </motion.footer>
      </div>

      {/* Load Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
      `}</style>
    </div>
  );
}
