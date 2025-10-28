import "leaflet/dist/leaflet"
import { useState } from 'react'
import './App.css'
import MapView from "./components/MapView"
function App() {
  const [posicion, setPosicion] = useState([-41.469, -72.942])
  return (
    <MapView posicion={posicion} setPosicion={setPosicion} />




  )
}

export default App
