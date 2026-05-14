import PollutionChart from "../charts/PollutionChart";

export default function Dashboard() {
  return (
    <section className="section-container pt-32">
      
      <div className="text-center mb-20">
        <div className="inline-flex px-5 py-2 rounded-full bg-[#DDEDE4] text-[#5F8F7B] tracking-[0.2em] uppercase text-sm font-semibold">
          Live Dashboard
        </div>

        <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
          Personalized Exposure Dashboard
        </h2>

        <p className="mt-8 text-2xl text-[#60796D] max-w-4xl mx-auto leading-relaxed">
          Real-time PM2.5 forecasting and personalized environmental health analytics for Seoul residents.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-8">

          <PollutionChart />

          <div className="glass-card rounded-[36px] p-8 border border-[#D7E6DE]">
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="uppercase tracking-[0.18em] text-sm text-[#5F8F7B] font-semibold">
                  Seoul Route Intelligence
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  Optimized Low-Exposure Route
                </h3>
              </div>

              <div className="px-5 py-3 rounded-full bg-[#E7F3EC] text-[#2F7C5B] font-semibold">
                Exposure -21%
              </div>
            </div>

            <div className="relative h-[420px] rounded-[30px] overflow-hidden bg-[#DCEAE3]">

              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-8 h-full">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="border-r border-white/50"
                    />
                  ))}
                </div>
              </div>

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 420"
              >
                <path
                  d="M60 330 C160 250, 240 260, 330 180 C420 120, 530 140, 700 80"
                  stroke="#4F9D74"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="18 14"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute top-12 left-16 w-10 h-10 rounded-full bg-[#E76A5A]" />
              <div className="absolute top-28 right-28 w-16 h-16 rounded-full bg-[#E76A5A]" />
              <div className="absolute bottom-20 left-72 w-8 h-8 rounded-full bg-[#4F9D74]" />

              <div className="absolute bottom-6 right-6 glass-card rounded-2xl px-5 py-4">
                AI Optimized Route
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">

          <div className="glass-card rounded-[36px] p-8 border border-[#D7E6DE]">
            
            <p className="uppercase tracking-[0.18em] text-sm text-[#5F8F7B] font-semibold">
              User Profile
            </p>

            <div className="mt-6">
              <h3 className="text-4xl font-bold">
                Minji Kim
              </h3>

              <p className="text-[#73897E] text-xl mt-2">
                29 · Mild Asthma
              </p>
            </div>

            <div className="mt-10 space-y-5">

              <div className="flex justify-between items-center">
                <span className="text-[#61766B] text-lg">
                  Exposure Risk
                </span>

                <span className="font-bold text-[#E57C6D] text-xl">
                  Moderate
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#61766B] text-lg">
                  Health Score
                </span>

                <span className="font-bold text-[#2F7C5B] text-xl">
                  82%
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#61766B] text-lg">
                  Outdoor Safety
                </span>

                <span className="font-bold text-[#D9981E] text-xl">
                  11:00 AM
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[36px] p-8 border border-[#D7E6DE]">

            <p className="uppercase tracking-[0.18em] text-sm text-[#5F8F7B] font-semibold">
              AI Recommendations
            </p>

            <div className="space-y-5 mt-8">

              {[
                "Delay outdoor activity until 11:00 AM",
                "Avoid Teheran-ro during peak traffic",
                "Use subway exit 4 for lower exposure",
                "Estimated exposure reduction: 21%",
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

          <div className="glass-card rounded-[36px] p-8 border border-[#D7E6DE]">

            <p className="uppercase tracking-[0.18em] text-sm text-[#5F8F7B] font-semibold">
              Exposure Trend
            </p>

            <div className="mt-8 flex items-end gap-4 h-48">
              
              {[45, 72, 50, 39, 60, 30, 52].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-3xl bg-gradient-to-t from-[#5F8F7B] to-[#A7D1B8]"
                  style={{
                    height: `${height}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}