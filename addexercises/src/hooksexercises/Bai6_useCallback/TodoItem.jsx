import { memo } from "react";

const TodoItem = memo(({ todo, onDelete }) => {
  console.log("render todo", todo.id);
  return (
    <div>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>X</button>
    </div>
  );
});

export default TodoItem;
