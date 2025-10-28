import "leaflet/dist/leaflet";
import { useState } from "react";
import "./App.css";
import MapView from "./components/MapView";
import WeatherPanel from "./components/WeatherPanel";

function App() {
  const [posicion, setPosicion] = useState([-41.469, -72.942]);
  return (
    <div>
      <MapView posicion={posicion} setPosicion={setPosicion} />
      <WeatherPanel posicion={posicion} />
    </div>
  );
}

export default App;
