import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Circle,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const pollutionZones = [
  {
    center: [37.4979, 127.0276],
    radius: 1200,
    color: "#D96C5C",
    label: "Gangnam High Pollution Zone",
  },

  {
    center: [37.5311, 126.981],
    radius: 900,
    color: "#E5B95E",
    label: "Yongsan Traffic Exposure",
  },

  {
    center: [37.5637, 126.9084],
    radius: 1500,
    color: "#5FA57B",
    label: "Mapo Green Corridor",
  },

  {
    center: [37.5512, 126.9882],
    radius: 700,
    color: "#5EA4FF",
    label: "Protected School Zone",
  },

  {
    center: [37.5796, 126.977],
    radius: 650,
    color: "#8D74E8",
    label: "Hospital Protection Area",
  },
];

const routeDatabase = {

  Gangnam: {
    start: [37.4979, 127.0276],
    end: [37.5444, 127.0374],

    startName: "Gangnam Station",
    endName: "Seoul Forest",

    walking: {
      normal: [
        [37.4979, 127.0276],
        [37.508, 127.018],
        [37.521, 127.008],
        [37.531, 126.998],
        [37.5444, 127.0374],
      ],

      safe: [
        [37.4979, 127.0276],
        [37.503, 127.011],
        [37.512, 127.002],
        [37.526, 127.012],
        [37.538, 127.024],
        [37.5444, 127.0374],
      ],
    },
  },

  Mapo: {
    start: [37.5637, 126.9084],
    end: [37.5219, 126.9245],

    startName: "Hongdae",
    endName: "Yeouido Park",

    walking: {
      normal: [
        [37.5637, 126.9084],
        [37.556, 126.913],
        [37.548, 126.918],
        [37.534, 126.921],
        [37.5219, 126.9245],
      ],

      safe: [
        [37.5637, 126.9084],
        [37.558, 126.905],
        [37.549, 126.909],
        [37.536, 126.915],
        [37.5219, 126.9245],
      ],
    },
  },

  Jongno: {
    start: [37.5729, 126.9794],
    end: [37.5512, 126.9882],

    startName: "Gyeongbokgung",
    endName: "Namsan Park",

    walking: {
      normal: [
        [37.5729, 126.9794],
        [37.566, 126.982],
        [37.559, 126.986],
        [37.554, 126.989],
        [37.5512, 126.9882],
      ],

      safe: [
        [37.5729, 126.9794],
        [37.569, 126.975],
        [37.563, 126.978],
        [37.557, 126.983],
        [37.5512, 126.9882],
      ],
    },
  },
};

