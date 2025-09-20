import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ChevronDown } from 'lucide-react';

const QuickOrderModal = ({ isOpen, onClose, serviceType }) => {
  const [formData, setFormData] = useState({
    amount: '',
    cryptoType: 'Bitcoin'
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hi JDISOLUTIONS,

I want to ${serviceType.toUpperCase()} cryptocurrency.

Details:
• Service: ${serviceType} ${formData.cryptoType}
• Amount: $${formData.amount}

Please send me the current rates and payment instructions.

Thank you!`;

    const whatsappUrl = `https://wa.me/+2348102378249?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const cryptoOptions = [
    { value: 'Bitcoin', label: 'Bitcoin', symbol: '₿' },
    { value: 'Ethereum', label: 'Ethereum', symbol: 'Ξ' },
    { value: 'USDT', label: 'USDT', symbol: '₮' },
    { value: 'USDC', label: 'USDC', symbol: '$' },
    { value: 'Litecoin', label: 'Litecoin', symbol: 'Ł' },
    { value: 'Dogecoin', label: 'Dogecoin', symbol: 'Ð' },
    { value: 'Other', label: 'Other', symbol: '?' }
  ];

  const selectedCrypto = cryptoOptions.find(option => option.value === formData.cryptoType);

  const handleCryptoSelect = (crypto) => {
    setFormData({ ...formData, cryptoType: crypto.value });
    setDropdownOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-primary border border-secondary/20 rounded-2xl p-6 w-full max-w-md shadow-2xl">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">
                  {serviceType === 'buy' ? 'Buy' : 'Sell'} Crypto
                </h2>
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">


                <div className="relative">
                  <label className="block text-sm font-medium mb-2">Cryptocurrency *</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg text-white focus:outline-none focus:border-accent transition-colors flex items-center justify-between hover:border-accent/50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-bold text-lg">{selectedCrypto?.symbol}</span>
                        <span>{selectedCrypto?.label}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 right-0 mt-1 bg-primary/95 backdrop-blur-md border border-secondary/30 rounded-lg shadow-2xl z-50 max-h-48 overflow-y-auto"
                        >
                          {cryptoOptions.map((crypto, index) => (
                            <motion.button
                              key={crypto.value}
                              type="button"
                              onClick={() => handleCryptoSelect(crypto)}
                              className="w-full px-4 py-3 text-left hover:bg-secondary/20 transition-colors flex items-center gap-3 border-b border-secondary/10 last:border-b-0"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.1, delay: index * 0.05 }}
                              whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                            >
                              <span className="text-accent font-bold text-lg w-6">{crypto.symbol}</span>
                              <span className="text-white">{crypto.label}</span>
                              {formData.cryptoType === crypto.value && (
                                <span className="ml-auto text-accent text-sm">✓</span>
                              )}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Amount (USD) *</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                    placeholder="100"
                    min="1"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Continue on WhatsApp
                </motion.button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-4">
                This will open WhatsApp with your details pre-filled
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickOrderModal;