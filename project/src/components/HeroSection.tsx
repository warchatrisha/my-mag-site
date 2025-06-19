import React from 'react';
import { Play, Star, Calendar, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-96 md:h-[700px] overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="flex items-center space-x-3 mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              FEATURED
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
              Cinema
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover
            <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Algerian Cinema
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-2xl">
            Explore the rich world of Algerian entertainment - from groundbreaking films 
            to captivating TV series and the talented artists who bring stories to life.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 text-gray-300">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Latest Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-orange-500" />
              <span>Upcoming Releases</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-yellow-500" />
              <span>Artist Interviews</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-2xl hover:scale-105">
              <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Explore Content</span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Submit Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;