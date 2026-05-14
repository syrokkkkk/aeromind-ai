import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { time: "06:00", value: 61, color: "#E57C6D" },
  { time: "08:00", value: 71, color: "#E57C6D" },
  { time: "10:00", value: 54, color: "#E8B653" },
  { time: "12:00", value: 42, color: "#E8B653" },
  { time: "14:00", value: 31, color: "#7FC28A" },
  { time: "16:00", value: 34, color: "#7FC28A" },
  { time: "18:00", value: 49, color: "#E8B653" },
  { time: "20:00", value: 66, color: "#E57C6D" },
];

export default function PollutionChart() {
  return (
    <div className="bg-white rounded-[28px] p-6 border border-[#DCE8E1] shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm tracking-[0.2em] uppercase text-[#5F8F7B] font-semibold">
            PM2.5 Forecast
          </p>
          <h3 className="text-4xl font-bold mt-2 text-[#183028]">
            47
            <span className="text-lg text-gray-400 ml-1">μg/m³</span>
          </h3>
        </div>

        <div className="px-4 py-2 rounded-full bg-[#FFF3E2] text-[#D9981E] font-medium text-sm">
          Moderate
        </div>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8CA398", fontSize: 12 }}
            />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[12, 12, 12, 12]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
