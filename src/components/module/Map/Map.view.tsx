import React from "react";
import { MapProps } from "./Map.props";
import { Container } from "./Map.style";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customMarkerIcon from "../../../images/lelebaleLogo.png";

const Map = (props: MapProps): JSX.Element => {
  const position: [number, number] = [49.104431, -122.801094];
  const customIcon = new L.Icon({
    iconUrl: customMarkerIcon,
    iconSize: [50, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return (
    <div style={{ filter: "grayscale(50%)" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "60vh", width: "100%" }}
        scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={customIcon}>
          <Popup>Lele bale events place</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default React.memo(Map);
