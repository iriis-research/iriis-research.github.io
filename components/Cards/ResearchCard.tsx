// components/Cards/ResearchCard.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ResearchCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  description,
  slug,
  date,
  author,
  image,
}) => {

  return (
    <Card className="w-full overflow-hidden bg-gradient-to-r hover:shadow-heavy hover:border-foreground cursor-pointer">
      <div className="group relative bg-background/50 rounded-xl shadow-md hover:shadow-heavy flex flex-row">
        <div className="flex-1 p-6">
          <h2 className="lg:text-3xl md:text-2xl font-bold mb-3 lg:line-clamp-2 md:line-clamp-3 sm-line-clamp-3 group-hover:text-primary transition-colors">
            {title}
          </h2>
          
          <p className="lg:text-lg md:text-lg mb-4 line-clamp-3">
            {description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 lg:pb-36 md:pb-32 sm:pb-16">
            <div className="flex items-center gap-1">
              <User size={20} />
              <span>{author}</span>
            </div>
            <span></span>
            <div className="flex items-center gap-1">
              <Calendar size={20} />
              <span>
                {new Date(date).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="flex border-foreground border-solid border-2"
            size='lg'
            asChild
          >
            <Link href={`/research/${slug}`} className="text-xl flex items-center">
              Read More
              <ArrowRight size={16} className="transition-transform group-hover/button:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="w-[400px] relative overflow-hidden rounded-r-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t"/>
        </div>
      </div>
    </Card>
  );
};

export default ResearchCard;