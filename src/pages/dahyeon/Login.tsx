import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);
  return (
    <>
      <form onSubmit={loginUser}>
        <fieldset>
          <legend>로그인</legend>

          <input
            type="email"
            placeholder="이메일"
            onChange={(e) =>
              updateLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={(e) =>
              updateLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <button type="submit">
            {isLoginLoading ? "로그인 중입니다" : "로그인"}
          </button>

          {loginError?.error && <div>{loginError?.message}</div>}
        </fieldset>
      </form>
    </>
  );
}

export default Login;
