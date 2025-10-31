import { useState } from "react";
import "./App.css";
import { useGetTodo, useDelete, useToggle } from "./hooks/useTodo";
import ToDoList from "./components/ToDoList";
import ToDoCreate from "./components/ToDoCreate";

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
  const handlePost = (postTodo) => {
    setToDo((current) => [...current, postTodo]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <ToDoCreate onPost={handlePost} />
      <ToDoList ToDo={ToDo} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
