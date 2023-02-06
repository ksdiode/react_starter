import { useEffect } from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { IconButton, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
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
      <AppBar position="static">
        <Container>
          {user.isLogin ? (
            <div>
              {user.user}
              <IconButton onClick={logout}>
                <LogoutIcon color="white" />
              </IconButton>
            </div>
          ) : (
            <IconButton onClick={() => navigate("/login")} color="white">
              <LogoutIcon color="white" />
            </IconButton>
          )}
          <div>
            <Link to="/">Home</Link> / <Link to="/todo">Todo</Link>
          </div>
        </Container>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
