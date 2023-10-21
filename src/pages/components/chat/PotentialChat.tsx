import styled, { css } from "styled-components";

function PotentialChat({ chat, user }) {
  //   const { recipientUser } = useFetchRecipientUser(chat, user);

  return (
    <div>
      <header>
        {/* <h2>{recipientUser?.name}</h2> */}
        <span>2023-10-19 </span>
      </header>
      <div className="message">
        <p>야야 요즘 너 잘지내고 있냐? 얼마전에 생일이던데 ㅋㅋㅋ 축하한다 </p>
        <span>2</span>
      </div>
      <span className="alert"></span>
    </div>
  );
}
