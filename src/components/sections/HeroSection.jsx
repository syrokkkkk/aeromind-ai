import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#EEF4F0]">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#DCEEE4] via-transparent to-[#CFE7DB] opacity-70" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        
        <div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#B7D7C4] bg-white/60 backdrop-blur-xl mb-8">
            <div className="w-2 h-2 rounded-full bg-[#5F8F7B]" />
            <span className="text-[#4E7A68] text-sm font-medium">
              Live · Seoul Metropolitan Area
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold leading-[1.05] tracking-[-0.04em]"
          >
            AI-Powered Personal
            <br />
            <span className="text-[#4F8A70]">
              Exposure Intelligence
            </span>
          </motion.h1>

          <p className="mt-8 text-2xl leading-relaxed text-[#567567] max-w-xl">
            Real-time pollution forecasting, health-aware mobility
            recommendations, and personalized exposure reduction
            for Seoul residents.
          </p>

          <div className="flex gap-5 mt-12">
            <button className="px-8 py-5 rounded-2xl bg-[#2E7A57] text-white text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300">
              Start Exposure Analysis
            </button>

            <button className="px-8 py-5 rounded-2xl border border-[#A7C8B6] text-[#3E6957] bg-white/50 backdrop-blur-xl text-lg font-medium hover:bg-white transition-all">
              View Live Seoul Air Map
            </button>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="glass-card rounded-[40px] p-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-[#5F8F7B] font-semibold">
                Personal Exposure Score
              </p>

              <div className="flex items-end gap-2 mt-4">
                <h2 className="text-7xl font-bold text-[#D9981E]">
                  47
                </h2>

                <span className="text-[#92A59A] mb-3">
                  μg/m³
                </span>
              </div>
            </div>

            <div className="px-4 py-2 rounded-full bg-[#FFF4E3] text-[#D9981E] font-semibold">
              Moderate
            </div>
          </div>

          <div className="mt-10 space-y-5">
            <div className="h-4 rounded-full bg-[#E8F0EB] overflow-hidden">
              <div className="w-[62%] h-full bg-gradient-to-r from-[#7AC48A] via-[#E4B24E] to-[#E57C6D]" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[#E57C6D] rounded-2xl h-28" />
              <div className="bg-[#E8B653] rounded-2xl h-24" />
              <div className="bg-[#7FC28A] rounded-2xl h-20" />
              <div className="bg-[#E57C6D] rounded-2xl h-32" />
            </div>

            <div className="mt-6 bg-[#DDEAE3] rounded-[30px] h-[260px] relative overflow-hidden">
              
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-6 h-full">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="border-r border-white/40"
                    />
                  ))}
                </div>
              </div>

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 260"
              >
                <path
                  d="M40 220 C120 160, 180 170, 260 140 C320 110, 330 70, 420 60"
                  stroke="#4F9D74"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="14 10"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute top-10 left-20 w-10 h-10 rounded-full border-4 border-[#E76A5A]" />
              <div className="absolute top-28 right-24 w-16 h-16 rounded-full border-4 border-[#E76A5A]" />
              <div className="absolute bottom-12 left-40 w-6 h-6 rounded-full border-2 border-[#4F9D74]" />

              <div className="absolute bottom-5 right-5 bg-white/80 backdrop-blur-xl rounded-2xl px-4 py-3 text-sm">
                Optimized route
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}