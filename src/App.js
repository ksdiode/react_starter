import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Todo from './pages/Todo';
import { useUser } from './store/user';
import MyAppBar from './components/MyAppBar';

function App() {
  const { loginCheck } = useUser();

  useEffect(() => {
    loginCheck();
  }, [loginCheck]);

  return (
    <div className="App">
      <MyAppBar />
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
