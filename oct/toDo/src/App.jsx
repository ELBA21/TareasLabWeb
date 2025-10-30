import { useState } from "react";
import "./App.css";
import toDoApi from "./services/toDoApi";

const api = toDoApi();

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGet = async () => {
    console.log("[DEBUG]: Probando GET /");
    setLoading(true);
    try {
      const data = await api.get();
      console.log("Funciona:", data);
      setResult(data);
    } catch (err) {
      console.log("Error:", err);
      setResult("Error al hacer GET /");
    } finally {
      setLoading(false);
    }
  };

  const handleGetTodo = async () => {
    console.log("[DEBUG]: Probando GET /todos");
    setLoading(true);
    try {
      const data = await api.getTodo();
      console.log("Funciona:", data);
      setResult(data);
    } catch (err) {
      console.log("Error:", err);
      setResult("Error al hacer GET /todos");
    } finally {
      setLoading(false);
    }
  };

  const handlePost = async () => {
    console.log("[DEBUG]: Probando POST /todos");
    setLoading(true);
    try {
      const newTodo = {
        title: "me equivoque con el anterior",
        description: "nuroperkin",
        completed: true,
      };
      const data = await api.post(newTodo);
      console.log("POST correcto:", data);
      setResult(data);
    } catch (err) {
      console.log("Error:", err);
      setResult("Error al hacer POST /todos");
    } finally {
      setLoading(false);
    }
  };
  const handleToggle = async () => {
    console.log("[DEBUG]: Probando Toggle");
    setLoading(true);
    try {
      let id = "6902c501eb8f99bf3c048de7";
      const data = await api.toggle(id);
      console.log("Toggle!", data);
      setResult(data);
    } catch (err) {
      console.log("Erro:", err);
      setResult("Error al hacer toggle");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    console.log("[DEBUG]: Probando Delete ");
    setLoading(true);
    try {
      let id = "6902c501eb8f99bf3c048de7";
      const data = await api.el_delete(id);
      console.log("Toggle!", data);
      setResult(data);
    } catch (err) {
      console.log("Erro:", err);
      setResult("Error al hacer Delete");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Pruebas de API</h2>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={handleGet} disabled={loading}>
          Probar GET /
        </button>
        <button onClick={handleGetTodo} disabled={loading}>
          Probar GET /todos
        </button>
        <button onClick={handlePost} disabled={loading}>
          Probar POST /todos
        </button>
        <button onClick={handleToggle} disabled={loading}>
          Toggle!
        </button>
        <button onClick={handleDelete} disabled={loading}>
          Delete :p
        </button>
      </div>

      {loading && <p>Cargando...</p>}
      {result && (
        <pre
          style={{
            textAlign: "left",
            background: "#222",
            color: "#0f0",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
