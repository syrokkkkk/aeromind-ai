import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Popup,
  Polyline,
  Marker,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";

import { fetchSeoulEnvironmentalData } from "../../data/seoulData";

const pollutionZones = [

  {
    name: "Gangnam Traffic Core",
    position: [37.4979, 127.0276],
    pollution: 89,
    color: "#D96C5C",
    radius: 1400,
  },

  {
    name: "Yongsan Industrial Belt",
    position: [37.5311, 126.981],
    pollution: 77,
    color: "#D96C5C",
    radius: 1200,
  },

  {
    name: "Mapo Green Recovery",
    position: [37.5637, 126.9084],
    pollution: 29,
    color: "#5FA57B",
    radius: 1600,
  },

  {
    name: "Jongno Dense Urban Zone",
    position: [37.5729, 126.9794],
    pollution: 71,
    color: "#E2B55D",
    radius: 1200,
  },

  {
    name: "COEX Commercial Corridor",
    position: [37.5125, 127.0588],
    pollution: 84,
    color: "#D96C5C",
    radius: 1200,
  },

  {
    name: "Seoul Forest Eco Zone",
    position: [37.5444, 127.0374],
    pollution: 18,
    color: "#5FA57B",
    radius: 1800,
  },

  {
    name: "Dongdaemun Traffic Layer",
    position: [37.5663, 127.0094],
    pollution: 69,
    color: "#D96C5C",
    radius: 1000,
  },

  {
    name: "Yeouido Financial District",
    position: [37.5219, 126.9245],
    pollution: 62,
    color: "#E2B55D",
    radius: 1100,
  },

  {
    name: "Songpa Residential Area",
    position: [37.5145, 127.1059],
    pollution: 34,
    color: "#5FA57B",
    radius: 1400,
  },

  {
    name: "Gangseo Airport Corridor",
    position: [37.5583, 126.7906],
    pollution: 82,
    color: "#D96C5C",
    radius: 1700,
  },

  {
    name: "Namsan Protected Forest",
    position: [37.5512, 126.9882],
    pollution: 16,
    color: "#5FA57B",
    radius: 1900,
  },

  {
    name: "Hongdae Night Mobility",
    position: [37.5563, 126.9236],
    pollution: 58,
    color: "#E2B55D",
    radius: 900,
  },

  {
    name: "Jamsil Smart District",
    position: [37.5133, 127.1002],
    pollution: 41,
    color: "#5EA4FF",
    radius: 1200,
  },

  {
    name: "Seodaemun Education Cluster",
    position: [37.5794, 126.9368],
    pollution: 27,
    color: "#5EA4FF",
    radius: 1500,
  },

  {
    name: "Itaewon Congestion Zone",
    position: [37.5347, 126.9946],
    pollution: 74,
    color: "#D96C5C",
    radius: 1000,
  },

];

const hospitals = [

  {
    name: "Seoul National University Hospital",
    position: [37.5796, 126.997],
  },

  {
    name: "Samsung Medical Center",
    position: [37.4881, 127.0857],
  },

  {
    name: "Yonsei Severance Hospital",
    position: [37.5635, 126.941],
  },

  {
    name: "Asan Medical Center",
    position: [37.5265, 127.1088],
  },

];

const schools = [

  {
    name: "Yonsei University",
    position: [37.5658, 126.9386],
  },

  {
    name: "Korea University",
    position: [37.5894, 127.0324],
  },

  {
    name: "Seoul National University",
    position: [37.4599, 126.9519],
  },

  {
    name: "Ewha Womans University",
    position: [37.5618, 126.9468],
  },

  {
    name: "Hanyang University",
    position: [37.5563, 127.0458],
  },

];

const subwayStations = [

  {
    name: "Gangnam Station",
    position: [37.4979, 127.0276],
  },

  {
    name: "Seoul Station",
    position: [37.5547, 126.9706],
  },

  {
    name: "Hongdae Station",
    position: [37.5572, 126.9254],
  },

  {
    name: "Jamsil Station",
    position: [37.5133, 127.1002],
  },

];

const districtRoutes = {

  Gangnam: {
    safe: [
      [37.4979, 127.0276],
      [37.506, 127.015],
      [37.518, 127.01],
      [37.529, 127.018],
      [37.5444, 127.0374],
    ],

    danger: [
      [37.4979, 127.0276],
      [37.51, 127.04],
      [37.525, 127.052],
      [37.5444, 127.0374],
    ],
  },

  Mapo: {
    safe: [
      [37.5637, 126.9084],
      [37.556, 126.905],
      [37.548, 126.91],
      [37.536, 126.918],
      [37.5219, 126.9245],
    ],

    danger: [
      [37.5637, 126.9084],
      [37.552, 126.919],
      [37.541, 126.923],
      [37.5219, 126.9245],
    ],
  },

  Jongno: {
    safe: [
      [37.5729, 126.9794],
      [37.568, 126.975],
      [37.561, 126.981],
      [37.5512, 126.9882],
    ],

    danger: [
      [37.5729, 126.9794],
      [37.566, 126.985],
      [37.558, 126.99],
      [37.5512, 126.9882],
    ],
  },
};

