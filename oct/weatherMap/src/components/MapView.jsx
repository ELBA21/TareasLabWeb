import { CircleMarker, MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";
import { useState, useMemo, useRef, useEffect } from "react";
function HandleMapa({ setPosicion }) {
  const map = useMap();
  useEffect(() => {
    const handleMapClick = (e) => {
      console.log("Coordenadas del clic:", e.latlng);

      const nuevaPosicionArray = [e.latlng.lat, e.latlng.lng];

      setPosicion(nuevaPosicionArray);
    };

    map.on("click", handleMapClick);

    return () => {
      map.off("click", handleMapClick);
    };
  }, [map]);
  return null;
}

function MapView({ posicion, setPosicion }) {
  return (
    <div>
      <MapContainer
        center={posicion}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: 950, width: 1200 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <HandleMapa setPosicion={setPosicion} />

        <Marker position={posicion}>
          <Popup> {posicion}</Popup>
        </Marker>
      </MapContainer>
      <div>
        <p>Su posicion es {posicion.toString()} </p>
      </div>
    </div>
  );
}

export default MapView;
