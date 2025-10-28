import { useState, useEffect } from "react";

function useWeather({ posicion }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Establecemos controladores primero
    setLoading(true);
    setError(false);

    //Fetch llama al link, hay que usar `` pq sino no funca
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${posicion[0]}&longitude=${posicion[1]}&hourly=temperature_2m`,
    )
      .then((r) => r.json()) //Guardamos la respuesta en un json
      .then((datos) => {
        setData(datos); //Movemos el json a nuestro state "datos"
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [posicion]);
  return { data, isLoading, error };
}

export default useWeather;
