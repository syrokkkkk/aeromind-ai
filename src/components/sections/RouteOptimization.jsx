export default function RouteOptimization() {
  return (
    <section className="section-container pt-32">
      <div className="text-center mb-20">
        <div className="inline-flex px-5 py-2 rounded-full bg-[#DDEDE4] text-[#5F8F7B] tracking-[0.2em] uppercase text-sm font-semibold">
          Mobility AI
        </div>

        <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
          Safe Route Optimization
        </h2>

        <p className="mt-8 text-2xl text-[#60796D] max-w-4xl mx-auto leading-relaxed">
          AeroMind dynamically adapts commuting routes using real-time air quality, traffic congestion, and urban airflow intelligence
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        <div className="glass-card rounded-[40px] border border-[#E3ECE7] p-8 overflow-hidden">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="uppercase tracking-[0.18em] text-sm text-[#D96C5C] font-semibold">
                Current Route
              </p>

              <h3 className="text-4xl font-bold mt-3 text-[#1C2D26]">
                High Exposure Path
              </h3>
            </div>

            <div className="px-5 py-3 rounded-full bg-[#FFE6E1] text-[#D96C5C] font-semibold">
              Risk +34%
            </div>
          </div>

          <div className="relative h-[420px] rounded-[32px] overflow-hidden bg-[#E4ECE7]">
            
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 700 420"
            >
              <path
                d="M50 340 C170 240, 240 250, 330 170 C420 120, 520 120, 650 60"
                stroke="#E76A5A"
                strokeWidth="10"
                fill="none"
                strokeDasharray="20 16"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute top-16 left-14 w-12 h-12 rounded-full bg-[#E76A5A] shadow-xl" />
            <div className="absolute top-28 right-24 w-20 h-20 rounded-full bg-[#E76A5A]/80 blur-sm" />

            <div className="absolute bottom-5 left-5 bg-white/80 backdrop-blur-xl rounded-2xl px-5 py-4 text-[#4B5E55] text-sm">
              Heavy traffic · PM2.5 hotspots
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[40px] border border-[#E3ECE7] p-8 overflow-hidden">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="uppercase tracking-[0.18em] text-sm text-[#4F8A70] font-semibold">
                AI Optimized Route
              </p>

              <h3 className="text-4xl font-bold mt-3 text-[#1C2D26]">
                Low Exposure Corridor
              </h3>
            </div>

            <div className="px-5 py-3 rounded-full bg-[#E6F5EC] text-[#2F7C5B] font-semibold">
              Exposure -21%
            </div>
          </div>

          <div className="relative h-[420px] rounded-[32px] overflow-hidden bg-[#DDEBE4]">
            
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 700 420"
            >
              <path
                d="M40 350 C130 300, 240 250, 320 210 C420 160, 530 130, 650 70"
                stroke="#4F9D74"
                strokeWidth="10"
                fill="none"
                strokeDasharray="20 16"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute top-20 left-20 w-10 h-10 rounded-full bg-[#4F9D74] shadow-xl" />
            <div className="absolute bottom-24 left-48 w-20 h-20 rounded-full bg-[#74C08A]/60 blur-sm" />

            <div className="absolute bottom-5 left-5 bg-white/80 backdrop-blur-xl rounded-2xl px-5 py-4 text-[#4B5E55] text-sm">
              Park corridors · Cleaner airflow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}