
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Buy & Sell
            <span className="text-yellow-600 block">Pre-Owned Jewelry</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            India's trusted marketplace for authentic pre-owned luxury jewelry. 
            Discover rare pieces or turn your treasures into cash.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                placeholder="Search for gold, diamond, silver jewelry..." 
                className="pl-12 pr-4 py-4 text-lg border-2 border-slate-200 focus:border-yellow-500 rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white px-6">
                Search
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/gold">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg w-full sm:w-auto">
                <Search className="w-5 h-5 mr-2" />
                Browse Jewelry
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4 text-lg w-full sm:w-auto">
              <Plus className="w-5 h-5 mr-2" />
              Sell Your Jewelry
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-slate-600">
              <Shield className="w-6 h-6 text-yellow-500" />
              <span className="font-medium">100% Authenticated</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-slate-600">
              <Truck className="w-6 h-6 text-yellow-500" />
              <span className="font-medium">Free Secure Shipping</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-slate-600">
              <RotateCcw className="w-6 h-6 text-yellow-500" />
              <span className="font-medium">30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
