
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  seller: string;
  location: string;
  condition: string;
}

const ProductCard = ({ 
  title, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  seller, 
  location, 
  condition 
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <span className="text-6xl">{image}</span>
        </div>
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            {discount}% OFF
          </div>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur-sm hover:bg-white">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">({reviews})</span>
        </div>
        
        <h3 className="font-medium text-slate-800 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-slate-800">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-slate-500 line-through">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        <div className="text-xs text-slate-500 mb-3">
          <div className="flex justify-between">
            <span>By {seller}</span>
            <span>{condition}</span>
          </div>
          <div className="text-slate-400">{location}</div>
        </div>
        
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
