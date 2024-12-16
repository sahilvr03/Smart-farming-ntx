"use client";  
// src/components/MapComponent.jsx
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';  // Ensure Leaflet CSS is loaded

// Office locations data with images
const officeLocations = [
  {
    name: 'Sindh - Gadap, Pakistan',
    coordinates: [24.9020, 67.1367], // Coordinates for Gadap, Sindh
    images: ['/images/1.jpg', '/images/2.jpg'], // Example image paths
    info: 'A rural area located in Sindh, Pakistan.'
  },
  {
    name: 'Punjab - Fathepura, Pakistan',
    coordinates: [31.220200, 70.974937], // Coordinates for Lahore, Punjab (main city)
    images: ['/images/2.jpg', '/images/3.jpg'],
    info: 'A small town located in Punjab, Pakistan.'
  },
  {
    name: 'Punjab - Islamabad, Pakistan',
    coordinates: [33.673038, 72.984138], // Coordinates for Quetta, Balochistan (capital)
    images: ['/images/3.jpg', '/images/4.jpg'],
    info: 'The capital city of Pakistan, known for its greenery.'
  },
  {
    name: 'Balochistan, Pakistan',
    coordinates: [29.0092, 66.9293], // Coordinates for Quetta, Balochistan (capital)
    images: ['/images/4.jpg', '/images/5.jpg'],
    info: 'A province in southwestern Pakistan.'
  },
];

const MapMoveToLocation = ({ center }) => {
  const map = useMap();
  map.flyTo(center, 13, { animate: true, duration: 1 });
  return null;
};

const MapComponent = () => {
  const [mapCenter, setMapCenter] = useState([31.5497, 74.3436]); // Default center at Punjab, Lahore
  const [language, setLanguage] = useState('en'); // Default language is English

  const handleLocationClick = (coordinates) => {
    setMapCenter(coordinates);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const icon = new L.Icon({
    iconUrl: '/images/21.webp', // Ensure the image has a transparent background (PNG recommended)
    iconSize: [40, 51],  // Adjust the size of the icon
    iconAnchor: [12, 41],  // Set the point of the icon that should correspond to the marker's location
    popupAnchor: [1, -34], // Adjust the popup's position relative to the icon
    shadowUrl: null,  // Remove the shadow to keep the background transparent
    shadowSize: [0, 0], // Ensure there is no shadow
  });

  // Define the TileLayer URLs for different languages (Geo OSM layer)
  const tileUrls = {
    en: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", // Default Geo OSM tile
    es: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", // Spanish
    fr: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", // French
    // Additional language-specific tiles can be added here
  };

  return (
    <div className="relative h-96 mb-[10vh] md:mb-0">
      {/* Map Container */}
      <MapContainer center={mapCenter} zoom={13} style={{ width: '100%', height: '80%' }}>
        {/* Geo OSM TileLayer */}
        <TileLayer url={tileUrls[language]} />
        <MapMoveToLocation center={mapCenter} />

        {officeLocations.map((location, index) => (
          <Marker
            key={index}
            position={location.coordinates}
            icon={icon}
            eventHandlers={{
              click: () => handleLocationClick(location.coordinates),
            }}
          >
            <Popup>
              <div className="popup-content p-4 rounded-lg shadow-lg bg-white max-w-xs">
                <h4 className="text-xl font-semibold text-blue-600">{location.name}</h4>
                <p className="text-sm text-gray-600 mt-2">{location.info}</p>
                <div className="mt-2">
                  <h5 className="text-sm font-semibold text-gray-800">Images:</h5>
                  <div className="flex space-x-2 mt-2">
                    {location.images.slice(0, 2).map((image, i) => (
                      <img
                        key={i}
                        src={image}
                        alt={`Location image ${i + 1}`}
                        className="h-20 w-20 object-cover rounded-md border-2 border-gray-200"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Popup>
            <Tooltip direction="top" offset={[0, -30]} opacity={1} permanent>
              <div className="tooltip-content">
                <h4 className="text-sm font-semibold">{location.name}</h4>
                <p className="text-xs text-gray-500">{location.info}</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Location Buttons */}
      <div className="mt-4 mb-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {officeLocations.map((location, index) => (
          <button
            key={index}
            className="p-6 bg-sky-400 rounded-lg shadow cursor-pointer"
            onClick={() => handleLocationClick(location.coordinates)}
          >
            <h3 className="text-sm sm:text-xs font-bold">{location.name}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

// Dynamically load the component to avoid SSR issues
export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });
