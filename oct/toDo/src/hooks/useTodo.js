import { useState, useEffect, use } from "react";
import toDoApi from "../services/toDoApi";
const api = toDoApi();

export function useGet() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function Get() {
      try {
        const healtchek = await api.get();
        console.log(healtchek);
        setData(healtchek);
      } catch (err) {
        console.log("[DEBUG]:error en useget ");
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    Get();
  }, []);
  return { data, isLoading, error };
}

export function useGetTodo() {
  const [ToDo, setToDo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getTodo() {
      try {
        const dato = await api.getTodo();
        setToDo(dato);
      } catch (err) {
        console.log("[DEBUG]:error en usegetTodo ");
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getTodo();
  }, []);
  return { ToDo, isLoading, error };
}
// async function getTodo() {
//   try {
//     const response = await fetch(api + "/todos");
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.log("[DEBUG]: Error en getTodo 2, de toDoApi");
//     console.error(err.message);
//     return err;
//   }
// }
//
//:w
//
