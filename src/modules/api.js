// Handles API request
const API_KEY = "AZSGBEG8HE3TNJT7AQQ7TUGTA"; 

export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    return {
      city: data.resolvedAddress,
      tempC: data.currentConditions.temp,
      condition: data.currentConditions.conditions,
    };
  } catch (error) {
    alert("Error fetching weather: " + error.message);
    return null;
  }
}
