import React from 'react';
import DatasetCard from '@/components/Cards/DatasetCard';

export const metadata = {
  title: 'Datasets - IRIIS',
  description: 'Datasets page',
};

const datasets = [
  {
    title: 'Nepali Text Corpus',
    description: 'Collection of approximately 6.4 million articles in the Nepali language.',
    link: 'https://huggingface.co/collections/IRIISNEPAL/nepali-language-corpus-672a6a840b935d15bb2b2eaf',
    imageUrl: '/research-images/c-programming/IRIIS_small.png',
  },
];

const DatasetsPage = () => {
  return (
    <section className="min-h-screen px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl pt-48">
          Explore Datasets
        </h1>
        <p className="mt-4 text-lg pb-16">
          Browse our collection of datasets and resources.
        </p>
      </div>
      <div className="space-y-6">
        {datasets.map((dataset, index) => (
          <DatasetCard
            key={index}
            title={dataset.title}
            description={dataset.description}
            link={dataset.link}
            imageUrl={dataset.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default DatasetsPage;
