import { useState } from "react";
import "./App.css";
import { useGetTodo, useDelete, useToggle } from "./hooks/useTodo";
import ToDoList from "./components/ToDoList";
import ToDoCard from "./components/ToDoCard";

function App() {
  const { ToDo, setToDo, getTodo, isLoading, error } = useGetTodo([]);

  const handleToggle = (updateToDO) => {
    setToDo((current) => {
      return current.map((t) => {
        if (t.id === updateToDO.id) {
          return updateToDO;
        }
        return t;
      });
    });
  };
  const handleDelete = (deletedTodo) => {
    setToDo((current) => {
      return current.filter((t) => t.id !== deletedTodo);
    });
  };
  return (
    <div style={{ padding: "2rem" }}>
      <ToDoList ToDo={ToDo} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
