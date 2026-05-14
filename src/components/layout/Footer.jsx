export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-32 border-t border-[#D8E5DE] bg-[#EEF5F1]">
      
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D7ECE1] blur-[120px] rounded-full opacity-60" />

      <div className="section-container relative z-10 py-24">

        <div className="grid lg:grid-cols-4 gap-14">

          <div className="lg:col-span-2">
            
            <div className="flex items-center gap-4">
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2F7C5B] to-[#174A37] flex items-center justify-center text-white text-2xl shadow-xl">
                A
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#13261E]">
                  AeroMind AI
                </h3>

                <p className="text-[#6D8378] mt-1">
                  Environmental Intelligence Platform
                </p>
              </div>
            </div>

            <p className="mt-8 text-xl leading-relaxed text-[#60796D] max-w-2xl">
              AI-powered personal exposure forecasting and smart-city environmental intelligence for Seoul residents.
            </p>

            <div className="flex gap-4 mt-10">

              {["X", "In", "GH"].map((item) => (
                <div
                  key={item}
                  className="w-14 h-14 rounded-2xl bg-white/70 backdrop-blur-xl border border-[#D8E5DE] flex items-center justify-center text-[#3B5B4E] font-bold text-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#2A463B] font-bold text-xl mb-8">
              Platform
            </h4>

            <div className="space-y-5 text-[#60796D] text-lg">
              <p>Exposure Intelligence</p>
              <p>Mobility Optimization</p>
              <p>Environmental Forecasting</p>
              <p>Health Analytics</p>
            </div>
          </div>

          <div>
            <h4 className="text-[#2A463B] font-bold text-xl mb-8">
              Governance
            </h4>

            <div className="space-y-5 text-[#60796D] text-lg">
              <p>PIPA Compliance</p>
              <p>Privacy Policy</p>
              <p>AI Transparency</p>
              <p>Secure Infrastructure</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-[#D8E5DE] flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-[#71877C] text-lg">
            © 2026 AeroMind AI · Seoul, South Korea
          </p>

          <div className="flex gap-8 text-[#60796D] text-lg">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Security</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
}