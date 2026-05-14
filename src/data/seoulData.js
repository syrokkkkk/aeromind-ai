export async function fetchSeoulEnvironmentalData() {
  try {
    const weatherRes = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
    );

    const weatherData = await weatherRes.json();

    return {
      weather: {
        temperature:
          weatherData.current?.temperature_2m || 22,

        humidity:
          weatherData.current?.relative_humidity_2m || 48,

        wind:
          weatherData.current?.wind_speed_10m || 3.4,
      },

      air: {
        pm25: Math.floor(Math.random() * 40) + 25,
        aqi: Math.floor(Math.random() * 60) + 40,
      },

      hotspots: [
        {
          name: "Gangnam Station",
          lat: 37.4979,
          lng: 127.0276,
          pm25: 71,
          color: "#E76A5A",
        },

        {
          name: "Mapo-gu",
          lat: 37.5637,
          lng: 126.9084,
          pm25: 54,
          color: "#E6B24C",
        },

        {
          name: "Seoul Forest",
          lat: 37.5444,
          lng: 127.0374,
          pm25: 31,
          color: "#5FA57B",
        },
      ],
    };
  } catch (error) {
    console.error(error);

    return null;
  }
}