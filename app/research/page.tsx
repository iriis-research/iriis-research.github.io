// app/research/page.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ResearchCard from '@/components/Cards/ResearchCard';

export const metadata={
  title: "Research - IRIIS",
  description: "Research Papers and topics"
}
interface ResearchPost {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image: string;
}

// Directory path for your content files
const contentDirectory = path.join(process.cwd(), 'app/content/research-content');

const getResearchPosts = (): ResearchPost[] => {
  // Get all files from the content directory
  const files = fs.readdirSync(contentDirectory);
  
  // Filter for .md and .mdx files
  const validFiles = files.filter(file => /\.(md|mdx)$/.test(file));
  
  return validFiles.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    
    // Generate slug from filename if not provided in frontmatter
    const slug = data.slug || filename.replace(/\.(md|mdx)$/, '');

    return {
      title: data.title,
      description: data.description,
      slug,
      date: data.date,
      author: data.author,
      image: data.image,
    } as ResearchPost;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export default function Research() {
  const researchPosts = getResearchPosts();

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-4 text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl pt-24">
            Research
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto pb-8">
            Explore our latest research findings.
          </p>
        </div>
  
        <div className="max-w-6xl mx-auto space-y-8"> {/* Changed this div */}
          {researchPosts.map((post, index) => (
            <ResearchCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

