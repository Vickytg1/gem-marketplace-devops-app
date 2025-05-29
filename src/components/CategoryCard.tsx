
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  itemCount: number;
  gradient: string;
}

const CategoryCard = ({ title, description, image, itemCount, gradient }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        <div className="absolute top-4 left-4 text-white">
          <span className="text-4xl">{image}</span>
        </div>
        <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
          {itemCount}+ items
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
