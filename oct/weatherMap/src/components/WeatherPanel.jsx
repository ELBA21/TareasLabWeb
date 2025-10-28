import { useState, useEffect } from "react";
import useWeather from "../hooks/useWeather";

function WeatherPanel({ posicion }) {
  const { data, isLoading, error } = useWeather({ posicion: posicion });
  if (isLoading === true) {
    return <p>... Cargando</p>;
  }
  if (error === true) {
    return <p> ====E R R O R =====</p>;
  }

  if (data) {
    console.log("Datos recibido", data);

    return (
      <div>
        <h2>CLIMA EN TU ZONA</h2>
        <p>{data.hourly.temperature_2m[0]}</p>
      </div>
    );
  }
}

export default WeatherPanel;
