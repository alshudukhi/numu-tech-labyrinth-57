
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from './AnimatedCard';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  features?: string[];
}

const ProductCard = ({ title, description, image, className, features = [] }: ProductCardProps) => {
  return (
    <AnimatedCard 
      className={cn(
        'bg-white rounded-xl overflow-hidden h-full',
        'shadow-subtle border border-gray-100',
        className
      )}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        {features.length > 0 && (
          <div className="mt-4 space-y-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-numutech-blue text-xs mt-1.5">•</span>
                <p className="text-sm text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        )}
        
        <button className="mt-4 inline-flex items-center text-numutech-blue hover:text-numutech-lightBlue transition-colors duration-300">
          <span className="mr-2">Learn more</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </AnimatedCard>
  );
};

export default ProductCard;
