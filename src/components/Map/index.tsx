import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';

const Map = () => {
  const mapCenter: LatLngExpression = [21.0069401, 105.825429];
  const mapZoom = 30;
  const size = 40;
  return (
    <div className="relative">
      <MapContainer center={mapCenter} zoom={mapZoom} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={mapCenter}
          icon={L.icon({
            iconSize: [size, size],
            iconAnchor: [size / 2, size + 9],
            className: 'mymarker',
            iconUrl: '/images/marker.png',
          })}
          title="Student Informatic Club"
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
