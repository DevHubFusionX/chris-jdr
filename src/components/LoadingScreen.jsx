import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap } from 'lucide-react';
import Logo from './Logo';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-gradient-to-br from-primary via-dark to-primary flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => setTimeout(onComplete, 3000)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Main Logo Animation */}
        <motion.div 
          className="relative mb-12"
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Outer Ring */}
          <motion.div 
            className="absolute inset-0 w-32 h-32 border-2 border-accent/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner Ring */}
          <motion.div 
            className="absolute inset-2 w-28 h-28 border border-secondary/50 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Logo size="lg" animated={true} />
          </motion.div>
          
          {/* Orbiting Icons */}
          {[
            { icon: TrendingUp, angle: 0, delay: 0 },
            { icon: Shield, angle: 120, delay: 0.3 },
            { icon: Zap, angle: 240, delay: 0.6 }
          ].map(({ icon: Icon, angle, delay }, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-primary/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-accent/30"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
              }}
              initial={{ 
                x: -16, 
                y: -16,
                rotate: angle,
                translateX: 60,
                opacity: 0 
              }}
              animate={{ 
                rotate: angle + 360,
                opacity: 1
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                opacity: { delay: delay + 1, duration: 0.5 }
              }}
            >
              <Icon className="w-4 h-4 text-accent" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.h1 
            className="text-5xl font-bold gradient-text font-heading mb-3"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Chris JDR
          </motion.h1>
          <motion.p 
            className="text-accent font-medium text-lg tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            ELITE CRYPTO SPECIALIST
          </motion.p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-1 bg-accent/30 rounded-full overflow-hidden"
              >
                <motion.div
                  className="w-full h-full bg-accent rounded-full"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ 
                    duration: 0.6,
                    delay: 2.2 + (i * 0.2),
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