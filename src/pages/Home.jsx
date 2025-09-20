import { Link } from 'react-router-dom';
import { Shield, Zap, Users, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const highlights = [
    { icon: <Shield className="w-8 h-8" />, title: "Secure Transactions", desc: "Bank-level security" },
    { icon: <Zap className="w-8 h-8" />, title: "Fast Settlements", desc: "Quick processing" },
    { icon: <Users className="w-8 h-8" />, title: "Trusted by Traders", desc: "Proven track record" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007BFF' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center" variants={staggerContainer} initial="initial" animate="animate">
            <motion.div className="mb-8" variants={fadeInUp}>
              <span className="bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-medium border border-accent/20">
                ✨ Professional Crypto Trading Services
              </span>
            </motion.div>
            
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight" variants={fadeInUp}>
              <span className="gradient-text">Buy & Sell Cryptocurrencies</span><br />
              Securely. Fast. Reliable. Trusted.
            </motion.h1>
            
            <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4" variants={fadeInUp}>
              Your one-stop solution for crypto trading, OTC deals, and expert trading services.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 md:mb-16 px-4" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="block w-full sm:w-auto bg-green-600 hover:bg-green-700 px-6 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold transition-colors text-center">
                  Buy Crypto
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="block w-full sm:w-auto bg-red-600 hover:bg-red-700 px-6 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold transition-colors text-center">
                  Sell Crypto
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/trading" className="block w-full sm:w-auto bg-secondary hover:bg-secondary/80 px-6 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold transition-colors text-center">
                  Trading Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4" variants={staggerContainer}>
              {highlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-primary/30 p-4 sm:p-6 rounded-xl border border-secondary/20 backdrop-blur-sm text-center" 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-accent mb-3 sm:mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Offer</h2>
            <p className="text-lg sm:text-xl text-gray-300">Professional crypto services tailored to your needs</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-primary/50 p-6 sm:p-8 rounded-xl border border-secondary/20 text-center" 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 rotate-[-45deg]" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Buy Crypto</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Secure cryptocurrency purchases with competitive rates and instant delivery.</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="bg-green-600 hover:bg-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                  Start Buying
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-primary/50 p-6 sm:p-8 rounded-xl border border-secondary/20 text-center" 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 rotate-[45deg]" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sell Crypto</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Quick and secure crypto sales with fast settlements to your preferred method.</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                  Start Selling
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-primary/50 p-6 sm:p-8 rounded-xl border border-secondary/20 text-center" 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Trading Services</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Professional trading strategies, signals, and portfolio management services.</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/trading" className="bg-secondary hover:bg-secondary/80 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Me?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Professional crypto trading services with a personal touch. I handle every transaction with care and expertise.
              </p>
              
              <div className="space-y-4">
                {[
                  "3+ Years Trading Experience",
                  "$2M+ in Successful Transactions", 
                  "24/7 Customer Support",
                  "Secure & Regulated Operations"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-secondary/20 to-accent/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-white font-bold text-2xl">C</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Chris JDR</h3>
                <p className="text-accent font-medium">Professional Crypto Trader</p>
              </div>
              
              <div className="text-center">
                <motion.a 
                  href="https://wa.me/1234567890" 
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-secondary/10 to-accent/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Trading?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get started with secure crypto transactions today. Fast, reliable, and trusted by traders worldwide.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="bg-secondary hover:bg-secondary/80 px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                Get Started Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://wa.me/1234567890" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;