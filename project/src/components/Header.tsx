import React, { useState } from 'react';
import { Search, Menu, X, Film } from 'lucide-react';

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeCategory, onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    'All',
    'Cinema',
    'TV Shows',
    'Actors',
    'Directors',
    'Reviews',
    'Interviews',
    'Behind the Scenes'
  ];

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-lg">
              <Film className="h-8 w-8 text-black" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                RishArt
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Algerian Entertainment Magazine</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black'
                    : 'text-white hover:text-orange-400 hover:bg-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              <Search className="h-5 w-5 text-white" />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies, shows, actors..."
                className="w-full px-4 py-3 pl-12 pr-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                autoFocus
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6">
            <nav className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onCategoryChange(category);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;