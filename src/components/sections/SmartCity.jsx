export default function SmartCity() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#EEF5F1]">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D8EEE3] blur-[120px] rounded-full opacity-70" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#D2E8DC] blur-[120px] rounded-full opacity-70" />

      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex px-5 py-2 rounded-full bg-[#DDEDE4] text-[#5F8F7B] tracking-[0.2em] uppercase text-sm font-semibold">
            Future Seoul
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] text-[#13261E] leading-tight">
            Smart City Environmental Intelligence
          </h2>

          <p className="mt-8 text-2xl text-[#60796D] max-w-4xl mx-auto leading-relaxed">
            Future integration with Seoul smart-city infrastructure can support
            real-time pollution mitigation, adaptive mobility systems, and
            population-scale environmental health protection
          </p>
        </div>

        <div className="glass-card rounded-[48px] border border-[#DCE9E2] overflow-hidden p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex px-4 py-2 rounded-full bg-[#E8F3ED] text-[#4F8A70] uppercase tracking-[0.18em] text-sm font-semibold mb-8">
                Seoul Urban Intelligence Layer
              </div>

              <h3 className="text-5xl font-bold leading-tight text-[#13261E]">
                AI-powered environmental coordination across Seoul
              </h3>

              <p className="mt-8 text-xl leading-relaxed text-[#60796D]">
                AeroMind connects environmental sensors, mobility systems,
                atmospheric forecasting, and urban infrastructure into a unified
                city-scale intelligence network
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-12">
                {[
                  "AI Traffic Systems",
                  "Green Mobility Corridors",
                  "Pollution-Responsive Infrastructure",
                  "Urban Planning Dashboard",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white/70 backdrop-blur-xl rounded-[28px] border border-[#DCE9E2] p-6 shadow-sm"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#5FA57B] mb-5" />

                    <p className="text-lg font-semibold text-[#2A463B] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[760px] rounded-[42px] overflow-hidden bg-gradient-to-br from-[#DCEBE4] to-[#EEF5F1] border border-[#DCE9E2]">
              <div className="absolute inset-0 opacity-40">
                <div className="grid grid-cols-8 h-full">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="border-r border-white/40"
                    />
                  ))}
                </div>
              </div>

              <div className="absolute top-16 left-16 glass-card rounded-[32px] px-8 py-6 border border-[#D8E7E0]">
                <p className="uppercase tracking-[0.18em] text-xs text-[#5F8F7B] font-semibold">
                  Smart Mobility
                </p>

                <h4 className="text-2xl font-bold mt-3 text-[#1D3128]">
                  Dynamic Airflow Routing
                </h4>
              </div>

              <div className="absolute top-44 right-16 glass-card rounded-[32px] px-8 py-6 border border-[#D8E7E0]">
                <p className="uppercase tracking-[0.18em] text-xs text-[#5F8F7B] font-semibold">
                  AI Forecasting
                </p>

                <h4 className="text-2xl font-bold mt-3 text-[#1D3128]">
                  City Pollution Prediction
                </h4>
              </div>

              <div className="absolute bottom-28 left-14 glass-card rounded-[32px] px-8 py-6 border border-[#D8E7E0]">
                <p className="uppercase tracking-[0.18em] text-xs text-[#5F8F7B] font-semibold">
                  Urban Sensors
                </p>

                <h4 className="text-2xl font-bold mt-3 text-[#1D3128]">
                  Environmental Grid Network
                </h4>
              </div>

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 760"
              >
                <path
                  d="M120 620 C240 540, 320 470, 430 380 C520 300, 620 220, 710 140"
                  stroke="#5AA176"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="22 16"
                  strokeLinecap="round"
                />

                <path
                  d="M120 220 C250 270, 350 330, 480 430 C590 510, 660 560, 730 620"
                  stroke="#9AC7AE"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="18 18"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute top-[180px] left-[220px] w-16 h-16 rounded-full bg-[#5FA57B] shadow-[0_0_40px_rgba(95,165,123,0.45)]" />

              <div className="absolute top-[380px] right-[180px] w-24 h-24 rounded-full bg-[#7BC290]/70 blur-md" />

              <div className="absolute bottom-[180px] left-[320px] w-20 h-20 rounded-full bg-[#4F8A70]/70 blur-md" />

              <div className="absolute bottom-8 right-8 glass-card rounded-[28px] px-7 py-5 border border-[#D8E7E0]">
                <p className="uppercase tracking-[0.18em] text-xs text-[#5F8F7B] font-semibold">
                  Future Vision
                </p>

                <h4 className="text-2xl font-bold mt-3 text-[#1D3128] leading-snug">
                  Seoul AI Environmental Command Center
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}