import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from 'react';

interface ArticleContent {
  heading: string;
  body: string;
}

interface Article {
  title: string;
  intro: string;
  content: ArticleContent[];
  date?: string;
  author?: string;
  image?: string;
  description?: string;
}

// Function to fetch a specific article by its ID
function getArticleById(id: string) {
  const filePath = path.join(process.cwd(), 'app/content/news-data', `${id}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Generate metadata for each news article
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = getArticleById(params.id);

  if (!article) {
    return {
      title: 'Article Not Found | IRIIS News',
    };
  }

  return {
    title: `${article.title} | IRIIS News`,
    description: article.description || article.intro,
    authors: article.author ? [{ name: article.author }] : undefined,
  };
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id);

  if (!article) {
    notFound(); // Show 404 page if article is not found
    return null;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-5xl pt-64 pb-6">
        {article.title}
      </h1>
      <section className="mb-12">
        <p className="text-2xl mt-6">{article.intro}</p>

        {article.content.map((topic: { heading: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; body: any; }, index: Key | null | undefined | any) => (
          <section key={index}>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-4xl pt-12 pb-6">
              {topic.heading}
            </h2>
            <div
              className="text-2xl"
              dangerouslySetInnerHTML={{ __html: topic.body }} // Render HTML
            ></div>
            <div className="pb-36"></div>
          </section>
        ))}
      </section>
    </div>
  );
}

// `generateStaticParams` for pre-rendering all articles at build time
export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'app/content/news-data');
  const filenames = fs.readdirSync(articlesDir);

  return filenames.map((filename) => {
    const id = filename.replace(/\.json$/, ''); // Remove .json extension
    return { id };
  });
}
