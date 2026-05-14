export default function HealthSection() {
  return (
    <section className="section-container pt-32">

      <div className="text-center mb-20">
        
        <div className="inline-flex px-5 py-2 rounded-full bg-[#DDEDE4] text-[#5F8F7B] tracking-[0.2em] uppercase text-sm font-semibold">
          Health Intelligence
        </div>

        <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
          Health Impact & Recommendations
        </h2>

        <p className="mt-8 text-2xl text-[#60796D] max-w-4xl mx-auto leading-relaxed">
          Personalized medical guidance powered by environmental exposure analytics and respiratory risk modeling.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="glass-card rounded-[40px] border border-[#E3ECE7] p-8 lg:col-span-2">

          <div className="flex items-center justify-between mb-10">
            
            <div>
              <p className="uppercase tracking-[0.18em] text-sm text-[#5F8F7B] font-semibold">
                Respiratory Risk Analysis
              </p>

              <h3 className="text-4xl font-bold mt-4 text-[#1C2D26]">
                PM2.5 Health Sensitivity
              </h3>
            </div>

            <div className="px-5 py-3 rounded-full bg-[#FFF1E8] text-[#D96C5C] font-semibold">
              Moderate Risk
            </div>
          </div>

          <div className="space-y-8">

            <div>
              <div className="flex justify-between mb-4">
                <span className="text-[#5D7267] text-lg">
                  Low Exposure
                </span>

                <span className="text-[#2F7C5B] font-bold">
                  28%
                </span>
              </div>

              <div className="h-5 rounded-full bg-[#E8F0EB] overflow-hidden">
                <div className="w-[28%] h-full bg-[#6DC28A] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <span className="text-[#5D7267] text-lg">
                  Moderate Exposure
                </span>

                <span className="text-[#D9981E] font-bold">
                  51%
                </span>
              </div>

              <div className="h-5 rounded-full bg-[#E8F0EB] overflow-hidden">
                <div className="w-[51%] h-full bg-[#E6B24C] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <span className="text-[#5D7267] text-lg">
                  High Exposure
                </span>

                <span className="text-[#D96C5C] font-bold">
                  21%
                </span>
              </div>

              <div className="h-5 rounded-full bg-[#E8F0EB] overflow-hidden">
                <div className="w-[21%] h-full bg-[#E76A5A] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">

          <div className="glass-card rounded-[40px] border border-[#E3ECE7] p-8">

            <p className="uppercase tracking-[0.18em] text-sm text-[#5F8F7B] font-semibold">
              AI Recommendations
            </p>

            <div className="space-y-5 mt-8">

              {[
                "Wear KF94 mask during morning commute",
                "Delay outdoor exercise until afternoon",
                "Increase hydration during dry conditions",
                "Use indoor air purifier between 7–10 AM",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#EDF5F0] rounded-2xl px-5 py-5 text-[#355145] text-lg leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}