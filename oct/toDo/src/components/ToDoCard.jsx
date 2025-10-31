import { useToggle, useDelete } from "../hooks/useTodo";
function ToDoCard({ ToDo, onToggle, onDelete }) {
  const { id, title, description, completed } = ToDo;
  const {
    toggle,
    data: dataToggle,
    isLoading: isLoadingToggle,
    error: errorData,
  } = useToggle();
  const {
    el_delete,
    data: dataDelete,
    isLoading: isLoadingDelete,
    error: errorDelete,
  } = useDelete();

  const cardStyle = {
    border: "1px solid black",
    borderRadius: "8px",
    padding: "1rem",
    width: "250px",
  };
  const tittleStyles = {
    fontWeight: "bold",
    margin: 0,
  };
  const textStyles = {
    margin: 0,
  };
  const handleToggle = async () => {
    const updated = await toggle({ id });
    console.log("[DEBUG]: handleToggle");

    if (updated) {
      console.log("[DEBUG]: handleToggle if");
      onToggle(updated);
    }
  };
  const handleDelete = async () => {
    console.log("[DEBUG]: handleDelete");
    const updated = await el_delete({ id });
    if (updated) {
      console.log("[DEBUG]: handleDelete if");
      onDelete(id);
    }
  };
  return (
    <div style={cardStyle}>
      <p style={textStyles}>{id}</p>
      <p style={tittleStyles}>{title}</p>
      <p style={textStyles}>{description}</p>
      <p style={textStyles}>{completed ? "Completado" : "Pendiente"}</p>
      <button onClick={handleToggle} disabled={isLoadingToggle}>
        TOGGLE (no terminado)
      </button>

      <button onClick={handleDelete} disabled={isLoadingDelete}>
        Delete
      </button>
    </div>
  );
}

export default ToDoCard;
