import { useCallback, useState } from "react";
import TodoItem from "./TodoItem";

function UseCallbackTodo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Hooks" },
  ]);

  const onDelete = useCallback((id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default UseCallbackTodo;
