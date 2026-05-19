export default function RouteResultCard({ user }) {

  if (!user) return null;

  const riskLevel =
    user.exposureScore > 70
      ? "HIGH"
      : user.exposureScore > 50
      ? "MODERATE"
      : "LOW";

  return (
    <section className="relative pb-24">

      <div className="section-container">

        <div className="rounded-[42px] border border-[#DDEAE3] bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10">

          {/* TOP */}

          <div className="flex items-center justify-between flex-wrap gap-6">

            <div>

              <p className="uppercase tracking-[0.22em] text-[#7DA08F] text-sm font-medium">
                AI GENERATED ROUTE
              </p>

              <h2 className="text-5xl font-bold mt-5 tracking-[-0.03em] text-[#18342B]">
                Personalized Exposure Analysis
              </h2>

              <p className="text-[#6F8B7E] text-lg mt-5 max-w-3xl leading-relaxed">
                AI-generated environmental route analysis
                optimized for pollution reduction,
                respiratory safety,
                and healthier urban mobility.
              </p>
            </div>

            <div
              className={`px-7 py-4 rounded-full text-sm font-semibold border ${
                riskLevel === "HIGH"
                  ? "bg-[#FFF1EF] text-[#D96C5C] border-[#FFD7D1]"
                  : riskLevel === "MODERATE"
                  ? "bg-[#FFF7E9] text-[#D1A547] border-[#F5E0A8]"
                  : "bg-[#EEF8F1] text-[#4F946A] border-[#BFE2CC]"
              }`}
            >
              {riskLevel} RISK
            </div>
          </div>

          {/* CARDS */}

          <div className="grid lg:grid-cols-3 gap-8 mt-14">

            {/* EXPOSURE */}

            <div className="rounded-[32px] border border-[#DCE9E2] bg-[#FAFCFB] p-8 shadow-sm">

              <p className="text-[#7B9789] uppercase tracking-[0.16em] text-sm">
                Exposure Score
              </p>

              <h3 className="text-7xl font-bold mt-6 text-[#1F4034]">
                {user.exposureScore}
              </h3>

              <div className="mt-6 h-3 rounded-full bg-[#E8F0EC] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#67C587] to-[#D7A55A]"
                  style={{
                    width: `${user.exposureScore}%`,
                  }}
                />
              </div>

              <p className="text-[#6F8B7E] mt-6 leading-relaxed">
                AI-calculated environmental exposure
                risk across the selected mobility route.
              </p>
            </div>

            {/* ROUTE */}

            <div className="rounded-[32px] border border-[#DCE9E2] bg-[#FAFCFB] p-8 shadow-sm">

              <p className="text-[#7B9789] uppercase tracking-[0.16em] text-sm">
                Recommended Route
              </p>

              <h3 className="text-3xl font-bold mt-6 leading-snug text-[#18342B]">
                {user.recommendedRoute}
              </h3>

              <div className="mt-8 flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-[#67C587]" />

                <span className="text-[#5B7A6B]">
                  Cleaner air corridor active
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-[#5EA4FF]" />

                <span className="text-[#5B7A6B]">
                  Reduced respiratory exposure
                </span>
              </div>

              <p className="text-[#6F8B7E] mt-8 leading-relaxed">
                Optimized for safer transportation
                and lower PM2.5 concentration.
              </p>
            </div>

            {/* REDUCTION */}

            <div className="rounded-[32px] border border-[#DCE9E2] bg-[#FAFCFB] p-8 shadow-sm">

              <p className="text-[#7B9789] uppercase tracking-[0.16em] text-sm">
                Estimated Reduction
              </p>

              <h3 className="text-7xl font-bold mt-6 text-[#4F946A]">
                {user.estimatedExposureReduction}
              </h3>

              <div className="mt-6 h-3 rounded-full bg-[#E8F0EC] overflow-hidden">
                <div className="h-full w-[72%] rounded-full bg-[#67C587]" />
              </div>

              <p className="text-[#6F8B7E] mt-6 leading-relaxed">
                Predicted reduction in harmful
                pollution exposure using AI safer routing.
              </p>
            </div>

          </div>

          {/* SUMMARY */}

          <div className="mt-14 rounded-[36px] border border-[#DCE9E2] bg-[#F7FBF8] p-10">

            <p className="uppercase tracking-[0.16em] text-[#7A9788] text-sm">
              AI Route Summary
            </p>

            <h3 className="text-3xl font-bold mt-6 leading-relaxed text-[#18342B]">

              AI recommends a safer mobility route
              from{" "}

              <span className="text-[#4F946A]">
                {user.startPoint}
              </span>

              {" "}to{" "}

              <span className="text-[#4F946A]">
                {user.destination}
              </span>

              {" "}for users with{" "}

              <span className="text-[#D4A148]">
                {user.conditions.join(", ")}
              </span>

              .

            </h3>

            <div className="grid md:grid-cols-3 gap-6 mt-10">

              <div className="rounded-2xl border border-[#DCE9E2] bg-white p-6">

                <p className="text-[#7B9789] text-sm uppercase tracking-[0.15em]">
                  Transport
                </p>

                <h4 className="text-2xl font-bold mt-4 text-[#18342B]">
                  {user.transport}
                </h4>
              </div>

              <div className="rounded-2xl border border-[#DCE9E2] bg-white p-6">

                <p className="text-[#7B9789] text-sm uppercase tracking-[0.15em]">
                  Route Priority
                </p>

                <h4 className="text-2xl font-bold mt-4 text-[#18342B]">
                  {user.routePriority}
                </h4>
              </div>

              <div className="rounded-2xl border border-[#DCE9E2] bg-white p-6">

                <p className="text-[#7B9789] text-sm uppercase tracking-[0.15em]">
                  AI Status
                </p>

                <h4 className="text-2xl font-bold mt-4 text-[#4F946A]">
                  Safe Route Active
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}