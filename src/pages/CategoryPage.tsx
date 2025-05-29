
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Filter, SortAsc, Plus } from 'lucide-react';

interface CategoryPageProps {
  category: string;
  categoryColor: string;
  categoryEmoji: string;
  description: string;
}

const CategoryPage = ({ category, categoryColor, categoryEmoji, description }: CategoryPageProps) => {
  // Sample products for each category
  const products = [
    {
      id: '1',
      title: `Vintage ${category} Necklace with Emerald Pendant`,
      price: 45000,
      originalPrice: 52000,
      rating: 4.8,
      reviews: 23,
      image: categoryEmoji,
      seller: 'LuxuryVintage',
      location: 'Mumbai',
      condition: 'Excellent'
    },
    {
      id: '2',
      title: `Sterling ${category} Bracelet with Sapphire`,
      price: 12000,
      originalPrice: 15000,
      rating: 4.6,
      reviews: 41,
      image: categoryEmoji,
      seller: 'SilverCraft',
      location: 'Delhi',
      condition: 'Very Good'
    },
    {
      id: '3',
      title: `${category} Solitaire Ring 1.2ct`,
      price: 125000,
      rating: 5.0,
      reviews: 8,
      image: categoryEmoji,
      seller: 'DiamondHouse',
      location: 'Bangalore',
      condition: 'Like New'
    },
    {
      id: '4',
      title: `${category} Wedding Band Set`,
      price: 85000,
      originalPrice: 95000,
      rating: 4.9,
      reviews: 15,
      image: categoryEmoji,
      seller: 'PlatinumElite',
      location: 'Chennai',
      condition: 'Excellent'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Category Hero Section */}
      <section className={`bg-gradient-to-br from-${categoryColor}-50 via-yellow-50 to-slate-50 py-16`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-4">{categoryEmoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {category} Jewelry
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4">
                Browse {category}
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4">
                <Plus className="w-5 h-5 mr-2" />
                Sell {category}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <SortAsc className="w-4 h-4 mr-2" />
                Sort by Price
              </Button>
            </div>
            <p className="text-slate-600">Showing {products.length} results</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
