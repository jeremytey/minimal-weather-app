import { getWeather } from "./modules/api.js";
import { displayWeather } from "./modules/ui.js";
import { toggleTempUnit } from "./modules/helpers.js";

const form = document.querySelector("#weatherForm");
const input = document.querySelector("#cityInput");
const toggleBtn = document.querySelector("#toggleTemp");

let currentData = null;
let isCelsius = true;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = input.value.trim();
  if (!city) return;

  currentData = await getWeather(city);
  displayWeather(currentData, isCelsius);
});

toggleBtn.addEventListener("click", () => {
  if (!currentData) return;
  isCelsius = toggleTempUnit(isCelsius);
  toggleBtn.textContent = isCelsius ? "Show °F" : "Show °C";
  displayWeather(currentData, isCelsius);
});
