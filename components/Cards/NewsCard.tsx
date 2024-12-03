// app/components/NewsCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NewsCardProps {
  id: string;
  title: string;
  intro: string;
  author: string;
  date: string;
  image: string;
}

export default function NewsCard({
  id,
  title,
  intro,
  author,
  date,
  image,
}: NewsCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/${id}`);
  };

  return (
    <div className="pb-16">
    <div
      onClick={handleClick}
      className="flex rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto mb-6 group bg-background/50 border-foreground cursor-pointer hover:shadow-heavy transition-shadow duration-200"
    >
      {/* Left Side: Text content */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold  mb-2">
          <Link href={`/news/${id}`}>{title}</Link>
        </h2>
        <p className=" mb-4">{intro}</p>
        <div className="text-sm ">
          <span>{author}</span> | Published Date : <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="relative w-48 h-48">
        <Image
          src={image}
          alt={title}
          fill // replaces layout="fill"
          style={{ objectFit: "cover" }} // replaces objectFit="cover"
          className="rounded-r-lg"
        />
      </div>
    </div>
    </div>
  );
}
