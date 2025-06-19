import React, { useState } from 'react';
import { Mail, ArrowRight, Bell } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-4 w-20 h-20 mx-auto mb-8">
          <Bell className="h-12 w-12 text-black" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stay Updated with
          <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            RishArt
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get exclusive access to the latest Algerian entertainment news, movie reviews, 
          celebrity interviews, and behind-the-scenes content delivered to your inbox.
        </p>
        
        {isSubscribed ? (
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg inline-flex items-center space-x-3 font-bold text-lg">
            <span>✓</span>
            <span>Welcome to the RishArt community!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
           
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group hover:scale-105"
            >
              <span>Subscribe</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;