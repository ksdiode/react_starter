import { useEffect } from "react";
import { useSelector } from "react-redux";
import useInput from "../../hooks/input";
import { useTodo } from "../../store/todo";

const TodoInput = () => {
  const { mode, todo } = useSelector((state) => state.todo);
  const { addTodo, setTodo, setMode } = useTodo();

  const [todoProps, resetTodo] = useInput();

  useEffect(() => {
    console.log(mode);
    if (mode === "add") {
      resetTodo();
    } else if (mode === "edit") {
      resetTodo(todo.title);
    }
  }, [mode, todo]);

  const handleSave = () => {
    if (mode === "add") {
      addTodo({
        title: todoProps.value,
        done: false,
      });
    }
    if (mode === "edit") {
      setTodo({
        ...todo,
        title: todoProps.value,
      });
    }
    setMode("add", {});
  };

  const handleReset = () => {
    resetTodo();
  };

  return (
    <div style={{ display: "flex" }}>
      <input {...todoProps} style={{ flexGrow: 1 }} />
      <button onClick={handleSave}>{mode === "add" ? "추가" : "수정"}</button>
      <button onClick={handleReset}>리셋</button>
    </div>
  );
};

export default TodoInput;
