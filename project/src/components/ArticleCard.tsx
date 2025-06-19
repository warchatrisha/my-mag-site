import React from 'react';
import { Clock, User, Heart, MessageCircle, Play, Star } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  imageUrl: string;
  likes: number;
  comments: number;
  publishedAt: string;
  rating?: number;
}

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'default' }) => {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  return (
    <article className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
      isFeatured ? 'md:col-span-2 md:row-span-2' : ''
    }`}>
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-800 hover:border-orange-500/50">
        {/* Image */}
        <div className={`relative overflow-hidden ${
          isCompact ? 'h-48' : isFeatured ? 'h-80' : 'h-64'
        }`}>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
              {article.category}
            </span>
          </div>

          {/* Play Button for Video Content */}
          {(article.category === 'Cinema' || article.category === 'TV Shows') && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          )}

          {/* Rating */}
          {article.rating && (
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-white text-sm font-semibold">{article.rating}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${isCompact ? 'p-4' : ''}`}>
          <h3 className={`font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 ${
            isFeatured ? 'text-2xl' : isCompact ? 'text-lg' : 'text-xl'
          }`}>
            {article.title}
          </h3>
          
          {!isCompact && (
            <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
              {article.excerpt}
            </p>
          )}
          
          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                <Heart className="h-4 w-4" />
                <span>{article.likes}</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>{article.comments}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;