// components/Cards/BlogCard.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  slug,
  date,
  author,
  image,
}) => {

  return (
    <Card className="max-w-screen-2xl max-h-screen-2xl overflow-hidden bg-gradient-to-r hover:shadow-heavy hover:border-foreground cursor-pointer">
    <div className="group relative bg-background/50 rounded-xl shadow-md hover:shadow-heavy">
      <div className="w-full h-96 relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t"/>
      </div>
      
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h2>
        
        <p className="text-lg mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <User size={20} />
            <span>{author}</span>
          </div>
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
          <Link href={`/blog/${slug}`} className="text-xl flex items-center">
            Read More
            <ArrowRight size={16} className="transition-transform group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
    </Card>
  );
};

export default BlogCard;