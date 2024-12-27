"use client";
import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

interface DatasetCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

function DatasetCard({
  title,
  description,
  link,
  imageUrl,
}: DatasetCardProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block"
    >
      <Card className="
          w-full 
          max-w-2xl 
          mx-auto 
          overflow-hidden 
          hover:shadow-heavy 
          transition-all 
          duration-300 
          ease-in-out 
          border 
          hover:border-primary/80 
          cursor-pointer
      ">
        <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
        <CardHeader className="p-4">
          <h2 className="text-xl font-bold tracking-tight line-clamp-2">
            {title}
          </h2>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm text-foreground/80 line-clamp-3">
            {description}
          </p>
        </CardContent>
      </Card>
      </a>
  );
}

export default DatasetCard;
