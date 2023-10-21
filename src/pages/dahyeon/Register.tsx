import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Register() {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <>
      <form onSubmit={registerUser}>
        <fieldset>
          <legend>회원가입</legend>
          <input
            type="text"
            placeholder="이름"
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="이메일"
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, password: e.target.value })
            }
          />
          <button type="submit">
            {isRegisterLoading ? "계정을 생성중입니다." : "회원가입"}
          </button>

          {registerError?.error && <div>{registerError?.message}</div>}
        </fieldset>
      </form>
    </>
  );
}

export default Register;
