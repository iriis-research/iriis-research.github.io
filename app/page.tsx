'use client';

import * as React from "react";
import Image from "next/image";
import IRIISLogo from "../public/IRIIS_small.png";
import FirstImage from "../public/first_image.png";
import SecondImage from "../public/second_image.png";
import { FaDiscord } from "react-icons/fa";
import WorkCard from "@/components/Cards/WorkCard";
import AnnouncementCard from "@/components/Cards/AnnouncementCard";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Improved Responsiveness */}
      <section 
        id="hero" 
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 
                   pt-40 sm:pt-40 md:pt-60 lg:pt-80 
                   pb-40 sm:pb-40 md:pb-60 lg:pb-80"
      >
        <div 
          className="flex flex-col md:flex-row 
                     items-center 
                     justify-between 
                     gap-8 md:gap-12 lg:gap-16"
        >
          {/* Text Content - Improved Responsiveness */}
          <div className="flex-2 max-w-4xl text-center md:text-left lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                           font-bold 
                           tracking-tight 
                           leading-tight 
                           mb-4 sm:mb-6">
              Institute for Research and Innovation in Intelligent Systems
            </h1>
            <p className="text-base sm:text-xl md:text-xl lg:text-3xl 
                          mx-auto md:mx-0 
                          text-center md:text-left 
                          px-4 md:px-0">
              At IRIIS, we explore algorithms and mathematical foundations to help advance AI research. 
              We&apos;re committed to the idea of open-source research and free knowledge sharing. 
              We will publish all our findings openly and create learning resources that make AI more accessible. 
              Though we&apos;re a small team, we believe great ideas can come from anywhere. 
              And, we will always work to build a future where AI serves everyone positively.
            </p>
          </div>

          {/* Logo - Improved Responsiveness */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative 
                            w-48 h-48 
                            sm:w-56 sm:h-56 
                            md:w-64 md:h-64 
                            lg:w-80 lg:h-80 
                            overflow-hidden 
                            rounded-md 
                            shadow-md 
                            hover:shadow-heavy
                            transition-shadow">
              <Image
                src={IRIISLogo}
                alt="IRIIS Logo"
                fill
                className="object-contain 
                           border-2 
                           border-gray-900 
                           rounded-lg 
                           hover:cursor-pointer"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section - Improved Responsiveness */}
      <section 
        id="announcement" 
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 
                   pb-20 sm:pb-40 md:pb-60 lg:pb-80"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       font-bold 
                       text-center 
                       mb-8 sm:mb-12">
          Announcements
        </h2>
        
        <div className="max-w-4xl mx-auto p-4 sm:p-6 
                        rounded-2xl 
                        hover:text-accent-foreground">
          <AnnouncementCard
            category="News"
            title="First paper accepted at CHiPSAL Workshop (COLING 2025)"
            date="4th December, 2024"
            info="We are thrilled to announce that our paper, 'Development of Pre-Trained Transformer-based Models for the Nepali Language,' has been accepted at @COLING2025!"
            newsUrl="/news/coling-2025-paper"
          />
        </div>
      </section>

      {/* Works Section - Improved Responsiveness */}
      <section 
        id="works" 
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       font-bold 
                       text-center 
                       mb-8 sm:mb-12">
          Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2
                        gap-8 sm:gap-12 md:gap-16 
                        pb-10">
          <div className="p-4 sm:p-6 
          rounded-2xl 
          hover:text-accent-foreground">
            <WorkCard
              title="NLUE"
              description="The Nepali Language Understanding Evaluation (NLUE) benchmark, which covers a total of 12 tasks for evaluating the performance
                         of models across a diverse set of Natural Language Understanding (NLU) tasks. The added tasks include single-sentence 
                         classification, similarity and paraphrase tasks, and Natural Language Inference (NLI) tasks. On evaluating the models 
                         using added tasks, we observe that the existing models fall short in handling complex NLU tasks effectively. "
              imageUrl={SecondImage}
              infoUrl="/research/nepali-language-benchmark"
            />
          </div>
          <div className="p-4 sm:p-6 
                          rounded-2xl 
                          hover:text-accent-foreground">
            <WorkCard
              title="Nepali Language Models"
              description="Pre-trained language models (BERT, RoBERTa, and GPT-2) for the Nepali language. These models are developed to enhance language understanding and generation, enabling advanced NLP applications and encouraging further research in low-resource languages."
              imageUrl={FirstImage}
              infoUrl="/research/nepali-language-models"
            />
          </div>
          
        </div>
      </section>

      {/* Call to Action - Improved Responsiveness */}
      <section 
        id="call-to-action" 
        className="container mx-auto 
                   px-4 sm:px-6 md:px-8 lg:px-12 
                   pt-20 sm:pt-40 md:pt-60 lg:pt-80 
                   pb-20 sm:pb-40 md:pb-60 lg:pb-80"
      >
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl 
                           overflow-hidden 
                           bg-gradient-to-r 
                           p-6 sm:p-10 md:p-16 
                           hover:shadow-lg 
                           hover:border-foreground 
                           cursor-pointer">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl 
                             font-bold 
                             mb-4 sm:mb-6">
                Join Our Discord
              </h2>
              <p className="text-base sm:text-lg md:text-xl 
                            mb-6 sm:mb-8 
                            max-w-xl 
                            mx-auto">
                Collaborate with researchers and contribute to the future of AI
              </p>
              <Link 
                href="https://discord.gg/rJZQ99FC" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="px-12 sm:px-16 md:px-24 
                                   py-2 sm:py-3 
                                   rounded-full 
                                   border-solid
                                   border-2
                                   border-foreground
                                   hover:bg-accent 
                                   hover:text-accent-foreground 
                                   transition-colors">
                  <FaDiscord size={32}  />
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}