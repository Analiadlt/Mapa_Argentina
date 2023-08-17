import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./Marcadores.css";
import markers from "../data/data.json";
import PopUpMarker from "./PopUpMarker";

export default function Marcadores() {
  const customIcon = new Icon({
    iconUrl: "locationMarker1.png",
    // iconSize: [38,38],
  });
  return (
    <div>
      {markers.map((marker) => (
        <Marker key={marker.geocode} position={marker.geocode} icon={customIcon}>
          {/* <Popup>{marker.popUp.provincia}</Popup> */}
          <Popup>
            <PopUpMarker data ={marker.popUp}/>
          </Popup>
        </Marker>
      ))}
    </div>
  );
}
