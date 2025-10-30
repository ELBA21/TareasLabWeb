import ToDoCard from "./ToDoCard";

function ToDoList({ ToDo }) {
  return (
    <div>
      {ToDo.map((t) => (
        <ToDoCard ToDo={t} />
      ))}
    </div>
  );
}

export default ToDoList;
