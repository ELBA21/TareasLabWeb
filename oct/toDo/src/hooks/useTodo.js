import { useState, useEffect, use } from "react";
import toDoApi from "../services/toDoApi";
const toDoApi = toDoApi();

function useGet() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = use(null);

  useEffect(() => {
    setLoading(true);
    async function get() {
      try {
        const healtchek = await toDoApi.get();
        console.log(healtchek);
        setData(healtchek);
      } catch (err) {
        console.log("[DEBUG]:error en useget ");
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    get();
  }, []);
  return { data, isLoading, error };
}

function useGetTodo() {
  const [toDo, setToDo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getTodo() {
      try {
        const dato = toDoApi.getTodo();
        setToDo(dato);
      } catch (err) {
        console.log("[DEBUG]:error en usegetTodo ");
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);
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
