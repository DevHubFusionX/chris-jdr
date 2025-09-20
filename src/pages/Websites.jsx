import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Users, Calendar } from 'lucide-react';

const Websites = () => {
  const websites = [
    {
      name: "CryptoTracker Pro",
      description: "Advanced cryptocurrency portfolio tracking platform",
      traffic: "50K/month",
      revenue: "$8,500",
      price: "$125,000",
      age: "2 years",
      category: "Portfolio Tracker"
    },
    {
      name: "DeFi Analytics Hub",
      description: "Comprehensive DeFi protocol analytics and insights",
      traffic: "25K/month",
      revenue: "$4,200",
      price: "$75,000",
      age: "1.5 years",
      category: "Analytics"
    },
    {
      name: "NFT Marketplace",
      description: "Curated NFT marketplace for digital art collectors",
      traffic: "80K/month",
      revenue: "$12,000",
      price: "$200,000",
      age: "3 years",
      category: "Marketplace"
    },
    {
      name: "Crypto News Portal",
      description: "Daily cryptocurrency news and market analysis",
      traffic: "120K/month",
      revenue: "$15,000",
      price: "$300,000",
      age: "4 years",
      category: "News & Media"
    },
    {
      name: "Trading Bot Platform",
      description: "Automated cryptocurrency trading bot service",
      traffic: "30K/month",
      revenue: "$18,000",
      price: "$250,000",
      age: "2.5 years",
      category: "Trading Tools"
    },
    {
      name: "Yield Farming Tracker",
      description: "Track and optimize DeFi yield farming opportunities",
      traffic: "40K/month",
      revenue: "$6,800",
      price: "$95,000",
      age: "1 year",
      category: "DeFi Tools"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Websites <span className="gradient-text">for Sale</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover profitable crypto websites ready for acquisition. All deals handled securely with escrow for peace of mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {websites.map((website, index) => (
            <div key={index} className="bg-primary/50 p-6 rounded-xl border border-secondary/20 card-hover">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">{website.name}</h3>
                  <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                    {website.category}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">{website.price}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{website.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="w-4 h-4 mr-2 text-accent" />
                  <span>{website.traffic}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <DollarSign className="w-4 h-4 mr-2 text-accent" />
                  <span>{website.revenue}/month</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2 text-accent" />
                  <span>{website.age} old</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-4 h-4 mr-2 text-accent" />
                  <span>Verified</span>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="block w-full bg-secondary hover:bg-secondary/80 text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Inquire Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-dark/50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Don't See What You're Looking For?</h2>
          <p className="text-gray-300 mb-6">
            We have access to exclusive off-market deals and can help you find the perfect crypto website for your needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-accent hover:bg-accent/80 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us for Custom Requests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Websites;