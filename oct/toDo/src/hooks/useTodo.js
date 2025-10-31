import { useState, useEffect } from "react";
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
  useEffect(() => {
    setLoading(true);
    getTodo();
  }, []);
  return { ToDo, setToDo, getTodo, isLoading, error };
}

export function usePost() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function post({ ToDo }) {
    if (!ToDo) {
      console.log("[DEBUG]:No hay dato");
      return;
    }
    setLoading(true);
    try {
      const data = await api.post(ToDo);
      console.log("[DEBUG]: POST: " + data);
      setData(data);
    } catch (err) {
      console.log("[DEBUG]: Error en usePost");
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return { post, data, isLoading, error };
}
export function useToggle() {
  console.log("[Debug]: useToggle");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function toggle({ id }) {
    setLoading(true);
    try {
      const data = await api.toggle(id);
      console.log(data);
      setData(data);
      return data;
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return { toggle, data, isLoading, error };
}
export function useDelete() {
  console.log("[DEBUG]: useDelete");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function el_delete({ id }) {
    setLoading(true);
    try {
      const data = await api.el_delete(id);
      console.log(data);
      setData(data);
      return data;
    } catch (err) {
      console.log("[DEBUG]: Error en console log");
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return { el_delete, data, isLoading, error };
}
