import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, Bitcoin, DollarSign } from 'lucide-react';
import Logo from './Logo';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-gradient-to-br from-primary via-dark to-primary flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => setTimeout(onComplete, 3000)}
    >
      {/* Enhanced Background Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
              y: [0, -50, -100],
              backgroundColor: [
                'rgba(34, 197, 94, 0.3)',
                'rgba(59, 130, 246, 0.4)', 
                'rgba(168, 85, 247, 0.3)'
              ]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      {/* Floating Crypto Icons */}
      <div className="absolute inset-0">
        {[Bitcoin, DollarSign, TrendingUp].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-accent/20"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon size={24 + i * 8} />
          </motion.div>
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Enhanced Logo Animation */}
        <motion.div 
          className="relative mb-12"
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Pulsing Glow Effect */}
          <motion.div 
            className="absolute inset-0 w-32 h-32 bg-accent/10 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Outer Ring with Gradient */}
          <motion.div 
            className="absolute inset-0 w-32 h-32 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, rgba(34, 197, 94, 0.4), rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), rgba(34, 197, 94, 0.4))'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner Ring */}
          <motion.div 
            className="absolute inset-2 w-28 h-28 border-2 border-secondary/50 rounded-full backdrop-blur-sm"
            animate={{ 
              rotate: -360,
              borderColor: [
                'rgba(59, 130, 246, 0.5)',
                'rgba(34, 197, 94, 0.5)', 
                'rgba(168, 85, 247, 0.5)',
                'rgba(59, 130, 246, 0.5)'
              ]
            }}
            transition={{ 
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              borderColor: { duration: 3, repeat: Infinity }
            }}
          />
          
          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Logo size="lg" animated={true} />
          </motion.div>
          
          {/* Enhanced Orbiting Icons */}
          {[
            { icon: TrendingUp, angle: 0, delay: 0, color: 'text-green-400' },
            { icon: Shield, angle: 120, delay: 0.3, color: 'text-blue-400' },
            { icon: Zap, angle: 240, delay: 0.6, color: 'text-purple-400' }
          ].map(({ icon: Icon, angle, delay, color }, i) => (
            <motion.div
              key={i}
              className="absolute w-10 h-10 bg-gradient-to-br from-primary/90 to-dark/90 backdrop-blur-sm rounded-xl flex items-center justify-center border border-accent/40 shadow-lg"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
              }}
              initial={{ 
                x: -20, 
                y: -20,
                rotate: angle,
                translateX: 70,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                rotate: angle + 360,
                opacity: 1,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                opacity: { delay: delay + 1, duration: 0.5 },
                scale: { duration: 2, repeat: Infinity, delay: delay + 1.5 }
              }}
              whileHover={{ scale: 1.2 }}
            >
              <Icon className={`w-5 h-5 ${color}`} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced Brand Text */}
        <motion.div className="mb-3">
          <div className="text-5xl font-bold font-heading flex justify-center items-center space-x-2">
            {/* CHR - slides from left with bounce */}
            <motion.span 
              className="gradient-text"
              initial={{ x: -100, opacity: 0, rotateY: -90 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
            >
              CHR
            </motion.span>
            
            {/* IS - drops from top with rotation */}
            <motion.span 
              className="gradient-text"
              initial={{ y: -100, opacity: 0, rotate: -180 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.6, 
                ease: "easeOut",
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              IS
            </motion.span>
            
            {/* JDR - slides from right with flip */}
            <motion.span 
              className="gradient-text"
              initial={{ x: 100, opacity: 0, rotateY: 90 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 2.0, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.1, rotateY: -10 }}
            >
              JDR
            </motion.span>
          </div>
          
          <motion.p 
            className="text-accent font-medium text-lg tracking-wider mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.5 }}
          >
            ELITE CRYPTO SPECIALIST
          </motion.p>
        </motion.div>

        {/* Enhanced Progress Indicator */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="flex space-x-3">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-2 bg-accent/20 rounded-full overflow-hidden border border-accent/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 + (i * 0.1), duration: 0.3 }}
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 2.2 + (i * 0.15),
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="mt-6 text-gray-400 text-sm font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          PRECISION • PROFIT • TRUST
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;