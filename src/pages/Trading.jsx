import { Link } from 'react-router-dom';
import { TrendingUp, Target, Users, BarChart3, MessageCircle, CheckCircle, Star, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Trading = () => {
  const services = [
    {
      title: "Portfolio Management",
      description: "Let me handle your crypto portfolio with proven strategies and risk management",
      features: ["Professional portfolio optimization", "24/7 monitoring", "Monthly performance reports", "Risk assessment"],
      icon: <BarChart3 className="w-8 h-8" />,
      price: "Starting at $500/month"
    },
    {
      title: "Trading Signals",
      description: "Receive real-time trading signals based on technical analysis and market insights",
      features: ["Daily trading signals", "Entry/exit points", "Risk/reward ratios", "Market analysis"],
      icon: <Target className="w-8 h-8" />,
      price: "Starting at $200/month"
    },
    {
      title: "1-on-1 Coaching",
      description: "Personal trading education and strategy development sessions",
      features: ["Custom trading strategies", "Personal mentoring", "Market education", "Goal-oriented planning"],
      icon: <Users className="w-8 h-8" />,
      price: "Starting at $150/hour"
    }
  ];

  const results = [
    { metric: "127%", label: "Average ROI", period: "Last 12 months" },
    { metric: "89%", label: "Win Rate", period: "Successful trades" },
    { metric: "$2.1M", label: "Total Volume", period: "Client portfolios" },
    { metric: "24/7", label: "Support", period: "Always available" }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Crypto Investor",
      text: "Chris helped me turn my $10K into $35K in 8 months. His signals are incredibly accurate.",
      rating: 5
    },
    {
      name: "Mike R.",
      role: "Day Trader",
      text: "The portfolio management service is outstanding. I've seen consistent 15%+ monthly returns.",
      rating: 5
    },
    {
      name: "Lisa K.",
      role: "New Trader",
      text: "The 1-on-1 coaching transformed my trading. I went from losing money to profitable in 3 months.",
      rating: 5
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
      <section className="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007BFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div className="mb-6" variants={fadeInUp}>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
                  🚀 Professional Trading Services
                </span>
              </motion.div>
              
              <motion.h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" variants={fadeInUp}>
                Maximize Your <span className="gradient-text">Crypto Returns</span> with Expert Trading
              </motion.h1>
              
              <motion.p className="text-xl text-gray-300 mb-8 leading-relaxed" variants={fadeInUp}>
                Join successful traders who trust my expertise. Get professional portfolio management, accurate trading signals, and personalized coaching to achieve consistent profits.
              </motion.p>
              
              <motion.div className="flex flex-col sm:flex-row gap-4 mb-8" variants={fadeInUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="bg-secondary hover:bg-secondary/80 px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                    Start Trading Today
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://wa.me/+2348102378249" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Free Consultation
                  </a>
                </motion.div>
              </motion.div>

              <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-6" variants={staggerContainer} initial="initial" animate="animate">
                {results.map((result, index) => (
                  <motion.div key={index} className="text-center" variants={fadeInUp}>
                    <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">{result.metric}</div>
                    <div className="text-sm text-gray-400">{result.label}</div>
                    <div className="text-xs text-gray-500">{result.period}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-center mb-6">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <TrendingUp className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">JDISOLUTIONS</h3>
                  <p className="text-accent font-medium">Professional Crypto Trader & Analyst</p>
                </div>
                
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>3+ Years Professional Trading</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>$2.1M+ in Client Profits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>89% Win Rate on Signals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>24/7 Support & Monitoring</span>
                  </div>
                </div>

                <div className="text-center">
                  <motion.a 
                    href="https://wa.me/+2348102378249" 
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">My Trading Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service that fits your trading goals and experience level. All services include my personal attention and proven strategies.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-primary/50 p-8 rounded-xl border border-secondary/20 text-center relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-accent">{service.icon}</div>
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <p className="text-accent font-bold text-lg mb-4">{service.price}</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/contact" className="block w-full bg-secondary hover:bg-secondary/80 py-3 rounded-lg font-semibold transition-colors">
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">What My Clients Say</h2>
            <p className="text-xl text-gray-300">Real results from real traders who trust my expertise</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-primary/50 p-6 rounded-xl border border-secondary/20"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-accent text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
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
            Ready to Transform Your Trading?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join successful traders who have achieved consistent profits with my proven strategies. Start your journey to financial freedom today.
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
                Schedule Free Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://wa.me/+2348102378249" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Trading;