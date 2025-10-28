import { useState, useEffect } from "react";

function useWeather({ posicion }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${e.latlng.lat}&longitude=${e.latlng.lng}&hourly=temperature_2m`,
    )
      .then((r) => r.json())
      .then((datos) => {
        setData(datos);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [posicion]);
}
