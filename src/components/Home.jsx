import "./Home.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";
import Marcadores from "./Marcadores";

export default function Home() {
  return (
    <div className="Home">
      <div className="leaflet-container">
        <MapContainer
          center={[-31.392948451346864, -64.18754534214315]}
          zoom={5}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marcadores/>
        </MapContainer>
      </div>
    </div>
  );
}
