import ToDoCard from "./ToDoCard";

function ToDoList({ ToDo, onToggle, onDelete }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {ToDo.map((t) => (
        <ToDoCard key={t.id} ToDo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ToDoList;
