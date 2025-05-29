
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  itemCount: number;
  gradient: string;
}

const CategoryCard = ({ title, description, image, itemCount, gradient }: CategoryCardProps) => {
  // Extract category name for routing
  const categoryPath = title.toLowerCase().replace(' jewelry', '');
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardHeader className={`bg-gradient-to-br ${gradient} text-white relative`}>
        <div className="flex items-center justify-between">
          <div className="text-4xl">{image}</div>
          <div className="text-right">
            <div className="text-sm opacity-90">{itemCount}+ items</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
        <p className="text-slate-600 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex space-x-2">
          <Link to={`/${categoryPath}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full group-hover:border-yellow-500 group-hover:text-yellow-600 transition-colors">
              Browse
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-white">
            Sell
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
