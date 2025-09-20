import { TrendingUp, Shield, Target, Award, MessageCircle, CheckCircle, Star, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "$2.1M", label: "Total Volume", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "127%", label: "Average ROI", icon: <Target className="w-6 h-6" /> },
    { number: "89%", label: "Win Rate", icon: <Award className="w-6 h-6" /> }
  ];

  const journey = [
    {
      year: "2021",
      title: "Started Trading",
      description: "Began my crypto journey with personal investments and studying market patterns."
    },
    {
      year: "2022",
      title: "First Clients",
      description: "Started helping friends and family with crypto transactions and exchange services."
    },
    {
      year: "2023",
      title: "Professional Services",
      description: "Launched professional crypto exchange services with secure transaction processing."
    },
    {
      year: "2024",
      title: "Expanding Reach",
      description: "Growing client base with consistent results and expanding service offerings."
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Every transaction is protected with bank-level security and proper verification processes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personal Touch",
      description: "Direct communication and personalized service - you work with me, not a team."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of consistent profits and successful transactions for all clients."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Transparency",
      description: "Clear communication, honest advice, and transparent pricing with no hidden fees."
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
                  👋 Meet Chris
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Hi, I'm JDISOLUTIONS - a professional cryptocurrency exchange specialist with over 3 years of experience helping people buy and sell cryptocurrencies safely and securely.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                What started as personal curiosity about Bitcoin in 2021 has evolved into a full-time profession helping clients buy and sell cryptocurrencies through secure and reliable transactions.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://wa.me/+2348102378249" className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Let's Chat
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-center mb-6 sm:mb-8">
                  <motion.div 
                    className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white font-bold text-2xl sm:text-4xl">C</span>
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">JDISOLUTIONS</h3>
                  <p className="text-accent font-medium text-base sm:text-lg">Crypto Exchange Specialist</p>
                  <p className="text-gray-300 text-xs sm:text-sm mt-2">Based in New York, USA</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center p-3 sm:p-4 bg-primary/30 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-accent mb-1 sm:mb-2 flex justify-center">{stat.icon}</div>
                      <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 bg-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              From curious beginner to professional exchange specialist - here's how I built my expertise in cryptocurrency transactions.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Mobile Timeline */}
            <div className="block md:hidden px-4">
              {journey.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start mb-8 last:mb-0"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center border-2 border-primary">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    {index < journey.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-secondary to-accent mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="bg-primary/50 p-4 rounded-xl border border-secondary/20">
                      <div className="text-accent font-bold mb-2">{item.year}</div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-accent rounded-full"></div>
              
              {journey.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-primary/50 p-6 rounded-xl border border-secondary/20">
                      <div className="text-accent font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center border-4 border-primary">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Values</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every interaction and transaction I handle for my clients.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <div className="text-accent">{value.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Why Work With Me?</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                I'm not just another crypto exchange. I'm your dedicated partner in secure cryptocurrency buying and selling transactions.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Personal Attention",
                    desc: "Direct access to me - no middlemen, no call centers, just personal service."
                  },
                  {
                    title: "Proven Track Record", 
                    desc: "Fast processing and competitive rates with transparent pricing structure."
                  },
                  {
                    title: "Risk Management",
                    desc: "Secure approach focused on protecting your funds during all transactions."
                  },
                  {
                    title: "24/7 Availability",
                    desc: "Crypto markets never sleep, and neither do I when it comes to your transactions."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Let's discuss your crypto needs and how I can help you buy or sell cryptocurrencies safely and securely.
                </p>
              </div>
              
              <div className="space-y-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://wa.me/+2348102378249" className="block w-full bg-green-600 hover:bg-green-700 text-center py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="block w-full bg-secondary hover:bg-secondary/80 text-center py-4 rounded-xl font-semibold transition-colors">
                    Schedule Free Consultation
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="block w-full border-2 border-accent text-accent hover:bg-accent hover:text-primary text-center py-4 rounded-xl font-semibold transition-colors">
                    Get Exchange Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;