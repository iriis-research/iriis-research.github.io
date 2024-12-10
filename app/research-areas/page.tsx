export const metadata = {
  title: "Research Areas - IRIIS",
  description: "Research Areas"
}

const ResearchAreaPage = () => {
  return (
    <section className="min-h-screen py-16">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl md:pt-48 pt-32">Research Areas</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto pb-12 md:text-xl lg:text-2xl">
          Our research spans several high-impact areas of AI, from understanding and improving human language to developing systems that interact with the world in multiple ways. Below are the key areas we are currently exploring:
        </p>
      </div>

      <div className="mt-16 grid gap-16 md:grid-cols-2 lg:grid-cols-2 px-4">
        {/* NLP Research Area */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">Natural Language Processing (NLP)</h2>
          <p className=" max-w-2xl mx-auto text-center text-lg md:text-2xl lg:text-2xl">
          Our NLP research focuses on advancing AI for low-resource languages by developing models that can perform well with limited data. We also explore in-context learning, enabling models to adapt to new tasks without retraining. Additionally, we investigate causality in language models, helping models better understand and generate language based on cause-and-effect relationships.
          </p>
        </div>

        {/* Multimodal AI Research Area */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">Multimodal AI</h2>
          <p className=" max-w-2xl mx-auto text-center text-lg md:text-2xl lg:text-2xl">
          Our NLP research focuses on advancing AI for low-resource languages by developing models that can perform well with limited data. We also explore in-context learning, enabling models to adapt to new tasks without retraining. Additionally, we investigate causality in language models, helping models better understand and generate language based on cause-and-effect relationships.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ResearchAreaPage;
