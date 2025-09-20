import { MessageCircle, CreditCard, TrendingUp, Shield, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const buyingSteps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Contact Me",
      description: "Reach out via WhatsApp or contact form with your crypto buying requirements and budget."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verification & Quote",
      description: "I'll verify your identity for security and provide you with the best market rates available."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payment",
      description: "Make payment through secure methods. Your funds are protected throughout the process."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Crypto Delivered",
      description: "Receive your cryptocurrency instantly in your wallet. Transaction complete and secure."
    }
  ];

  const sellingSteps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Send Details",
      description: "Contact me with the type and amount of crypto you want to sell for an instant quote."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Get Best Rate",
      description: "I'll provide you with competitive market rates and explain the selling process."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transfer",
      description: "Transfer your crypto to the provided secure wallet address for processing."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Fast Payment",
      description: "Receive payment in your preferred method within minutes of confirmation."
    }
  ];

  const tradingSteps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Free Consultation",
      description: "Schedule a free 30-minute call to discuss your trading goals and experience level."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strategy Development",
      description: "I'll create a personalized trading strategy based on your risk tolerance and goals."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Start Trading",
      description: "Begin with signals, portfolio management, or coaching based on your chosen service."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Track Results",
      description: "Monitor your progress with regular reports and ongoing support for optimal results."
    }
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
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
                📋 Simple Process
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, transparent processes for buying crypto, selling crypto, and accessing professional trading services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Buying Crypto Process */}
      <section className="py-20 bg-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400">Buying Crypto</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get cryptocurrency quickly and securely with competitive rates and instant delivery.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {buyingSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-green-600/20 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 border-2 border-green-600/30">
                  <div className="text-green-400">{step.icon}</div>
                </div>
                <div className="bg-green-600/20 text-green-400 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < buyingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-green-400/50">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selling Crypto Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-red-400">Selling Crypto</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Convert your cryptocurrency to cash quickly with the best market rates and fast settlements.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {sellingSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-red-600/20 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 border-2 border-red-600/30">
                  <div className="text-red-400">{step.icon}</div>
                </div>
                <div className="bg-red-600/20 text-red-400 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < sellingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-red-400/50">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trading Services Process */}
      <section className="py-20 bg-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-secondary">Trading Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get professional trading guidance with personalized strategies and ongoing support.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {tradingSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-secondary/20 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 border-2 border-secondary/30">
                  <div className="text-secondary">{step.icon}</div>
                </div>
                <div className="bg-secondary/20 text-secondary w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < tradingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-secondary/50">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Security & Trust</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your security is my priority. Every transaction is protected with industry-leading security measures.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">Secure Transactions</h3>
              <p className="text-gray-300">All transactions are protected with bank-level security and encryption.</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">Verified Identity</h3>
              <p className="text-gray-300">KYC verification ensures legitimate and compliant transactions.</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support for any questions or concerns you may have.</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">Proven Track Record</h3>
              <p className="text-gray-300">3+ years of successful transactions with satisfied clients worldwide.</p>
            </motion.div>
          </motion.div>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose your service and start your crypto journey today. Fast, secure, and reliable transactions guaranteed.
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
                Contact Me Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://wa.me/08102378249" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HowItWorks;