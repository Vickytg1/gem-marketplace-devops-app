
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: '1',
      title: 'Vintage Gold Necklace with Emerald Pendant',
      price: 45000,
      originalPrice: 52000,
      rating: 4.8,
      reviews: 23,
      image: '💎',
      seller: 'LuxuryVintage',
      location: 'Mumbai',
      condition: 'Excellent'
    },
    {
      id: '2',
      title: 'Sterling Silver Bracelet with Sapphire',
      price: 12000,
      originalPrice: 15000,
      rating: 4.6,
      reviews: 41,
      image: '💍',
      seller: 'SilverCraft',
      location: 'Delhi',
      condition: 'Very Good'
    },
    {
      id: '3',
      title: 'Diamond Solitaire Ring 1.2ct',
      price: 125000,
      rating: 5.0,
      reviews: 8,
      image: '💎',
      seller: 'DiamondHouse',
      location: 'Bangalore',
      condition: 'Like New'
    },
    {
      id: '4',
      title: 'Platinum Wedding Band Set',
      price: 85000,
      originalPrice: 95000,
      rating: 4.9,
      reviews: 15,
      image: '💍',
      seller: 'PlatinumElite',
      location: 'Chennai',
      condition: 'Excellent'
    },
    {
      id: '5',
      title: 'Ruby and Gold Earrings',
      price: 35000,
      rating: 4.7,
      reviews: 28,
      image: '💎',
      seller: 'GemCollection',
      location: 'Hyderabad',
      condition: 'Very Good'
    },
    {
      id: '6',
      title: 'Antique Silver Bangles (Set of 4)',
      price: 18000,
      originalPrice: 22000,
      rating: 4.5,
      reviews: 19,
      image: '💍',
      seller: 'Heritage',
      location: 'Jaipur',
      condition: 'Good'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Featured Marketplace
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover amazing jewelry from trusted sellers or start selling your own pieces today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3">
            View All Products
          </Button>
          <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-3">
            <Plus className="w-4 h-4 mr-2" />
            Start Selling
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
