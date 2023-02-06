import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import { useTodo } from "../store/todo";

const Todo = () => {
  const { todos, loading } = useSelector((state) => state.todo);
  const { getTodos } = useTodo();
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h2>Todo ({loading && "로딩중"})</h2>
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
