import styled from "styled-components";
import { HEADER_HEIGHT } from "../../styles/contants";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import registerImg from "./img/registerImg.webp";
import { ChatContext } from "../../context/ChatContext";

function Register() {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  const { updateCurrentChat } = useContext(ChatContext);

  return (
    <StyledFormWrap>
      <SytledFormContainer>
        <StyledForm
          onSubmit={(e) => {
            registerUser(e);
            updateCurrentChat(null);
          }}
        >
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

          {registerError?.error && (
            <StyledAlert>{registerError?.message}</StyledAlert>
          )}
        </StyledForm>
        <StyledImg />
      </SytledFormContainer>
    </StyledFormWrap>
  );
}

export default Register;

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
  background-image: url(${registerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StyledAlert = styled.div`
  font-size: 14px;
  color: red;
  font-weight: bold;
  margin-top: 1rem;
  opacity: 0.8;
`;
