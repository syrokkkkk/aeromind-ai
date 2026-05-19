import { useState } from "react";

export default function NewUserForm({ onAddUser }) {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    district: "",
    occupation: "",
    conditions: [],
    transport: "Walking",
    routePriority: "Lowest Pollution",
    startPoint: "",
    destination: "",
  });

  const healthConditions = [
    "Asthma",
    "Allergies",
    "Cardiovascular disease",
    "Respiratory sensitivity",
    "COPD",
    "Diabetes",
    "Pregnancy",
    "Elderly",
    "Child",
    "Immunocompromised",
    "Other",
    "No conditions",
  ];

  const districts = [
    "Gangnam-gu",
    "Mapo-gu",
    "Yongsan-gu",
    "Jongno-gu",
    "Seocho-gu",
    "Yeouido",
  ];

  const locations = [
    "Gangnam Station",
    "Hongdae",
    "Yongsan",
    "Jongno",
    "Mapo",
    "Yeouido",
    "City Hall",
    "Seoul Forest",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleCondition = (condition) => {

    if (
      formData.conditions.includes(condition)
    ) {

      setFormData({
        ...formData,
        conditions:
          formData.conditions.filter(
            (item) => item !== condition
          ),
      });

    } else {

      setFormData({
        ...formData,
        conditions: [
          ...formData.conditions,
          condition,
        ],
      });
    }
  };

  const generateExposureScore = () => {

    let score = 35;

    if (
      formData.conditions.includes(
        "Asthma"
      )
    ) {
      score += 18;
    }

    if (
      formData.conditions.includes(
        "Cardiovascular disease"
      )
    ) {
      score += 22;
    }

    if (
      formData.conditions.includes(
        "Respiratory sensitivity"
      )
    ) {
      score += 16;
    }

    if (
      formData.conditions.includes(
        "COPD"
      )
    ) {
      score += 24;
    }

    if (
      formData.transport === "Walking"
    ) {
      score += 12;
    }

    if (
      formData.transport === "Bike"
    ) {
      score += 8;
    }

    if (
      formData.routePriority ===
      "Lowest Pollution"
    ) {
      score -= 10;
    }

    return Math.max(
      15,
      Math.min(score, 95)
    );
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const exposureScore =
      generateExposureScore();

    const newUser = {
      id: Date.now(),
      ...formData,
      exposureScore,
      recommendedRoute:
        exposureScore > 70
          ? "Protected Green Corridor"
          : exposureScore > 50
          ? "Balanced Urban Route"
          : "Low Exposure Route",

      estimatedExposureReduction:
        exposureScore > 70
          ? "34%"
          : "18%",
    };

    onAddUser(newUser);

    

    setFormData({
      name: "",
      age: "",
      gender: "",
      district: "",
      occupation: "",
      conditions: [],
      transport: "Walking",
      routePriority: "Lowest Pollution",
      startPoint: "",
      destination: "",
    });
  };

  return (
    <section className="relative py-24">

      <div className="section-container">

        <div className="glass-panel rounded-[40px] p-10">

          <div className="mb-14">

            <p className="uppercase tracking-[0.2em] text-[#7FA28F] text-sm">
              AI HEALTH ROUTING SYSTEM
            </p>

            <h2 className="text-5xl font-bold mt-5">
              Personalized Safe Route Generator
            </h2>

            <p className="text-[#7F998C] text-xl mt-6 max-w-4xl leading-relaxed">
              AI-generated pollution-aware navigation
              based on respiratory health,
              mobility behavior,
              environmental exposure,
              and smart-city analytics.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid lg:grid-cols-2 gap-14"
          >

            {/* LEFT */}

            <div className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white border border-[#D7E4DD] rounded-[24px] px-6 py-5 text-[#1D2B24] shadow-sm"
              />

              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full bg-white border border-[#D7E4DD] rounded-[24px] px-6 py-5 text-[#1D2B24] shadow-sm"
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-white border border-[#D7E4DD] rounded-[24px] px-6 py-5 text-[#1D2B24] shadow-sm"
              >
                <option value="">
                  Select Gender
                </option>

                <option>
                  Female
                </option>

                <option>
                  Male
                </option>

                <option>
                  Other
                </option>
              </select>

              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full bg-white border border-[#D7E4DD] rounded-[24px] px-6 py-5 text-[#1D2B24] shadow-sm"
              >
                <option value="">
                  Select District
                </option>

                {districts.map((district) => (
                  <option key={district}>
                    {district}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full bg-white border border-[#D7E4DD] rounded-[24px] px-6 py-5 text-[#1D2B24] shadow-sm"
              />

              <select
                name="startPoint"
                value={formData.startPoint}
                onChange={handleChange}
                className="w-full bg-white border border-[#D7E4DD] rounded-[24px] px-6 py-5 text-[#1D2B24] shadow-sm"
              >
                <option value="">
                  Start Point
                </option>

                {locations.map((location) => (
                  <option key={location}>
                    {location}
                  </option>
                ))}
              </select>

              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full bg-white border border-[#D7E4DD] rounded-[24px] px-6 py-5 text-[#1D2B24] shadow-sm"
              >
                <option value="">
                  Destination
                </option>

                {locations.map((location) => (
                  <option key={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* RIGHT */}

            <div className="space-y-10">

              <div>

                <p className="text-[#6B8578] mb-6 uppercase tracking-[0.18em] text-sm">
                  Health Conditions
                </p>

                <div className="grid grid-cols-2 gap-4">

                  {healthConditions.map((condition) => {

                    const active =
                      formData.conditions.includes(
                        condition
                      );

                    return (
                      <button
                        key={condition}
                        type="button"
                        onClick={() =>
                          toggleCondition(condition)
                        }
                        className={`rounded-[24px] border p-5 text-left transition-all duration-300

                          ${
                            active
                              ? "bg-[#E8F4EC] border-[#7AB394] shadow-[0_10px_30px_rgba(90,140,110,0.12)]"
                              : "bg-white border-[#D7E4DD] hover:border-[#8FB6A2]"
                          }
                        `}
                      >

                        <div className="flex items-center justify-between">

                          <h4
                            className={`text-lg font-semibold

                              ${
                                active
                                  ? "text-[#244436]"
                                  : "text-[#30483E]"
                              }
                            `}
                          >
                            {condition}
                          </h4>

                          <div
                            className={`w-6 h-6 rounded-full border transition-all

                              ${
                                active
                                  ? "bg-[#5D9C77] border-[#5D9C77]"
                                  : "border-[#9BB7A8]"
                              }
                            `}
                          />
                        </div>

                        <p className="text-[#6F8B7E] text-sm mt-3 leading-relaxed">

                          {condition === "Asthma" &&
                            "Reduce exposure to traffic and PM2.5 hotspots."}

                          {condition === "Allergies" &&
                            "Minimize pollen and urban particulate exposure."}

                          {condition === "Cardiovascular disease" &&
                            "Avoid high-emission and dense congestion zones."}

                          {condition === "Respiratory sensitivity" &&
                            "Optimize cleaner airflow corridors."}

                          {condition === "COPD" &&
                            "Prioritize low-pollution transit routes."}

                          {condition === "Diabetes" &&
                            "Reduce prolonged pollution exposure duration."}

                          {condition === "Pregnancy" &&
                            "Prioritize cleaner and lower-stress mobility."}

                          {condition === "Elderly" &&
                            "Avoid steep walking and polluted intersections."}

                          {condition === "Child" &&
                            "Protect from high-density PM2.5 exposure."}

                          {condition === "Immunocompromised" &&
                            "Minimize environmental health risk exposure."}

                          {condition === "Other" &&
                            "Custom environmental sensitivity profile."}

                          {condition === "No conditions" &&
                            "Standard exposure optimization mode."}

                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>

                <p className="text-[#6B8578] mb-5 uppercase tracking-[0.15em] text-sm">
                  Transport Type
                </p>

                <div className="flex flex-wrap gap-4">

                  {[
                    "Walking",
                    "Subway",
                    "Bus",
                    "Bike",
                    "Car",
                  ].map((transport) => (

                    <button
                      key={transport}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          transport,
                        })
                      }
                      className={`px-6 py-4 rounded-[22px] border transition-all

                        ${
                          formData.transport ===
                          transport
                            ? "bg-[#E8F4EC] border-[#67B185] text-[#244436]"
                            : "bg-white border-[#D7E4DD] text-[#567366]"
                        }
                      `}
                    >
                      {transport}
                    </button>
                  ))}
                </div>
              </div>

              <div>

                <p className="text-[#6B8578] mb-5 uppercase tracking-[0.15em] text-sm">
                  Route Priority
                </p>

                <select
                  name="routePriority"
                  value={formData.routePriority}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#D7E4DD] rounded-[24px] px-6 py-5 text-[#1D2B24] shadow-sm"
                >
                  <option>
                    Lowest Pollution
                  </option>

                  <option>
                    Fastest Route
                  </option>

                  <option>
                    Balanced
                  </option>

                  <option>
                    Green Corridors
                  </option>

                  <option>
                    Hospital Access
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-6 rounded-[24px] bg-[#2E624B] hover:bg-[#3C7B5E] transition-all text-white font-semibold text-lg shadow-[0_15px_40px_rgba(60,123,94,0.2)]"
              >
                Generate AI Safe Route
              </button>

            </div>

          </form>
        </div>
      </div>
    </section>
  );
}