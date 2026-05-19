export default function RouteComparison({ user }) {

  if (!user) return null;

  const routes = [
    {
      name: "Fastest Route",
      time: "24 min",
      exposure: 81,
      status: "AVOID",
      color: "text-[#D96C5C]",
      bg: "bg-[#FFF1EF]",
    },

    {
      name: "Balanced Route",
      time: "31 min",
      exposure: 54,
      status: "MODERATE",
      color: "text-[#D8A84F]",
      bg: "bg-[#FFF8E8]",
    },

    {
      name: "Green Corridor Route",
      time: "36 min",
      exposure: 28,
      status: "RECOMMENDED",
      color: "text-[#4F946A]",
      bg: "bg-[#EEF8F1]",
    },
  ];

  return (
    <section className="relative pb-24">

      <div className="section-container">

        <div className="glass-panel rounded-[40px] p-10">

          <div className="mb-12">

            <p className="uppercase tracking-[0.18em] text-[#7FA28F] text-sm">
              AI ROUTE COMPARISON
            </p>

            <h2 className="text-5xl font-bold mt-5">
              Exposure-Based Route Analysis
            </h2>

            <p className="text-[#6F8B7E] text-xl mt-6 max-w-4xl leading-relaxed">
              AI compares multiple mobility paths
              based on pollution density,
              environmental exposure,
              respiratory health impact,
              and transportation efficiency.
            </p>
          </div>

          <div className="space-y-6">

            {routes.map((route) => (

              <div
                key={route.name}
                className={`rounded-[30px] border border-[#D8E5DD] p-8 ${route.bg}`}
              >

                <div className="grid lg:grid-cols-4 gap-8 items-center">

                  <div>

                    <p className="text-[#6B8578] uppercase tracking-[0.14em] text-sm">
                      Route
                    </p>

                    <h3 className="text-3xl font-bold mt-3">
                      {route.name}
                    </h3>
                  </div>

                  <div>

                    <p className="text-[#6B8578] uppercase tracking-[0.14em] text-sm">
                      Estimated Time
                    </p>

                    <h3 className="text-3xl font-bold mt-3">
                      {route.time}
                    </h3>
                  </div>

                  <div>

                    <p className="text-[#6B8578] uppercase tracking-[0.14em] text-sm">
                      Exposure Score
                    </p>

                    <h3 className={`text-3xl font-bold mt-3 ${route.color}`}>
                      {route.exposure}
                    </h3>
                  </div>

                  <div>

                    <p className="text-[#6B8578] uppercase tracking-[0.14em] text-sm">
                      AI Recommendation
                    </p>

                    <div className="mt-3">

                      <span className={`px-5 py-3 rounded-full text-sm font-semibold ${route.bg} ${route.color}`}>
                        {route.status}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[32px] bg-[#F6FBF8] border border-[#D8E5DD] p-8">

            <p className="uppercase tracking-[0.15em] text-[#7A9588] text-sm">
              AI Decision Summary
            </p>

            <h3 className="text-3xl font-bold mt-5 leading-relaxed">

              For users with
              {" "}
              <span className="text-[#4F946A]">
                {user.conditions.join(", ")}
              </span>
              ,
              AI strongly recommends the
              {" "}
              <span className="text-[#4F946A]">
                Green Corridor Route
              </span>
              {" "}
              to minimize PM2.5 exposure
              and respiratory stress.

            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}