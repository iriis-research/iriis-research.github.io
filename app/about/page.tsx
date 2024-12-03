import React from 'react';

export const metadata = {
  title: 'About Us - IRIIS',
  description: 'About IRIIS',
}
const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl pt-60 pb-6">About Us</h1>
      <section className="mb-12">
        <p className="text-2xl mt-6">
          The Institute for Research and Innovation in Intelligent Systems (IRIIS) was founded with a purpose rooted in shared experience and vision: we’ve witnessed the challenges that students and aspiring researchers face in regions where research opportunities are limited. In countries like Nepal, students who want to study advanced fields such as computer science, artificial intelligence, and conduct research studies often find a lack of pathways, guidance, and resources to support their journey. IRIIS exists to change that narrative and help build a strong foundation of knowledge, innovation, and research access.
        </p>
        <p className="text-2xl  mt-8">
        At IRIIS, our mission is to cultivate an environment for learning and discovery. While we may not yet be complete experts, we started this journey with the understanding that everything begins with a first step. We are committed to continuous learning and improvement, aiming to enhance our capabilities day by day. 
        </p>
        <p className="text-2xl  mt-8">
        Our team draws significant inspiration from influential educators: Grant Sanderson (3Blue1Brown) and Prof. Chris Piech.
         </p>
      </section>


      <section>
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl pt-60 pb-8">Join Us on Our Journey</h2>
        <p className="text-2xl ">
          We are more than an organization; we are a community united by a shared purpose. Whether you are a student, researcher, educator, or enthusiast, there’s a place for you at IRIIS. By supporting our mission, you contribute to a global effort to make education, research, and innovation accessible for all. Together, we can inspire and empower the next generation to shape a future where knowledge is freely shared, discoveries are widely celebrated, and intellectual curiosity knows no bounds.
        </p>
        <p className="text-2xl  mt-4 pb-60">
          We welcome collaboration from individuals and organizations who share our vision. Join us in supporting research, creating innovative learning resources, or mentoring young researchers. At IRIIS, we believe in the power of community and are always eager to connect with like-minded partners.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
