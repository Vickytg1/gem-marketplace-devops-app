
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

const Index = () => {
  const categories = [
    {
      title: 'Gold Jewelry',
      description: 'Buy and sell exquisite gold pieces from vintage classics to modern designs',
      image: '🏆',
      itemCount: 2500,
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Silver Jewelry',
      description: 'Discover sterling silver and contemporary silver jewelry collections',
      image: '✨',
      itemCount: 1800,
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Diamond Jewelry',
      description: 'Trade certified diamonds and stunning diamond-studded pieces',
      image: '💎',
      itemCount: 950,
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Gemstones',
      description: 'Buy and sell precious and semi-precious gemstone jewelry',
      image: '🌈',
      itemCount: 1200,
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Platinum Jewelry',
      description: 'Rare and elegant platinum pieces for collectors and sellers',
      image: '🤍',
      itemCount: 650,
      gradient: 'from-slate-400 to-slate-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Buy & Sell by Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our marketplace of authentic pre-owned luxury jewelry or list your own treasures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Seller Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Sell on GBI?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Turn your jewelry into cash with India's most trusted marketplace
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Best Market Prices</h3>
              <p className="text-slate-600">Get competitive prices for your jewelry with our transparent pricing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Easy Listing Process</h3>
              <p className="text-slate-600">List your jewelry in minutes with our simple upload process</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Trusted Community</h3>
              <p className="text-slate-600">Connect with verified buyers and sellers across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-yellow-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Choose GBI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Authentication Guaranteed</h3>
                <p className="text-slate-300">Every piece is verified by certified gemologists</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold mb-3">Secure Delivery</h3>
                <p className="text-slate-300">Insured shipping with tracking and signature confirmation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">↩️</div>
                <h3 className="text-xl font-semibold mb-3">30-Day Returns</h3>
                <p className="text-slate-300">Full refund if you're not completely satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
