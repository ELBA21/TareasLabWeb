import { useState } from "react";
import { usePost } from "../hooks/useTodo";
function ToDoCreate({ onPost }) {
  const cardStyle = {
    border: "19px solid black",
    borderRadius: "8px",
    padding: "1rem",
    width: "250px",
  };

  const [title, setTitle] = useState();
  const [descripcion, setDescripcion] = useState("");
  const { post, data, isLoading, error } = usePost("");
  const handleSubmit = async (submit) => {
    submit.preventDefault();
    const newTodo = {
      title: title,
      description: descripcion,
      completed: false,
    };
    const crearTodo = await post({ ToDo: newTodo });
    if (crearTodo) {
      onPost(crearTodo);
      setTitle("");
      setDescripcion("");
    }
  };

  return (
    <div style={cardStyle}>
      <p>Inserte innfo lol</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Agregando... " : "Agregar Tarea!"}
        </button>
      </form>
    </div>
  );
}
export default ToDoCreate;
