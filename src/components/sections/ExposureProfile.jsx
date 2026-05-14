export default function ExposureProfile() {
  return (
    <section className="section-container pt-24">
      <div className="text-center mb-20">
        <div className="inline-flex px-5 py-2 rounded-full bg-[#DDEDE4] text-[#5F8F7B] tracking-[0.2em] uppercase text-sm font-semibold">
          AI Intake
        </div>

        <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
          Personal Exposure Profile
        </h2>

        <p className="mt-8 text-2xl text-[#60796D] max-w-3xl mx-auto leading-relaxed">
          Your data trains AeroMind to predict individualized exposure and
          generate personalized health recommendations.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-[36px] p-10 border border-[#D7E6DE]">
          <h3 className="text-[#3F8A67] font-bold tracking-[0.18em] uppercase text-lg mb-10">
            A · Personal Information
          </h3>

          <div className="space-y-7">
            <div>
              <label className="block text-[#5C7066] mb-3 font-medium">
                Age
              </label>

              <input
                placeholder="e.g. 29"
                className="w-full rounded-2xl border border-[#C7DCD0] bg-white/70 px-6 py-5 text-lg outline-none"
              />
            </div>

            <div>
              <label className="block text-[#5C7066] mb-3 font-medium">
                Gender
              </label>

              <select className="w-full rounded-2xl border border-[#C7DCD0] bg-white/70 px-6 py-5 text-lg outline-none">
                <option>Select</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[#5C7066] mb-3 font-medium">
                District in Seoul
              </label>

              <select className="w-full rounded-2xl border border-[#C7DCD0] bg-white/70 px-6 py-5 text-lg outline-none">
                <option>Gangnam-gu</option>
                <option>Seocho-gu</option>
                <option>Songpa-gu</option>
                <option>Yongsan-gu</option>
                <option>Mapo-gu</option>
                <option>Jongno-gu</option>
                <option>Jung-gu</option>
                <option>Seongdong-gu</option>
                <option>Gwangjin-gu</option>
                <option>Dongdaemun-gu</option>
                <option>Jungnang-gu</option>
                <option>Seongbuk-gu</option>
                <option>Gangbuk-gu</option>
                <option>Dobong-gu</option>
                <option>Nowon-gu</option>
                <option>Eunpyeong-gu</option>
                <option>Seodaemun-gu</option>
                <option>Yangcheon-gu</option>
                <option>Gangseo-gu</option>
                <option>Guro-gu</option>
                <option>Geumcheon-gu</option>
                <option>Yeongdeungpo-gu</option>
                <option>Dongjak-gu</option>
                <option>Gwanak-gu</option>
                <option>Gangdong-gu</option>
              </select>
            </div>

            <div>
              <label className="block text-[#5C7066] mb-3 font-medium">
                Occupation
              </label>

              <input
                placeholder="e.g. Office worker, Student"
                className="w-full rounded-2xl border border-[#C7DCD0] bg-white/70 px-6 py-5 text-lg outline-none"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-card rounded-[36px] p-10 border border-[#D7E6DE]">
            <h3 className="text-[#3F8A67] font-bold tracking-[0.18em] uppercase text-lg mb-8">
              B · Health Sensitivity
            </h3>

            <div className="space-y-5">
              {[
                "Asthma",
                "Allergies",
                "Cardiovascular disease",
                "Respiratory sensitivity",
                "No conditions",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center justify-between border-b border-[#E4ECE7] pb-4"
                >
                  <span className="text-xl text-[#364A41]">{item}</span>

                  <input
                    type="checkbox"
                    className="w-6 h-6 accent-[#4F8A70]"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[36px] p-10 border border-[#D7E6DE]">
            <h3 className="text-[#3F8A67] font-bold tracking-[0.18em] uppercase text-lg mb-8">
              C · Daily Mobility
            </h3>

            <div>
              <p className="text-[#5D7267] mb-4 font-medium text-lg">
                Transport type
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  "Walking",
                  "Subway",
                  "Car",
                  "Bike",
                  "Bus",
                ].map((item, i) => (
                  <button
                    key={item}
                    className={`px-6 py-3 rounded-full border text-lg transition-all ${
                      i === 1
                        ? "bg-[#E1F0E8] border-[#4F8A70] text-[#2F7455]"
                        : "border-[#C9DDD1] text-[#60766B]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}