export default function LiveMap() {

  const [data, setData] = useState(null);

  const [selectedDistrict, setSelectedDistrict] =
    useState("Gangnam");

  const [timeMode, setTimeMode] =
    useState("Morning");

  const activeRoutes =
    districtRoutes[selectedDistrict];

  const pollutionMultiplier = {

    Morning: 1.2,
    Afternoon: 0.8,
    Evening: 1.4,
    Night: 0.6,

  };

  const adjustedZones =
    pollutionZones.map((zone) => ({

      ...zone,

      pollution: Math.round(
        zone.pollution *
        pollutionMultiplier[timeMode]
      ),

      radius:
        zone.radius *
        pollutionMultiplier[timeMode],

    }));

  useEffect(() => {

    async function loadData() {

      const result =
        await fetchSeoulEnvironmentalData();

      setData(result);
    }

    loadData();

  }, []);

  if (!data) {

    return (
      <section className="section-container pt-32">

        <div className="text-center text-3xl text-[#567366]">
          Loading Seoul environmental intelligence...
        </div>

      </section>
    );
  }

  return (
    <section className="section-container pt-32">

      <div className="text-center mb-20">

        <div className="inline-flex px-5 py-2 rounded-full bg-[#DDEDE4] text-[#5F8F7B] tracking-[0.2em] uppercase text-sm font-semibold">
          Live Environmental Intelligence
        </div>

        <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] text-[#18342B]">
          Real-Time Seoul Air Network
        </h2>

        <p className="mt-6 text-xl text-[#5E786B]">
          Simulation Mode:
          {" "}
          <span className="font-bold text-[#18342B]">
            {timeMode}
          </span>
        </p>

      </div>

      <div className="rounded-[42px] bg-white border border-[#DCE9E2] overflow-hidden p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

        <div className="w-full flex flex-wrap gap-4 mb-6">

          {["Morning", "Afternoon", "Evening", "Night"]
            .map((time) => (

              <button
                key={time}
                onClick={() => setTimeMode(time)}
                className={`px-5 py-3 rounded-full border font-semibold transition-all duration-300 ${
                  timeMode === time
                    ? "bg-[#18342B] text-white border-[#18342B]"
                    : "bg-white text-[#47695B] border-[#DCE9E2]"
                }`}
              >
                {time}
              </button>

          ))}

        </div>

        <div className="flex flex-wrap gap-4 mb-10">

          {Object.keys(districtRoutes).map((district) => (

            <button
              key={district}
              onClick={() => setSelectedDistrict(district)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 font-semibold ${
                selectedDistrict === district
                  ? "bg-[#2F7C5B] text-white border-[#2F7C5B]"
                  : "bg-white text-[#44695A] border-[#DCE9E2]"
              }`}
            >
              {district}
            </button>

          ))}

        </div>

        <div className="overflow-hidden rounded-[32px] border border-[#DCE9E2]">

          <MapContainer
            center={[37.5665, 126.978]}
            zoom={12}
            scrollWheelZoom={true}
            className="h-[1200px] w-full"
          >

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {adjustedZones.map((zone) => (

              <Circle
                key={zone.name}
                center={zone.position}
                radius={zone.radius}
                pathOptions={{
                  fillColor: zone.color,
                  color: zone.color,
                  fillOpacity: 0.28,
                }}
              >
                <Popup>

                  <div className="min-w-[220px]">

                    <strong className="text-lg">
                      {zone.name}
                    </strong>

                    <br />
                    <br />

                    Pollution Index:
                    {" "}
                    <strong>
                      {zone.pollution}
                    </strong>

                    <br />
                    <br />

                    Time Simulation:
                    {" "}
                    {timeMode}

                  </div>

                </Popup>
              </Circle>

            ))}

            {data.hotspots.map((spot) => (

              <CircleMarker
                key={spot.name}
                center={[spot.lat, spot.lng]}
                radius={24}
                pathOptions={{
                  color: spot.color,
                  fillColor: spot.color,
                  fillOpacity: 0.65,
                }}
              >
                <Popup>

                  <div>

                    <strong>
                      {spot.name}
                    </strong>

                    <br />

                    PM2.5: {spot.pm25}

                  </div>

                </Popup>
              </CircleMarker>

            ))}

            {hospitals.map((hospital) => (

              <Marker
                key={hospital.name}
                position={hospital.position}
              >
                <Popup>
                  🏥 {hospital.name}
                </Popup>
              </Marker>

            ))}

            {schools.map((school) => (

              <Marker
                key={school.name}
                position={school.position}
              >
                <Popup>
                  🎓 {school.name}
                </Popup>
              </Marker>

            ))}

            {subwayStations.map((station) => (

              <Marker
                key={station.name}
                position={station.position}
              >
                <Popup>
                  🚇 {station.name}
                </Popup>
              </Marker>

            ))}

            <Polyline
              positions={activeRoutes.safe}
              pathOptions={{
                color: "#2F7C5B",
                weight: 12,
                dashArray: "16 12",
              }}
            />

            <Polyline
              positions={activeRoutes.danger}
              pathOptions={{
                color: "#D96C5C",
                weight: 10,
                opacity: 0.7,
              }}
            />

          </MapContainer>
        </div>
      </div>
    </section>
  );
}