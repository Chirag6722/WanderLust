document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("❌ Map container not found");
    return;
  }

  const location = mapContainer.dataset.location;
  console.log("📍 Location received:", location);

  const map = L.map("map").setView([20.5937, 78.9629], 5); // Default: India

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
  }).addTo(map);

  // Geocode location using Nominatim
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("📦 Geocoding result:", data);
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        map.setView([lat, lon], 13);
        L.marker([lat, lon]).addTo(map).bindPopup(`
        <div style="text-align: center;">
          <div style="font-size: 1.1rem; font-weight: bold;">${location}</div>
          <div style="font-size: 0.85rem; color: gray;">Exact location provided after booking.</div>
        </div>`)
        .openPopup();
      } else {
        console.error("❌ No matching location found");
      }
    })
    .catch((err) => console.error("❌ Geocoding failed:", err));
});