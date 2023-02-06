import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/input";
import { useUser } from "../store/user";

const Login = () => {
  const { isLogin } = useSelector((state) => state.user);
  const { login } = useUser();
  const [userIdProps] = useInput("");
  const [passwordProps] = useInput("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <div>
      <h2>로그인</h2>

      <div>
        <input {...userIdProps} />
        <input type="password" {...passwordProps} />

        <button onClick={() => login(userIdProps.value, passwordProps.value)}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
