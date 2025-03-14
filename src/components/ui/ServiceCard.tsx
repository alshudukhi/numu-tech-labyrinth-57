
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from './AnimatedCard';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <AnimatedCard 
      className={cn(
        'bg-white rounded-xl border border-gray-100 p-6 shadow-subtle overflow-hidden',
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="bg-numutech-gray bg-opacity-50 p-3 w-12 h-12 rounded-lg flex items-center justify-center text-numutech-blue mb-5">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </AnimatedCard>
  );
};

export default ServiceCard;
