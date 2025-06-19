import React from 'react';
import { Film, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-lg">
                <Film className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  RishArt
                </h3>
                <p className="text-sm text-gray-400">Algerian Entertainment Magazine</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Your premier destination for Algerian cinema, television, and entertainment culture. 
              Discover the stories behind the screen and the artists who bring them to life.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="bg-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 p-3 rounded-full transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Explore</h4>
            <ul className="space-y-3">
              {[
                'Latest Movies',
                'TV Shows',
                'Celebrity News',
                'Movie Reviews',
                'Interviews',
                'Behind the Scenes',
                'Film Festivals',
                'Industry News'
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:bg-clip-text transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'warshatelrishaofficial@gmail.com' },
                { icon: Phone, text: '+213 776775327' },
                { icon: MapPin, text: 'Algiers, Algeria' }
              ].map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <Icon className="h-5 w-5 text-orange-500" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 RishArt Magazine. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'About Us', 'Advertise'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;