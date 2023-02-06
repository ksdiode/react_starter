import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import { useUser } from "./store/user";

function App() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { logout, loginCheck } = useUser();

  useEffect(() => {
    loginCheck();
  }, [loginCheck]);

  return (
    <div className="App">
      {user.isLogin ? (
        <div>
          {user.user}
          <button onClick={logout}>로그아웃</button>
        </div>
      ) : (
        <button onClick={() => navigate("/login")}>로그인</button>
      )}
      <div>
        <Link to="/">Home</Link> / <Link to="/todo">Todo</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
