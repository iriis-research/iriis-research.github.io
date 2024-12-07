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
      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-12 pt-80 pb-80">
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Text Content - Left Side */}
          <div className="flex-2 max-w-4xl">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug sm:leading-tight lg:text-left md:text-center sm:text-center">
              Institute for Research and Innovation in Intelligent Systems
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-4 sm:py-12 md:py-8 max-w-full md:max-w-2xl lg:max-w-4xl lg:text-left md:text-center sm:text-center">
            At IRIIS, we explore algorithms and mathematical foundations to help advance AI research. 
            We&apos;re committed to the idea of open-source research and free knowledge sharing. 
            We will publish all our findings openly and create learning resources that make AI more accessible. 
            Though we&apos;re a small team, we believe great ideas can come from anywhere. 
            And, we will always work to build a future where AI serves everyone positively.
          </p>
          </div>
          

          {/* Logo - Right Side */}
          <div className="flex flex-2 justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-md group bg-background/50 border border-foreground shadow-md hover:shadow-heavy justify-center">
              <Image
                src={IRIISLogo}
                alt="IRIIS Logo"
                fill
                className="object-contain border-gray-900 border-2 rounded-lg hover:cursor-pointer"
                priority
              />
            </div>
          </div>

          </div>
      </section>


      {/* News Section */}
      <section id="announcement" className="container mx-auto pb-80">
      <h2 className="mb-12 text-center pb-8 pt-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug sm:leading-tight">News</h2>
      
        <div className="p-6 rounded-2xl border-foreground hover:text-accent-foreground">
          <AnnouncementCard
            category="News"
            title="IRIIS Launch"
            date="8th May, 2023"
            info="Embark on a Journey with IRIIS: Empowering Learning, Research, and Accessibility in AI for Everyone. "
            newsUrl="/news/iriis-launch"
            />
        </div>


      </section>

      {/* Work Card */}
      <section id="works" className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center pb-8 pt-4">Works</h2>

        <div className="grid md:grid-cols-2 gap-24 pb-10">

            <div className="p-6  rounded-2xl border-foreground hover:text-accent-foreground">
               <WorkCard
                  title= "Nepali Language Models"
                  description="Pre-trained language models (BERT, RoBERTa, and GPT-2) for the Nepali language. These models are developed to enhance language understanding and generation, enabling advanced NLP applications and encouraging further research in low-resource languages."
                  imageUrl= {FirstImage}
                  demoUrl= "https://huggingface.co/collections/IRIISNEPAL/nepali-language-models-6729fc7a5cd58b3f40f47708"
                  infoUrl= "/research/nepali-language-models"
                />
            </div>
            <div className="p-6  rounded-2xl border-foreground hover:text-accent-foreground">
               <WorkCard
                  title= "Nepali Language Corpus"
                  description= "Largest monolingual corpus for the Nepali language. With over 6 million textual articles, it serves as a broad and diverse resource enabling the development of high-quality language models and aiding research in natural language processing for Nepali Language."
                  imageUrl= {SecondImage}
                  demoUrl= "https://huggingface.co/collections/IRIISNEPAL/nepali-language-corpus-672a6a840b935d15bb2b2eaf"
                  infoUrl= "/research/nepali-language-models"
                />
            </div>
        </div>
      </section>


      {/* Call to Action */}
      <section id="call-to-action" className="container mx-auto pt-60 px-16 py-24 pb-48 ">
        <div 
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Card className="overflow-hidden bg-gradient-to-r p-20 hover:shadow-heavy hover:border-foreground cursor-pointer">
          <div className="text-center pt-8">
            <h2 className="text-3xl font-bold mb-6">Join Our Discord</h2>
            <p className="mb-8 max-w-2xl mx-auto text-lg">
              Collaborate with researchers and contribute to the future of AI
            </p>
            <Link href={"https://discord.gg/rJZQ99FC"} target='_blank' rel='noopener noreferrer'>
            <button className="px-24 py-3 rounded-full border-solid border-2 border-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <FaDiscord size={40} />
            </button>
            </Link>
          </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
