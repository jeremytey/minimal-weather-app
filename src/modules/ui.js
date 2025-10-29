// Handles all DOM interactions
export function displayWeather(data, isCelsius) {
  const cityEl = document.querySelector("#cityName");
  const tempEl = document.querySelector("#temp");
  const conditionEl = document.querySelector("#condition");
  const weatherBox = document.querySelector("#weatherDisplay");

  if (!data) return;

  cityEl.textContent = data.city;
  tempEl.textContent = isCelsius
    ? `${data.tempC.toFixed(1)} °C`
    : `${(data.tempC * 9) / 5 + 32} °F`;
  conditionEl.textContent = data.condition;

  // Background color by condition
  document.body.style.backgroundColor =
    data.condition.toLowerCase().includes("rain") ? "#87cefa" : "#f5deb3";

  weatherBox.classList.remove("hidden");
}
