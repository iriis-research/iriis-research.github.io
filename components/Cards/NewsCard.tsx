"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DOMPurify from 'dompurify'; // Recommended for HTML sanitization

interface ContentBlock {
  heading: string;
  body: string;
}

interface NewsCardProps {
  id: string;
  title: string;
  intro: string;
  author: string;
  date: string;
  image: string;
  content?: ContentBlock[];
}

export default function NewsCard({
  id,
  title,
  intro,
  author,
  date,
  image,
  content,
}: NewsCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/${id}`);
  };

  // Sanitize HTML content
  const sanitizeHTML = (html: string) => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      return DOMPurify.sanitize(html);
    }
    return html;
  };

  return (
    <div className="pb-8 sm:pb-12 md:pb-16">
      <div
        onClick={handleClick}
        className="
          flex 
          flex-col 
          md:flex-row 
          rounded-lg 
          shadow-md 
          overflow-hidden 
          w-full 
          max-w-4xl 
          mx-auto 
          mb-6 
          group 
          bg-background 
          border 
          border-foreground/20 
          hover:border-foreground/40 
          cursor-pointer 
          hover:shadow-lg 
          transition-all 
          duration-300
        "
      >
        {/* Text content */}
        <div className="
          flex-1 
          p-4 
          sm:p-6 
          flex 
          flex-col 
          justify-between
        ">
          <div>
            <h2 className="
              text-lg 
              sm:text-xl 
              md:text-2xl 
              font-bold 
              mb-2 
              sm:mb-3 
              line-clamp-2
            ">
              <Link 
                href={`/news/${id}`}
                className="hover:text-primary transition-colors"
              >
                {title}
              </Link>
            </h2>
            <p className="
              text-sm 
              sm:text-base 
              text-foreground/80 
              mb-3 
              sm:mb-4 
              line-clamp-3
            ">
              {intro}
            </p>
          </div>
          
          <div className="
            text-xs 
            sm:text-sm 
            text-foreground/60 
            flex 
            flex-col 
            sm:flex-row 
            sm:items-center 
            gap-1 
            sm:gap-2
          ">
            <span className="font-medium">{author}</span>
            <span className="hidden sm:inline">|</span>
            <span>Published: {new Date(date).toLocaleDateString()}</span>
          </div>

          {/* Render additional content if exists */}
          {content && content.map((block, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold text-sm sm:text-base">
                {block.heading}
              </h3>
              <div 
                className="text-xs sm:text-sm text-primary hover:underline"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHTML(block.body)
                }}
              />
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="
          relative 
          w-full 
          md:w-48 
          h-52 
          sm:h-56 
          md:h-52 
          flex-shrink-0
        ">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="
              object-cover 
              md:rounded-r-lg 
              transition-transform 
              group-hover:scale-105 
              duration-300
            "
          />
        </div>
      </div>
    </div>
  );
}