export default function LiveRouteMap({ user }) {

  if (!user) return null;

  const districtData =
    routeDatabase[user.district] ||
    routeDatabase.Gangnam;

  const transportType =
    user.transport.toLowerCase();

  const selectedRoutes =
    districtData[transportType] ||
    districtData.walking;

  const normalRoute =
    selectedRoutes.normal;

  const safeRoute =
    selectedRoutes.safe;

  const startPosition =
    districtData.start;

  const endPosition =
    districtData.end;

  const startName =
    districtData.startName;

  const endName =
    districtData.endName;

  return (
    <section className="relative py-24">

      <div className="section-container">

        <div className="rounded-[42px] border border-[#DDEAE3] bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10">

          <div className="flex items-center justify-between flex-wrap gap-6 mb-10">

            <div>

              <p className="uppercase tracking-[0.18em] text-[#7FA28F] text-sm">
                LIVE AI ROUTE ANALYSIS
              </p>

              <h2 className="text-5xl font-bold mt-5 text-[#18342B]">
                Real-Time Exposure Navigation
              </h2>

              <p className="text-[#6F8B7E] text-lg mt-5 max-w-3xl leading-relaxed">
                AI-powered mobility optimization system
                analyzing pollution exposure,
                respiratory safety,
                and healthier urban travel paths across Seoul.
              </p>
            </div>

            <div className="px-6 py-3 rounded-full bg-[#EEF8F1] border border-[#BFE2CC] text-[#29503E] font-semibold">
              Exposure Score: {user.exposureScore}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">

            {/* MAP */}

            <div className="rounded-[32px] overflow-hidden border border-[#D6E4DD] h-[720px] shadow-sm">

              <MapContainer
                center={startPosition}
                zoom={12}
                scrollWheelZoom={true}
                className="h-full w-full"
              >

                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* pollution zones */}

                {pollutionZones.map((zone, index) => (

                  <Circle
                    key={index}
                    center={zone.center}
                    radius={zone.radius}
                    pathOptions={{
                      fillColor: zone.color,
                      color: zone.color,
                      fillOpacity: 0.32,
                    }}
                  >
                    <Popup>
                      {zone.label}
                    </Popup>
                  </Circle>
                ))}

                {/* normal route */}

                <Polyline
                  positions={normalRoute}
                  pathOptions={{
                    color: "#D96C5C",
                    weight: 7,
                    opacity: 0.7,
                  }}
                />

                {/* safer route */}

                <Polyline
                  positions={safeRoute}
                  pathOptions={{
                    color: "#5FA57B",
                    weight: 8,
                    dashArray: "16 14",
                  }}
                />

                {/* start marker */}

                <Marker position={startPosition}>
                  <Popup>
                    Start: {startName}
                  </Popup>
                </Marker>

                {/* destination marker */}

                <Marker position={endPosition}>
                  <Popup>
                    Destination: {endName}
                  </Popup>
                </Marker>

              </MapContainer>
            </div>

            {/* RIGHT PANEL */}

            <div className="space-y-8">

              {/* recommendation */}

              <div className="rounded-[32px] bg-[#FAFCFB] border border-[#D7E4DD] p-8 shadow-sm">

                <p className="uppercase tracking-[0.15em] text-[#7F998C] text-sm">
                  AI Recommendation
                </p>

                <h3 className="text-3xl font-bold mt-5 leading-snug text-[#18342B]">

                  Use the protected green corridor route
                  from{" "}

                  <span className="text-[#4F946A]">
                    {startName}
                  </span>

                  {" "}to{" "}

                  <span className="text-[#4F946A]">
                    {endName}
                  </span>

                  {" "}to reduce PM2.5 exposure by{" "}

                  <span className="text-[#4F946A]">
                    {user.estimatedExposureReduction}
                  </span>

                </h3>

                <p className="text-[#6F8B7E] text-lg leading-relaxed mt-6">

                  AI recommends avoiding dense traffic
                  intersections and vulnerable exposure zones
                  during elevated pollution conditions.

                </p>
              </div>

              {/* health impact */}

              <div className="rounded-[32px] bg-[#FAFCFB] border border-[#D7E4DD] p-8 shadow-sm">

                <p className="uppercase tracking-[0.15em] text-[#7F998C] text-sm">
                  Health Impact
                </p>

                <div className="space-y-6 mt-8">

                  <div>

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-[#567366]">
                        Respiratory Stress
                      </span>

                      <span className="font-semibold text-[#D96C5C]">
                        HIGH
                      </span>
                    </div>

                    <div className="h-3 rounded-full bg-[#E9F0EC] overflow-hidden">
                      <div className="h-full w-[78%] bg-[#D96C5C]" />
                    </div>
                  </div>

                  <div>

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-[#567366]">
                        Cleaner Air Route
                      </span>

                      <span className="font-semibold text-[#4F946A]">
                        ACTIVE
                      </span>
                    </div>

                    <div className="h-3 rounded-full bg-[#E9F0EC] overflow-hidden">
                      <div className="h-full w-[86%] bg-[#5FA57B]" />
                    </div>
                  </div>

                  <div>

                    <div className="flex items-center justify-between mb-3">

                      <span className="text-[#567366]">
                        Vulnerable Exposure
                      </span>

                      <span className="font-semibold text-[#D8A84F]">
                        MODERATE
                      </span>
                    </div>

                    <div className="h-3 rounded-full bg-[#E9F0EC] overflow-hidden">
                      <div className="h-full w-[58%] bg-[#E5B95E]" />
                    </div>
                  </div>

                </div>
              </div>

              {/* guidance */}

              <div className="rounded-[32px] bg-[#FAFCFB] border border-[#D7E4DD] p-8 shadow-sm">

                <p className="uppercase tracking-[0.15em] text-[#7F998C] text-sm">
                  AI Safety Guidance
                </p>

                <div className="mt-8 space-y-5">

                  <div className="rounded-2xl bg-white border border-[#D9EADF] p-5">
                    Wear KF94 mask in traffic-heavy districts.
                  </div>

                  <div className="rounded-2xl bg-white border border-[#D9EADF] p-5">
                    Prefer subway transitions during peak PM2.5 hours.
                  </div>

                  <div className="rounded-2xl bg-white border border-[#D9EADF] p-5">
                    Pet-safe walking corridor available.
                  </div>

                  <div className="rounded-2xl bg-white border border-[#D9EADF] p-5">
                    Recommended for users with:
                    {" "}
                    <span className="font-semibold text-[#4F946A]">
                      {user.conditions.length > 0
                        ? user.conditions.join(", ")
                        : "general respiratory sensitivity"}
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}