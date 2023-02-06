import { useTodo } from "../../store/todo";

const TodoItem = ({ todo }) => {
  const { removeTodo, setTodo, setMode } = useTodo();

  const handleRemove = () => {
    // if (!confirm("삭제할까요?")) return;
    removeTodo(todo.id);
  };

  const handleCheck = (e) => {
    setTodo({ ...todo, done: e.target.checked });
  };

  const handleEdit = () => {
    setMode("edit", todo);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <input type="checkbox" onChange={handleCheck} checked={todo.done} />
      </div>
      <div style={{ flexGrow: 1 }}>
        {todo.title} / {todo.done.toString()}
      </div>
      <button onClick={handleEdit}>수정</button>
      <button onClick={handleRemove}>삭제</button>
    </div>
  );
};

export default TodoItem;
