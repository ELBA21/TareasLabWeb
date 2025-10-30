import { useState } from "react";
import "./App.css";
import { useGetTodo } from "./hooks/useTodo";
import ToDoList from "./components/ToDoList";
import ToDoCard from "./components/ToDoCard";

function App() {
  const { ToDo, isLoading, error } = useGetTodo([]);

  // const handlePost = async () => {
  //   console.log("[DEBUG]: Probando POST /todos");
  //   setLoading(true);
  //   try {
  //     const newTodo = {
  //       title: "me equivoque con el anterior",
  //       description: "nuroperkin",
  //       completed: true,
  //     };
  //     const data = await api.post(newTodo);
  //     console.log("POST correcto:", data);
  //     setResult(data);
  //   } catch (err) {
  //     console.log("Error:", err);
  //     setResult("Error al hacer POST /todos");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const handleToggle = async () => {
  //   console.log("[DEBUG]: Probando Toggle");
  //   setLoading(true);
  //   try {
  //     let id = "6902c501eb8f99bf3c048de7";
  //     const data = await api.toggle(id);
  //     console.log("Toggle!", data);
  //     setResult(data);
  //   } catch (err) {
  //     console.log("Erro:", err);
  //     setResult("Error al hacer toggle");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  //
  // const handleDelete = async () => {
  //   console.log("[DEBUG]: Probando Delete ");
  //   setLoading(true);
  //   try {
  //     let id = "6902c501eb8f99bf3c048de7";
  //     const data = await api.el_delete(id);
  //     console.log("Toggle!", data);
  //     setResult(data);
  //   } catch (err) {
  //     console.log("Erro:", err);
  //     setResult("Error al hacer Delete");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div style={{ padding: "2rem" }}>
      <ToDoList ToDo={ToDo} />
    </div>
  );
}

export default App;
