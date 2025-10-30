import { useState } from "react";

function ToDoCard({ ToDo }) {
  const { id, title, description, completed } = ToDo;

  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{completed}</p>
      <button>TOGGLE (no terminado)</button>
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
