
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">💎</span>
            </div>
            <span className="text-xl font-bold text-slate-800">JewelMarket</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/gold" className="text-slate-600 hover:text-yellow-600 transition-colors">Gold</Link>
            <Link to="/silver" className="text-slate-600 hover:text-yellow-600 transition-colors">Silver</Link>
            <Link to="/diamond" className="text-slate-600 hover:text-yellow-600 transition-colors">Diamond</Link>
            <Link to="/gemstones" className="text-slate-600 hover:text-yellow-600 transition-colors">Gemstones</Link>
            <Link to="/platinum" className="text-slate-600 hover:text-yellow-600 transition-colors">Platinum</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Search jewelry..." 
                className="pl-10 border-slate-200 focus:border-yellow-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Search jewelry..." 
                  className="pl-10 border-slate-200 focus:border-yellow-500"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <Link to="/gold" className="text-slate-600 hover:text-yellow-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Gold</Link>
                <Link to="/silver" className="text-slate-600 hover:text-yellow-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Silver</Link>
                <Link to="/diamond" className="text-slate-600 hover:text-yellow-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Diamond</Link>
                <Link to="/gemstones" className="text-slate-600 hover:text-yellow-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Gemstones</Link>
                <Link to="/platinum" className="text-slate-600 hover:text-yellow-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Platinum</Link>
              </nav>
              <Button variant="outline">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
