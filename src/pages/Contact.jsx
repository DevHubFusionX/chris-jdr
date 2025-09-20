import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Instant responses for urgent crypto needs",
      action: "Chat Now",
      link: "https://wa.me/+2348102378249",
      color: "bg-green-600 hover:bg-green-700",
      popular: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Call",
      description: "Schedule a free consultation call",
      action: "Book Call",
      link: "https://calendly.com/chrisjohnson",
      color: "bg-secondary hover:bg-secondary/80"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Detailed inquiries and documentation",
      action: "Send Email",
      link: "mailto:Nnamdichris502@gmail.com",
      color: "bg-accent/80 hover:bg-accent"
    }
  ];

  const services = [
    { name: "Buy Crypto", price: "Competitive rates", time: "Instant delivery" },
    { name: "Sell Crypto", price: "Best market rates", time: "Fast settlements" },
    { name: "Buy Gift Cards", price: "Competitive rates", time: "Instant processing" },
    { name: "Sell Gift Cards", price: "Best market rates", time: "Fast settlements" },
    { name: "Bitcoin Exchange", price: "Fair pricing", time: "Secure transactions" }
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
                💬 Let's Connect
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your crypto journey? Whether you want to buy or sell cryptocurrencies or gift cards, I'm here to help you with secure and reliable transactions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Choose Your Preferred Way to Connect</h2>
            <p className="text-xl text-gray-300">Fast responses and personalized service guaranteed</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 rounded-xl transition-all duration-300 relative overflow-hidden ${method.color}`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {method.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-white">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg">{method.title}</h3>
                    <p className="text-white/80 text-sm">{method.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-white font-semibold">{method.action}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-primary/50 p-8 rounded-xl border border-secondary/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="buy-crypto">Buy Cryptocurrency</option>
                    <option value="sell-crypto">Sell Cryptocurrency</option>
                    <option value="buy-giftcards">Buy Gift Cards</option>
                    <option value="sell-giftcards">Sell Gift Cards</option>
                    <option value="bitcoin-exchange">Bitcoin Exchange</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me what cryptocurrency or gift cards you want to buy or sell, the amount, and any questions you have..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/80 px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Services */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Chris Info Card */}
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-8 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-center mb-6">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-white font-bold text-2xl">C</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">JDISOLUTIONS</h3>
                  <p className="text-accent font-medium">Crypto Exchange Specialist</p>
                  <div className="flex justify-center items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-300 ml-2">(4.9/5 from 127+ transactions)</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Usually responds within 2 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>Based in Apapa, Nigeria (WAT)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>4+ years exchange experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>$800K+ in successful transactions</span>
                  </div>
                </div>
              </div>

              {/* Services & Pricing */}
              <div className="bg-primary/50 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold mb-6">Services & Pricing</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-between items-center p-3 bg-dark/30 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div>
                        <p className="font-medium">{service.name}</p>
                        <p className="text-sm text-gray-400">{service.time}</p>
                      </div>
                      <span className="text-accent font-medium">{service.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-dark/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Quick Questions?</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-300">
                    <strong className="text-white">Free consultation:</strong> First 30 minutes are complimentary
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Minimum amounts:</strong> No minimum for buy/sell transactions
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Payment methods:</strong> Bank transfer, PayPal, crypto
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Security:</strong> All transactions protected with escrow
                  </p>
                </div>
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
            Ready to Start Your Crypto Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don't wait - the crypto market moves fast. Get started today with secure cryptocurrency and gift cards buying and selling transactions.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a 
              href="mailto:Nnamdichris502@gmail.com"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Start WhatsApp Chat
            </motion.a>
            <motion.a 
              href="mailto:Nnamdichris502@gmail.com"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Schedule Free Call
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;