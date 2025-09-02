"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface CustomMapProps {
  address: string;
  className?: string;
}

export default function CustomMap({ address, className = "" }: CustomMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Ashara Health coordinates in Laguna Beach
    const lat = 33.5423;
    const lng = -117.7831;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [lat, lng],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    // Satellite imagery
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: " Esri",
        maxZoom: 19,
      }
    ).addTo(map);

    // Add labels overlay on top of satellite
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
      {
        attribution: " OpenStreetMap contributors CARTO",
        subdomains: "abcd",
        maxZoom: 19,
        opacity: 0.8,
      }
    ).addTo(map);

    // Custom marker icon with teal color
    const customIcon = L.divIcon({
      html: `
        <div class="relative">
          <div class="w-8 h-8 bg-teal-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <div class="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-teal-600"></div>
        </div>
      `,
      className: "custom-marker",
      iconSize: [32, 40],
      iconAnchor: [16, 40],
    });

    // Add marker
    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

    // Add popup
    marker.bindPopup(`
      <div class="text-center p-2">
        <h3 class="font-semibold text-stone-900 mb-1">Ashara Health & Wellness</h3>
        <p class="text-sm text-stone-600 mb-2">${address}</p>
        <a 
          href="https://maps.google.com/?q=${encodeURIComponent(
            address
          )}&navigate=yes" 
          target="_blank" 
          rel="noreferrer"
          class="inline-block bg-teal-600 text-white px-3 py-1 rounded text-sm hover:bg-teal-700 transition-colors"
        >
          Get Directions
        </a>
      </div>
    `);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [address]);

  return (
    <div
      ref={mapRef}
      className={`w-full h-full rounded-t-xl ${className}`}
      style={{ minHeight: "300px", zIndex: 1 }}
    />
  );
}
