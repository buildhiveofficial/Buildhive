"use client";

const process = {
  design: [
    "Discovery",
    "Research",
    "Concept",
    "Planning",
    "Visualization",
    "Approval",
  ],

  build: [
    "Planning",
    "Budgeting",
    "Execution",
    "Monitoring",
    "Quality Check",
    "Delivery",
  ],

  grow: [
    "Brand Audit",
    "Strategy",
    "Content",
    "Advertising",
    "Optimization",
    "Scaling",
  ],
};

export default function Process({ activePillar }) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-theme tracking-[2px] md:tracking-[4px] text-xs md:text-sm">
            OUR PROCESS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            How We{" "}
            {activePillar.charAt(0).toUpperCase() +
              activePillar.slice(1)}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {process[activePillar].map((step, i) => (
            <div
              key={step}
              className="border border-white/10 rounded-2xl p-5 md:p-6 lg:p-8 text-center hover:border-theme transition-all duration-300"
            >
              <div className="text-theme text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="font-semibold text-sm md:text-base lg:text-lg leading-snug">
                {step}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}