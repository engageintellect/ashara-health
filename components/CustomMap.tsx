"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import L from "leaflet";

interface CustomMapProps {
  address: string;
  className?: string;
}

export default function CustomMap({ address, className = "" }: CustomMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=32406+S+Coast+Hwy+Laguna+Beach+CA+92651`;
    window.open(googleMapsUrl, '_blank');
  };

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Create custom teal marker icon matching theme colors
    const customIcon = L.divIcon({
      html: `
        <svg width="48" height="60" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0d9488" stroke="#ffffff" stroke-width="0.5"/>
        </svg>
      `,
      className: 'custom-marker',
      iconSize: [48, 60],
      iconAnchor: [24, 60],
      popupAnchor: [0, -60]
    });

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [33.5427, -117.7831],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false,
      doubleClickZoom: true,
      dragging: true,
    });

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add custom marker
    const marker = L.marker([33.5427, -117.7831], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div style="text-align: center; padding: 8px;">
          <strong style="color: #0f3d36;">Ashara Health & Wellness</strong><br>
          <span style="color: #666; font-size: 12px;">32406 S Coast Hwy<br>Laguna Beach, CA 92651</span><br>
          <button onclick="window.open('https://www.google.com/maps/search/?api=1&query=32406+S+Coast+Hwy+Laguna+Beach+CA+92651', '_blank')" 
                  style="
                    background: #0f3d36; 
                    color: white; 
                    border: none; 
                    padding: 6px 12px; 
                    border-radius: 6px; 
                    cursor: pointer; 
                    margin-top: 8px;
                    font-size: 12px;
                  ">
            Get Directions
          </button>
        </div>
      `);

    // Store map instance
    mapInstanceRef.current = map;

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full rounded-t-xl overflow-hidden ${className}`} style={{ minHeight: "300px" }}>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      
      {/* Map container */}
      <div 
        ref={mapRef}
        className="w-full h-full cursor-pointer"
        style={{ minHeight: "300px" }}
      />
      
      {/* Fallback click handler for entire map */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1000 }}
      >
        <div 
          className="absolute top-4 right-4 bg-white dark:bg-stone-800 rounded-lg shadow-lg p-2 pointer-events-auto cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
          onClick={openInGoogleMaps}
          title="Open in Google Maps"
        >
          <Icon icon="mdi:open-in-new" className="w-5 h-5 text-stone-600 dark:text-stone-400" />
        </div>
      </div>
    </div>
  );
}
