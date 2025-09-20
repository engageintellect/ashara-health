"use client";

interface CustomMapProps {
  address: string;
  className?: string;
}

export default function CustomMap({ address, className = "" }: CustomMapProps) {
  // Temporary static map using Google Maps embed
  const encodedAddress = encodeURIComponent("32406 S Coast Hwy, Laguna Beach, CA 92651");
  
  return (
    <div className={`w-full h-full rounded-t-xl overflow-hidden ${className}`} style={{ minHeight: "300px" }}>
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dw901SwHSdqNXM&q=${encodedAddress}&zoom=15&maptype=satellite`}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "300px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ashara Health & Wellness Location"
      />
    </div>
  );
}
