'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';

// Fix for default marker icon in Leaflet with Next.js/Webpack
const iconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface InteractiveMapProps {
    attractions: any[];
}

export default function InteractiveMap({ attractions }: InteractiveMapProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="h-[600px] w-full bg-muted flex items-center justify-center">Loading Map...</div>;
    }

    return (
        <MapContainer
            center={[4.5709, -74.2973]} // Center of Colombia
            zoom={6}
            style={{ height: '600px', width: '100%', zIndex: 1 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {attractions.map((attraction) => (
                <Marker
                    key={attraction.id}
                    position={[parseFloat(attraction.latitude), parseFloat(attraction.longitude)]}
                    icon={defaultIcon}
                >
                    <Popup>
                        <div className="max-w-xs">
                            <h3 className="font-bold text-sm mb-1">{attraction.name}</h3>
                            <p className="text-xs line-clamp-3">{attraction.description}</p>
                            {attraction.images && attraction.images.length > 0 && (
                                <img
                                    src={attraction.images[0]}
                                    alt={attraction.name}
                                    className="mt-2 h-20 w-full object-cover rounded"
                                />
                            )}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
