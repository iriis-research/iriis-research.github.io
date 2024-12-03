// app/news/page.tsx
import fs from "fs";
import path from "path";
import NewsCard from "@/components/Cards/NewsCard";

export const metadata = {
  title: "News - IRIIS",
  description: "News about IRIIS research and innovations",
};

// Function to get all articles from the /data directory
function getAllArticles() {
  const articlesDir = path.join(process.cwd(), "app/content/news-data");
  const filenames = fs.readdirSync(articlesDir);

  const articles = filenames.map((filename) => {
    const filePath = path.join(articlesDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const article = JSON.parse(fileContents);
    return {
      id: filename.replace(/\.json$/, ""), // Remove the .json extension
      title: article.title,
      intro: article.intro,
      author: article.author,
      date: article.date,
      image: article.image,
    };
  });

  // Sort articles by date in descending order (most recent first)
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export default function NewsPage() {
  const articles = getAllArticles();

  return (
    <div className="pt-60 px-6 pb-16">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl pb-24 text-center">News</h1>
      <div className="pb-16">
        {articles.map((article) => (
          
          <NewsCard
            key={article.id}
            id={article.id}
            title={article.title}
            intro={article.intro}
            author={article.author}
            date={article.date}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
}
