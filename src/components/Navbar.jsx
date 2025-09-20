import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Globe, TrendingUp, HelpCircle, BookOpen, Mail, MessageCircle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: <User className="w-4 h-4" /> },
    { path: '/trading', label: 'Trading', icon: <TrendingUp className="w-4 h-4" /> },
    { path: '/how-it-works', label: 'How It Works', icon: <HelpCircle className="w-4 h-4" /> },
    { path: '/about', label: 'About', icon: <User className="w-4 h-4" /> },
    { path: '/blog', label: 'Blog', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav 
        className={`hidden md:block fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-primary/98 backdrop-blur-xl shadow-2xl shadow-accent/5 border-b border-accent/20' 
            : 'bg-primary/90 backdrop-blur-sm border-b border-secondary/10'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Logo size="md" />
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text font-heading">JDISOLUTIONS</span>
                <span className="text-xs text-accent font-medium tracking-wider">CRYPTO SPECIALIST</span>
              </div>
            </Link>
            
            {/* Navigation */}
            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div key={item.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.path}
                      className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                        isActive 
                          ? 'text-accent bg-accent/10 shadow-lg' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div 
                          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent rounded-full"
                          layoutId="activeIndicator"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* CTA Buttons */}
              <div className="flex items-center space-x-4 ml-6">
                <motion.a 
                  href="https://wa.me/08102378249" 
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">WhatsApp</span>
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contact" 
                    className="relative bg-gradient-to-r from-secondary to-accent hover:from-secondary/80 hover:to-accent/80 px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <motion.div 
        className="md:hidden fixed w-full z-50 bg-primary/98 backdrop-blur-xl border-b border-secondary/20 shadow-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center px-4 h-16">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Logo size="sm" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-bold gradient-text font-heading">JDISOLUTIONS</span>
              <span className="text-xs text-accent">Crypto Trader</span>
            </div>
          </Link>
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div 
              className="md:hidden fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-primary/98 backdrop-blur-xl border-l border-secondary/20 shadow-2xl z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <Logo size="md" />
                    <div>
                      <span className="text-xl font-bold gradient-text font-heading">JDISOLUTIONS</span>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-accent">Professional Trader</span>
                      </div>
                    </div>
                  </div>
                  <motion.button 
                    onClick={() => setIsOpen(false)} 
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>
                </div>

                {/* Navigation */}
                <nav className="flex-1">
                  <div className="space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                              isActive 
                                ? 'bg-accent/10 text-accent border border-accent/20 shadow-lg' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <div className={`p-2 rounded-lg ${isActive ? 'bg-accent/20' : 'bg-white/5'}`}>
                              {item.icon}
                            </div>
                            <span className="font-medium">{item.label}</span>
                            {isActive && (
                              <motion.div 
                                className="ml-auto w-2 h-2 bg-accent rounded-full"
                                layoutId="mobileActiveIndicator"
                              />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Footer Actions */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <motion.a 
                    href="https://wa.me/08102378249" 
                    className="flex items-center space-x-3 px-4 py-4 rounded-xl bg-green-600/20 text-green-400 hover:bg-green-600/30 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">WhatsApp Chat</span>
                  </motion.a>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    <Link 
                      to="/contact" 
                      onClick={() => setIsOpen(false)}
                      className="block w-full bg-gradient-to-r from-secondary to-accent px-4 py-4 rounded-xl text-center font-semibold transition-all duration-300 hover:shadow-lg"
                    >
                      Get Started Today
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;