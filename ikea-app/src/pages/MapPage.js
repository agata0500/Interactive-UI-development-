import React, { useMemo } from "react";
import BottomNav from "../components/BottomNav";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapPage.css";

// Fix default marker icons in CRA/Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = new L.Icon({
iconUrl: markerIcon,
iconRetinaUrl: markerIcon2x,
shadowUrl: markerShadow,
iconSize: [25, 41],
iconAnchor: [12, 41],
popupAnchor: [1, -34],
shadowSize: [41, 41],
});

const belgiumCenter = [50.5039, 4.4699]; // center of Belgium

// IKEA Belgium locations (name, address, coords)
const stores = [
{
name: "IKEA Anderlecht (Brussels)",
address: "Bd. Industriel 20, 1070 Anderlecht",
lat: 50.8305,
lng: 4.2876,
},
{
name: "IKEA Zaventem (Brussels)",
address: "Weiveldlaan 19, 1930 Zaventem",
lat: 50.889,
lng: 4.458,
},
{
name: "IKEA Gent",
address: "Akkerhage 10, 9000 Gent",
lat: 51.026,
lng: 3.705,
},
{
name: "IKEA Wilrijk (Antwerp)",
address: "Boomsesteenweg 755, 2610 Wilrijk",
lat: 51.173,
lng: 4.389,
},
{
name: "IKEA Hasselt",
address: "IKEA-plein 1, 3500 Hasselt",
lat: 50.948,
lng: 5.476,
},
{
name: "IKEA Hognoul (Liège)",
address: "Rue du Bassin 5, 4342 Hognoul",
lat: 50.671,
lng: 5.459,
},
{
name: "IKEA Mons",
address: "Ctre Cial Les Grands Prés, 7000 Mons",
lat: 50.448,
lng: 3.944,
},
{
name: "IKEA Arlon",
address: "Rue de Grass 2, 6700 Arlon",
lat: 49.683,
lng: 5.825,
},
];

function MapPage() {
const markers = useMemo(
() =>
stores.map((s) => (
<Marker key={s.name} position={[s.lat, s.lng]} icon={defaultIcon}>
<Popup>
<strong>{s.name}</strong>
<br />
{s.address}
<br />
<a
href={`https://www.google.com/maps?q=${encodeURIComponent(
`${s.name} ${s.address}`
)}`}
target="_blank"
rel="noopener noreferrer"
>
Open in Maps →
</a>
</Popup>
</Marker>
)),
[]
);

return (
<div className="map-page">
<header className="map-header">IKEA Stores in Belgium</header>

<div className="map-wrapper">
<MapContainer
center={belgiumCenter}
zoom={8}
scrollWheelZoom={true}
className="map-canvas"
>
<TileLayer
attribution='&copy; OpenStreetMap contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
{markers}
</MapContainer>
</div>

<BottomNav />
</div>
);
}

export default MapPage;