import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ArticleCard from './components/ArticleCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SubmissionForm from './components/SubmissionForm';
import { articles } from './data/articles';
import { PlusCircle, Film } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isSubmissionFormOpen, setIsSubmissionFormOpen] = useState(false);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') {
      return articles;
    }
    return articles.filter(article => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black">
      <Header 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      <HeroSection />
      
      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Entertainment
            <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the latest in Algerian cinema, television, and entertainment culture. 
            From exclusive interviews to in-depth reviews and behind-the-scenes content.
          </p>
        </div>

        {/* Submit Article CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-16 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-full">
                <Film className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Share Your Story</h3>
                <p className="text-gray-400">
                  Have an interesting story about Algerian entertainment? Submit your article and join our community of writers.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsSubmissionFormOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <PlusCircle className="h-6 w-6" />
              <span>Submit Article</span>
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
              <Film className="h-16 w-16 text-gray-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                No Articles Yet
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                {activeCategory === 'All' 
                  ? "Be the first to share your story with the RishArt community!"
                  : `No articles found in the ${activeCategory} category yet.`
                }
              </p>
              <button
                onClick={() => setIsSubmissionFormOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto hover:scale-105"
              >
                <PlusCircle className="h-6 w-6" />
                <span>Submit First Article</span>
              </button>
            </div>
          </div>
        )}
      </section>

      <Newsletter />
      <Footer />
      
      {/* Submission Form Modal */}
      <SubmissionForm 
        isOpen={isSubmissionFormOpen}
        onClose={() => setIsSubmissionFormOpen(false)}
      />
    </div>
  );
}

export default App;