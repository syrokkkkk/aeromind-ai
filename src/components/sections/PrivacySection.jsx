export default function PrivacySection() {
  const securityCards = [
    {
      title: "End-to-End Encryption",
      description:
        "All environmental and health-related data is encrypted during transmission and storage.",
      icon: "🔐",
    },
    {
      title: "Consent-Based Collection",
      description:
        "Users maintain full control over mobility tracking and health permissions.",
      icon: "✅",
    },
    {
      title: "Anonymized Analytics",
      description:
        "Exposure analytics are processed anonymously to protect personal identity.",
      icon: "🛡️",
    },
    {
      title: "PIPA Compliance",
      description:
        "Designed according to South Korea Personal Information Protection Act standards.",
      icon: "📄",
    },
  ];

  return (
    <section className="section-container pt-32">
      
      <div className="text-center mb-20">
        
        <div className="inline-flex px-5 py-2 rounded-full bg-[#DDEDE4] text-[#5F8F7B] tracking-[0.2em] uppercase text-sm font-semibold">
          Security & Governance
        </div>

        <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
          Data Privacy & Trust Infrastructure
        </h2>

        <p className="mt-8 text-2xl text-[#60796D] max-w-4xl mx-auto leading-relaxed">
          AeroMind minimizes personal data collection and protects sensitive
          information through encrypted cloud infrastructure and privacy-first AI systems
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        <div className="grid sm:grid-cols-2 gap-6">
          {securityCards.map((card) => (
            <div
              key={card.title}
              className="glass-card rounded-[36px] p-8 border border-[#E3ECE7] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1C2D26] leading-snug">
                {card.title}
              </h3>

              <p className="mt-5 text-[#61766B] text-lg leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-[40px] border border-[#E3ECE7] p-10 relative overflow-hidden min-h-[640px] flex flex-col justify-between">

          <div>
            <p className="uppercase tracking-[0.18em] text-sm text-[#5F8F7B] font-semibold">
              Secure Cloud Architecture
            </p>

            <h3 className="text-5xl font-bold mt-5 leading-tight text-[#1C2D26]">
              Privacy-first environmental intelligence platform
            </h3>
          </div>

          <div className="relative flex-1 flex items-center justify-center mt-10">

            <div className="absolute w-[360px] h-[360px] rounded-full bg-[#DDEEE5] blur-3xl opacity-80" />

            <div className="relative z-10 flex flex-col items-center gap-10">

              <div className="bg-gradient-to-br from-[#2F7C5B] to-[#174A37] text-white rounded-[32px] px-10 py-8 shadow-2xl text-center min-w-[260px]">
                
                <div className="text-5xl mb-4">
                  ☁️
                </div>

                <div className="text-2xl font-bold">
                  Encrypted Cloud Core
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">

                <div className="bg-white/80 backdrop-blur-xl rounded-[28px] px-8 py-7 border border-[#D7E6DE] text-center shadow-sm">
                  <div className="text-4xl mb-4">
                    🧬
                  </div>

                  <p className="font-bold text-[#29463A] text-lg">
                    Health Data
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-[28px] px-8 py-7 border border-[#D7E6DE] text-center shadow-sm">
                  <div className="text-4xl mb-4">
                    📍
                  </div>

                  <p className="font-bold text-[#29463A] text-lg">
                    Mobility Data
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-[28px] px-8 py-7 border border-[#D7E6DE] text-center shadow-sm">
                  <div className="text-4xl mb-4">
                    🌫️
                  </div>

                  <p className="font-bold text-[#29463A] text-lg">
                    Air Quality APIs
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-[28px] px-8 py-7 border border-[#D7E6DE] text-center shadow-sm">
                  <div className="text-4xl mb-4">
                    🛰️
                  </div>

                  <p className="font-bold text-[#29463A] text-lg">
                    Satellite Data
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-[#EEF7F2] border border-[#D8E8DF] rounded-[28px] p-7 text-[#567567] text-lg leading-relaxed">
            The platform minimizes personal data collection and stores all sensitive information in encrypted cloud infrastructure
          </div>
        </div>
      </div>
    </section>
  );
}