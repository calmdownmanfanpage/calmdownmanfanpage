import styled from "styled-components";
import { HEADER_HEIGHT } from "../../styles/contants";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import loginImg from "./img/loginImg.webp";
import { ChatContext } from "../../context/ChatContext";

function Login() {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);
  const { updateCurrentChat } = useContext(ChatContext);
  return (
    <StyledFormWrap>
      <SytledFormContainer>
        <StyledForm
          onSubmit={(e) => {
            loginUser(e);
            updateCurrentChat(null);
          }}
        >
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

          {loginError?.error && (
            <StyledAlert>{loginError?.message}</StyledAlert>
          )}
        </StyledForm>
        <StyledImg />
      </SytledFormContainer>
    </StyledFormWrap>
  );
}

export default Login;

const StyledFormWrap = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebecf0;
`;

const SytledFormContainer = styled.div`
  border-radius: 10px;
  box-shadow: -5px -5px 10px #fff, 5px 5px 10px #babebc;
  position: absolute;
  width: 768px;
  height: 480px;
  min-height: 480px;
  display: flex;
`;
const StyledForm = styled.form`
  width: 40%;
  height: 100%;
  background: #ebecf0;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  legend {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }
  input {
    background: #eee;
    padding: 16px;
    margin: 8px 0;
    width: 100%;
    border: 0;
    outline: none;
    border-radius: 20px;
    box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
  }
  button {
    border-radius: 20px;
    width: 100%;
    border: none;
    outline: none;
    font-size: 12px;
    font-weight: bold;
    padding: 15px 45px;
    margin: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 80ms ease-in;
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
  }

  button:active {
    box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
  }
`;

const StyledImg = styled.div`
  display: block;
  width: 60%;
  height: 100%;
  background-image: url(${loginImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StyledAlert = styled.div`
  font-size: 12px;
  color: red;
  font-weight: bold;
  margin-top: 1rem;
  opacity: 0.8;
`;
