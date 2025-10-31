import ToDoCard from "./ToDoCard";

function ToDoList({ ToDo }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {ToDo.map((t) => (
        <ToDoCard ToDo={t} />
      ))}
    </div>
  );
}

export default ToDoList;
