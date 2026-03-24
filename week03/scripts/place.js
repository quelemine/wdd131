const year = document.getElementById("year");
const modified = document.getElementById("modified");

year.textContent = new Date().getFullYear();
modified.textContent = document.lastModified;

// wind chill
function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const wc = document.getElementById("windchill");

if (temp <= 10 && wind > 4.8) {
  wc.textContent = calculateWindChill(temp, wind).toFixed(1) + " °C";
} else {
  wc.textContent = "N/A";
}