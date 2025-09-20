import { Calendar, User, ArrowRight, TrendingUp, Shield, Target, BookOpen, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: "5 Essential Crypto Trading Strategies for 2024",
      excerpt: "Discover the most effective trading strategies that have helped my clients achieve consistent profits in the volatile crypto market.",
      date: "December 15, 2024",
      author: "Chris Johnson",
      category: "Trading Strategies",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "How to Buy Your First Bitcoin Safely",
      excerpt: "A complete beginner's guide to purchasing Bitcoin securely, avoiding common pitfalls and protecting your investment.",
      date: "December 10, 2024",
      author: "Chris Johnson",
      category: "Beginner Guide",
      readTime: "6 min read"
    },
    {
      title: "Market Analysis: Why Altcoins Are Surging",
      excerpt: "Breaking down the current altcoin rally and identifying which cryptocurrencies have the strongest fundamentals.",
      date: "December 5, 2024",
      author: "Chris Johnson",
      category: "Market Analysis",
      readTime: "10 min read"
    },
    {
      title: "Risk Management in Crypto Trading",
      excerpt: "Learn the risk management techniques that protect your capital while maximizing potential returns in crypto trading.",
      date: "November 28, 2024",
      author: "Chris Johnson",
      category: "Risk Management",
      readTime: "12 min read"
    },
    {
      title: "DeFi vs Traditional Finance: The Future",
      excerpt: "Comparing decentralized finance with traditional banking and what this means for the future of money.",
      date: "November 20, 2024",
      author: "Chris Johnson",
      category: "DeFi",
      readTime: "9 min read"
    },
    {
      title: "Crypto Tax Guide: What You Need to Know",
      excerpt: "Essential tax considerations for crypto traders and investors to stay compliant and optimize your tax strategy.",
      date: "November 15, 2024",
      author: "Chris Johnson",
      category: "Tax & Legal",
      readTime: "15 min read"
    }
  ];

  const categories = ["All", "Trading Strategies", "Market Analysis", "Beginner Guide", "Risk Management", "DeFi", "Tax & Legal"];

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
                📚 Crypto Insights
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trading <span className="gradient-text">Insights</span> & Tips
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights on crypto trading, market analysis, and strategies to help you make informed decisions and maximize your profits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? 'bg-secondary text-white shadow-lg' 
                    : 'bg-primary/50 text-gray-300 hover:bg-secondary/20 hover:text-white border border-secondary/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-secondary/20 to-accent/20 p-8 rounded-2xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  🔥 Featured Post
                </span>
                <h2 className="text-3xl font-bold mt-4 mb-4">{posts[0].title}</h2>
                <p className="text-gray-300 mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {posts[0].author}
                  </div>
                  <span>{posts[0].readTime}</span>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
              <motion.div 
                className="bg-primary/50 h-64 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <p>Featured Article</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-300">Stay updated with the latest crypto trading insights and market analysis</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {posts.slice(1).map((post, index) => (
              <motion.article 
                key={index} 
                className="bg-primary/50 rounded-xl overflow-hidden border border-secondary/20"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-dark/50 h-48 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center text-gray-400">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      {post.category === 'Trading Strategies' && <Target className="w-6 h-6 text-accent" />}
                      {post.category === 'Market Analysis' && <TrendingUp className="w-6 h-6 text-accent" />}
                      {post.category === 'Beginner Guide' && <BookOpen className="w-6 h-6 text-accent" />}
                      {post.category === 'Risk Management' && <Shield className="w-6 h-6 text-accent" />}
                      {(post.category === 'DeFi' || post.category === 'Tax & Legal') && <Calendar className="w-6 h-6 text-accent" />}
                    </div>
                    <p className="text-sm">Article Image</p>
                  </div>
                </motion.div>
                <div className="p-6">
                  <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3 hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-secondary/10 to-accent/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get Trading Insights Delivered
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Stay ahead of the market with weekly insights, trading tips, and exclusive analysis delivered straight to your inbox.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-primary border border-secondary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
            />
            <motion.button 
              className="bg-accent hover:bg-accent/80 text-primary px-6 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="bg-secondary hover:bg-secondary/80 px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                Get Personal Trading Advice
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://wa.me/1234567890" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat with Chris
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;