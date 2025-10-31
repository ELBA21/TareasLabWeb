import { useState } from "react";

function ToDoCard({ ToDo }) {
  const { id, title, description, completed } = ToDo;
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

  return (
    <div style={cardStyle}>
      <p style={textStyles}>{id}</p>
      <p style={tittleStyles}>{title}</p>
      <p style={textStyles}>{description}</p>
      <p style={textStyles}>{completed ? "Completado" : "Pendiente"}</p>
      <button>TOGGLE (no terminado)</button>

      <button>Delete</button>
    </div>
  );
}

export default ToDoCard;

//   {
//     "id": "68fa7f93504fdd58bf2593a4",
//     "title": "Buy milk",
//     "description": null,
//     "completed": false,
//     "created_at": "2025-10-23T12:34:56Z",
//     "updated_at": "2025-10-23T12:34:56Z"
//   }
// ]
