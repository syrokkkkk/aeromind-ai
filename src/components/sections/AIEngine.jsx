export default function AIEngine() {
  const dataStreams = [
    {
      title: "Air Korea API",
      color: "bg-[#9DD7B8]",
    },
    {
      title: "Seoul Traffic API",
      color: "bg-[#F0C97A]",
    },
    {
      title: "KMA Weather Data",
      color: "bg-[#9CC8F4]",
    },
    {
      title: "NASA Aerosol Satellite",
      color: "bg-[#C6AFE9]",
    },
    {
      title: "User Mobility Patterns",
      color: "bg-[#F2B9A7]",
    },
  ];

  const engines = [
    {
      title: "PM2.5 Forecasting",
      subtitle: "Machine Learning",
      border: "border-[#54A177]",
    },
    {
      title: "Route Optimization",
      subtitle: "Geospatial AI",
      border: "border-[#6FA8DC]",
    },
    {
      title: "Health Risk Scoring",
      subtitle: "Predictive Analytics",
      border: "border-[#F08B74]",
    },
    {
      title: "Behavioral Recommendation Engine",
      subtitle: "Environmental Intelligence",
      border: "border-[#A67BE5]",
    },
    {
      title: "Exposure Simulation",
      subtitle: "Digital Twin Modeling",
      border: "border-[#E6AE48]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#EEF5F1] py-32 px-6 mt-24">
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D7EFE2] blur-[120px] rounded-full opacity-60" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#CDE5D8] blur-[120px] rounded-full opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-24">
          
          <div className="inline-flex px-5 py-2 rounded-full bg-[#DDEDE4] text-[#5F8F7B] tracking-[0.22em] uppercase text-sm font-semibold">
            Architecture
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] text-[#13261E]">
            Exposure Intelligence Engine
          </h2>

          <p className="mt-8 text-2xl text-[#60796D] max-w-4xl mx-auto leading-relaxed">
            Multi-source environmental intelligence fused with predictive AI
            systems to generate personalized exposure forecasting and safer
            mobility recommendations for Seoul residents.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-center">
          
          <div className="space-y-5">
            {dataStreams.map((item) => (
              <div
                key={item.title}
                className="bg-white/70 backdrop-blur-xl border border-[#D6E7DE] rounded-[24px] px-7 py-5 flex items-center gap-4 shadow-sm hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`w-4 h-4 rounded-full ${item.color}`} />

                <div>
                  <p className="text-[#33453D] text-lg font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[#D7EDE1] animate-pulse opacity-70" />

            <div className="absolute w-[300px] h-[300px] rounded-full border border-[#A4D0BA]" />

            <div className="relative z-10 w-[260px] h-[260px] rounded-full bg-gradient-to-br from-[#2F7C5B] to-[#174A37] shadow-[0_30px_80px_rgba(36,90,63,0.35)] flex flex-col items-center justify-center text-center text-white">
              
              <div className="text-6xl mb-4">
                🧠
              </div>

              <div className="tracking-[0.18em] uppercase text-sm opacity-80">
                AeroMind
              </div>

              <div className="text-2xl font-bold mt-2 leading-tight px-10">
                Exposure Intelligence Engine
              </div>
            </div>

            <div className="absolute top-12 left-0 text-[#6A8C7D] text-sm tracking-[0.18em] uppercase">
              Machine Learning
            </div>

            <div className="absolute bottom-10 left-10 text-[#6A8C7D] text-sm tracking-[0.18em] uppercase">
              Predictive Analytics
            </div>

            <div className="absolute top-16 right-0 text-[#6A8C7D] text-sm tracking-[0.18em] uppercase">
              Geospatial AI
            </div>

            <div className="absolute bottom-12 right-6 text-[#6A8C7D] text-sm tracking-[0.18em] uppercase">
              Environmental Intelligence
            </div>
          </div>

          <div className="space-y-5">
            {engines.map((item) => (
              <div
                key={item.title}
                className={`bg-white/75 backdrop-blur-xl border-l-4 ${item.border} border-t border-r border-b border-[#DCEAE3] rounded-[26px] p-7 shadow-sm hover:-translate-y-1 transition-all duration-300`}
              >
                <h3 className="text-[#1B2C25] text-2xl font-bold leading-snug">
                  {item.title}
                </h3>

                <p className="text-[#7A9085] mt-2 text-lg">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}