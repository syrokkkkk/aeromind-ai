import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";

import { fetchSeoulEnvironmentalData } from "../../data/seoulData";

export default function LiveMap() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await fetchSeoulEnvironmentalData();

      setData(result);
    }

    loadData();
  }, []);

  const route = [
    [37.498, 127.026],
    [37.505, 127.04],
    [37.515, 127.055],
  ];

  if (!data) {
    return (
      <section className="section-container pt-32">
        <div className="text-center text-3xl">
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

        <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
          Real-Time Seoul Air Network
        </h2>

        <p className="mt-8 text-2xl text-[#60796D] max-w-4xl mx-auto leading-relaxed">
          AeroMind continuously processes atmospheric, mobility,
          and environmental intelligence streams across Seoul.
        </p>
      </div>

      <div className="glass-card rounded-[42px] border border-[#DCE9E2] overflow-hidden p-8">

        <div className="grid lg:grid-cols-5 gap-8 mb-8">

          <div className="bg-[#EDF8F1] rounded-[28px] p-6">

            <p className="text-sm uppercase tracking-[0.18em] text-[#5F8F7B] font-semibold">
              PM2.5
            </p>

            <h3 className="text-5xl font-bold mt-4 text-[#2F7C5B]">
              {data.air.pm25}
            </h3>
          </div>

          <div className="bg-[#EEF4FA] rounded-[28px] p-6">

            <p className="text-sm uppercase tracking-[0.18em] text-[#5A88B5] font-semibold">
              AQI
            </p>

            <h3 className="text-5xl font-bold mt-4 text-[#5A88B5]">
              {data.air.aqi}
            </h3>
          </div>

          <div className="bg-[#FFF3E8] rounded-[28px] p-6">

            <p className="text-sm uppercase tracking-[0.18em] text-[#D9981E] font-semibold">
              Temperature
            </p>

            <h3 className="text-5xl font-bold mt-4 text-[#D9981E]">
              {data.weather.temperature}°
            </h3>
          </div>

          <div className="bg-[#FDEEEB] rounded-[28px] p-6">

            <p className="text-sm uppercase tracking-[0.18em] text-[#D96C5C] font-semibold">
              Humidity
            </p>

            <h3 className="text-5xl font-bold mt-4 text-[#D96C5C]">
              {data.weather.humidity}%
            </h3>
          </div>

          <div className="bg-[#EEF5F1] rounded-[28px] p-6">

            <p className="text-sm uppercase tracking-[0.18em] text-[#4F8A70] font-semibold">
              Wind
            </p>

            <h3 className="text-5xl font-bold mt-4 text-[#2F7C5B]">
              {data.weather.wind}
            </h3>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[#DCE9E2]">

          <MapContainer
            center={[37.5665, 126.978]}
            zoom={11}
            scrollWheelZoom={false}
            className="h-[720px] w-full"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {data.hotspots.map((spot) => (
              <CircleMarker
                key={spot.name}
                center={[spot.lat, spot.lng]}
                radius={22}
                pathOptions={{
                  color: spot.color,
                  fillColor: spot.color,
                  fillOpacity: 0.55,
                }}
              >
                <Popup>
                  <div>
                    <strong>{spot.name}</strong>

                    <br />

                    PM2.5: {spot.pm25}
                  </div>
                </Popup>
              </CircleMarker>
            ))}

            <Polyline
              positions={route}
              pathOptions={{
                color: "#2F7C5B",
                weight: 8,
                dashArray: "16 12",
              }}
            />
          </MapContainer>
        </div>
      </div>
    </section>
  );
}