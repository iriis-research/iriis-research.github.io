// components/Cards/BlogCard.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
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
    <Card className="w-full max-w-screen-lg mx-auto overflow-hidden bg-gradient-to-r hover:shadow-heavy hover:border-foreground cursor-pointer">
      <div className="group relative bg-background/50 rounded-xl shadow-md hover:shadow-heavy flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden rounded-t-xl md:rounded-l-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t" />
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg mb-4 line-clamp-3">{description}</p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <User size={20} />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={20} />
              <span>
                {new Date(date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Read More Button */}
          <Button
            variant="outline"
            className="flex border-foreground/40 hover:border-foreground border-solid border-2 mt-4"
            size="lg"
            asChild
          >
            <Link
              href={`/blog/${slug}`}
              className="text-base md:text-lg flex items-center"
            >
              Read More
              <ArrowRight
                size={16}
                className="transition-transform group-hover/button:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
