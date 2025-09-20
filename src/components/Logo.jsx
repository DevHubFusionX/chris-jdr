import { motion } from 'framer-motion';

const Logo = ({ size = 'md', animated = false }) => {
  const sizes = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-xl', 
    lg: 'w-32 h-32 text-4xl',
    xl: 'w-40 h-40 text-5xl'
  };

  const LogoComponent = animated ? motion.div : 'div';
  const animationProps = animated ? {
    animate: { 
      boxShadow: [
        "0 0 30px rgba(0, 255, 156, 0.4), 0 0 60px rgba(0, 123, 255, 0.2)",
        "0 0 50px rgba(0, 255, 156, 0.6), 0 0 80px rgba(0, 123, 255, 0.4)",
        "0 0 30px rgba(0, 255, 156, 0.4), 0 0 60px rgba(0, 123, 255, 0.2)"
      ]
    },
    transition: { duration: 2, repeat: Infinity }
  } : {};

  return (
    <LogoComponent 
      className={`${sizes[size]} bg-gradient-to-br from-secondary via-accent to-secondary rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden`}
      {...animationProps}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full" />
      
      {/* Main Letter */}
      <span className={`text-white font-bold font-heading relative z-10 ${size === 'xl' ? 'text-5xl' : size === 'lg' ? 'text-4xl' : size === 'md' ? 'text-xl' : 'text-lg'}`}>
        C
      </span>
      
      {/* Decorative Elements */}
      <div className="absolute top-2 right-2 w-1 h-1 bg-white/30 rounded-full" />
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/30 rounded-full" />
      
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-full border border-white/20" />
    </LogoComponent>
  );
};

export default Logo;