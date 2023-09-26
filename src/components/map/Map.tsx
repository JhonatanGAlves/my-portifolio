import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function Map() {
  return (
    <MapContainer
      style={{ width: "100%", height: "28rem" }}
      center={[-22.316185104863003, -49.07139183427844]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-22.316185104863003, -49.07139183427844]}>
        <Popup>
          Bauru. <br /> São Paulo.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
