import React from 'react';

export const metadata = {
  title: 'About Us - IRIIS',
  description: 'About IRIIS',
}

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
      <h1 className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold 
        tracking-tight 
        text-foreground 
        pt-24 sm:pt-32 md:pt-40 lg:pt-48 
        pb-6 sm:pb-8 md:pb-10
      ">
        About Us
      </h1>

      <section className="space-y-6 sm:space-y-8 md:space-y-10 mb-12">
        <p className="
          text-base sm:text-lg md:text-xl lg:text-2xl 
          text-foreground/90 
          leading-relaxed 
          tracking-tight
        ">
          The Institute for Research and Innovation in Intelligent Systems (IRIIS) was founded with a purpose rooted in shared experience and vision: we've witnessed the challenges that students and aspiring researchers face in regions where research opportunities are limited. In countries like Nepal, students who want to study advanced fields such as computer science, artificial intelligence, and conduct research studies often find a lack of pathways, guidance, and resources to support their journey. IRIIS exists to change that narrative and help build a strong foundation of knowledge, innovation, and research access.
        </p>
        
        <p className="
          text-base sm:text-lg md:text-xl lg:text-2xl 
          text-foreground/90 
          leading-relaxed 
          tracking-tight
        ">
          At IRIIS, our mission is to cultivate an environment for learning and discovery. While we may not yet be complete experts, we started this journey with the understanding that everything begins with a first step. We are committed to continuous learning and improvement, aiming to enhance our capabilities day by day. 
        </p>
        
        <p className="
          text-base sm:text-lg md:text-xl lg:text-2xl 
          text-foreground/90 
          leading-relaxed 
          tracking-tight
        ">
          Our team draws significant inspiration from influential educators: Grant Sanderson (3Blue1Brown) and Prof. Chris Piech.
        </p>
      </section>

      <section className="space-y-6 sm:space-y-8 md:space-y-10">
        <h2 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold 
          tracking-tight 
          text-foreground 
          pt-12 sm:pt-16 md:pt-20 lg:pt-24 
          pb-6 sm:pb-8 md:pb-10
        ">
          Join Us on Our Journey
        </h2>
        
        <p className="
          text-base sm:text-lg md:text-xl lg:text-2xl 
          text-foreground/90 
          leading-relaxed 
          tracking-tight
        ">
          We are more than an organization; we are a community united by a shared purpose. Whether you are a student, researcher, educator, or enthusiast, there's a place for you at IRIIS. By supporting our mission, you contribute to a global effort to make education, research, and innovation accessible for all. Together, we can inspire and empower the next generation to shape a future where knowledge is freely shared, discoveries are widely celebrated, and intellectual curiosity knows no bounds.
        </p>
        
        <p className="
          text-base sm:text-lg md:text-xl lg:text-2xl 
          text-foreground/90 
          leading-relaxed 
          tracking-tight 
          mt-4 sm:mt-6 md:mt-8
          pb-12 sm:pb-16 md:pb-20 lg:pb-24
        ">
          We welcome collaboration from individuals and organizations who share our vision. Join us in supporting research, creating innovative learning resources, or mentoring young researchers. At IRIIS, we believe in the power of community and are always eager to connect with like-minded partners.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;