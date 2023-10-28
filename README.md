# 침착맨 팬 페이지 (프론트엔드)

은퇴 선언을 한 침착맨을 기리는 팬 페이지

[백엔드 레포지토리 링크](https://github.com/calmdownmanfanpage/calmdownmanfanpage-server)

## 배포 링크

http://calmdownman.s3-website-us-east-1.amazonaws.com/

## 실행 방법

```bash
# 현재 레포지토리 클론
git clone https://github.com/calmdownmanfanpage/calmdownmanfanpage.git

# 환경변수 설정
cp .env.example .env
# 복사된 .env 파일의 VITE_FRONTEND_URL에 배포될 프론트엔드 url 입력 및
# VITE_BACKEND_URL에 배포될 백엔드 url 입력

# 백엔드 서버 실행 및 DB 연결 필요
# 백엔드 레포 (https://github.com/calmdownmanfanpage/calmdownmanfanpage-server)

npm install
npm run dev
# http://localhost:5173 로 개발서버 실행됨
```

## 사용 기술 스택

React, Typescript, styled-components, axios

## 주요 기능

### 침착맨 짤 무한 스크롤 페이지
(로딩, 에러발생, 재시도 시연 gif)

![녹화_2023_10_26_15_35_53_963](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/46833758/0b246aa5-f344-4d83-91c4-cf7e1c3b1ce1)

> Keywords
> - AsyncContainer 컴포넌트
> - Intersection Observer API
> - 관심사 분리
> 
- 짤 데이터 패치 로딩 및 에러 발생 시 AsyncContainer 컴포넌트로 해당 상태 알려줌

```tsx
// src/components/AsyncContainer.tsx
...
export default function AsyncComponent({
  isLoading,
  hasError,
  errorMessage,
  retry,
  children,
}: {
  isLoading: boolean;
  hasError: boolean;
  errorMessage?: string;
  retry?: VoidFunction;
  children?: JSX.Element;
}) {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <ErrorMessage message={errorMessage} retry={retry} />
      ) : (
        children
      )}
    </>
  );
}
```

- 짤 리스트의 가장 아래에 intersection observer의 target 설정. 데이터 받은 데이터의 마지막 데이터를 랜더링 하고 더 아래로 스크롤 시 target이 intersect되면서 데이터 패치 실행.

```tsx
// src/pages/gangsan/MemePage.tsx
...
<StyledContainer>
  <StyledWrapper>
    {memes?.map((meme, i) => (
      <Meme meme={meme} key={meme.title + i} />
    ))}
  </StyledWrapper>
  <AsyncContainer
    isLoading={isLoading}
    hasError={hasError}
    errorMessage={errorMessage}
    retry={retry}
  />
  <div ref={setTarget}></div>
</StyledContainer>
...
```

- 짤 데이터를 가져오고 Intersection Observer API를 사용하는 로직을 hook으로 추출해 관심사분리

```tsx
// src/hooks/useMemes.ts
...
export default function useMemes() {
  const [memes, setMemes] = useState<MemeType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onIntersect: IntersectionObserverCallback = async ([
			...
			fetchMemes();
  };

  const fetchMemes = async () => {
		...
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

	...

  return { memes, isLoading, hasError, errorMessage, setTarget, retry };
}
```

```tsx
// src/pages/gangsan/MemePage.tsx
...
export default function MemePage() {
  const { memes, isLoading, hasError, errorMessage, setTarget, retry } = useMemes();

  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          {memes?.map((meme, i) => (
            <Meme meme={meme} key={meme.title + i} />
          ))}
        </StyledWrapper>
        <AsyncContainer
          isLoading={isLoading}
          hasError={hasError}
          errorMessage={errorMessage}
          retry={retry}
        />
        <div ref={setTarget}></div>
      </StyledContainer>
    </>
  );
}
...
```

### 침착맨 명언집
#### 🔍 참고자료

Page Animation :  https://codepen.io/ksccmp/pen/ExmMKxd

Kakao API : https://developers.kakao.com/docs/latest/ko/message/js-link

#### 🏞️ 이미지


- 페이지 에니메이션
  
![페이지 에니메이션](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/132344704/bb38cd0a-df3c-4681-bd60-a8222cf47cb4)

- 카카오 공유창

![카카오 공유](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/132344704/6fb1d688-5954-44e9-904d-8f7436cb78c4)

- 카카오 메시지 창

![공유 받음](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/132344704/5b9c5d2f-6d81-4363-bd18-5e258f4fb67b)

#### 🧑‍💻 핵심 코드


<aside>
💡 Page Animation

</aside>

```css
/* css (Book) */
	width: 80vw;
  height: 80vh;
  z-index: -2;
  perspective: 2500px;

/* css (Page) */
	width: 50%;
  height: 100%;
  position: absolute;
  transition-timing-function: ease-out;
/* css (Left Page) */
  transform-origin: right center;
/* css (Right Page) */
  transform-origin: left center;
	
/* onclick */
	transform: rotateY(180deg);
```

```jsx
const rightPageClick = () => {
	  if (contentId === contentLimit) return;
	  setRightFlip(true);
	  setEventPause(true);
	  // 에니메이션이 끝나는 1초 후 내용 띄우기
	  setTimeout(() => {
		    setRightFlip(false);
		    setEventPause(false);
		    setContentId(contentId + 2);
		    navigate(`/dongseon/${contentId}`);
	  }, 1000);
};
```

<aside>
💡 Kakao API 사용하기

</aside>

```html
<!-- index HTML -->
<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
    integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH" crossorigin="anonymous">
</script>
<script>
	// 카카오에서 도메인을 확인하기 때문에 API KEY는 노출되어도 상관없다.
  Kakao.init("API KEY");
</script>
```

```jsx
// 카카오톡 공유 onclick
window.Kakao.Share.sendDefault({
  objectType: "feed",
  content: {
		// 메시지 제목
    title: "침착맨 명언집",
		// 명언집 내용
    description: phraseData.phrase,
		// 메시지에 표시되는 이미지
    imageUrl:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbv2xr0%2FbtqWWs0bA7q%2FJIV43Kh4gbKPxCF08H7i90%2Fimg.png",
	  // 카카오에서 API를 사용하는 도메인을 확인한다.   
		link: {
      mobileWebUrl: `${import.meta.env.VITE_FRONTEND_URL}`,
      webUrl: `${import.meta.env.VITE_FRONTEND_URL}`,
    },
  },
	// 좋아요/공유 수 표시
  social: {
    likeCount: phraseData.likes,
    sharedCount: phraseData.shared,
  },
  buttons: [
    {
      title: "웹으로 보기",
			// 메시지에서 명언집으로 가는 링크
      link: {
        mobileWebUrl: `${import.meta.env.VITE_FRONTEND_URL}/dongseon/:pageId=${shareId}`,
        webUrl: `${import.meta.env.VITE_FRONTEND_URL}/dongseon/:pageId=${shareId}`,
      },
    },
  ],
});
```

<aside>
💡 링크에서 받아온 페이지 열기

</aside>

```jsx
import { useNavigate, useParams } from "react-router-dom";

const navigate = useNavigate();
const params = useParams();

// URL이 변경되면 contentID를 URL params로 변경한다.
useEffect(()=>{
    if(params.id){
      setContentId(Number(params.id));
    }
}, [params]);
```

### 실시간 채팅 앱

#### 📌 Project Goal

socket.io를 이용한 실시간 채팅 앱을 만들어보고 싶다는 생각을 가지고 있어서 팬페이지에 들어온 사람들이 자유롭게 소통할 수 있는 채팅 기능을 만들어보았습니다.

#### 🔍 서비스 기능

| 요구 사항 명 | 설명 |
| --- | --- |
| 회원 가입 | 채팅 기능 이용을 위한 회원 가입 기능 구현 |
| 로그인/로그아웃 | 회원의 웹사이트 이용을 위한 로그인/로그아웃 기능을 구현 |
| 모든 유저 불러오기 | 팬사이트에 가입한 모든 유저들을 조회할 수 있는 기능 구현 |
| 채팅 방 생성 | 원하는 유저와 채팅할 수 있는 채팅방 생성 구현 |
| 1:1 채팅 | 1:1로 실시간 채팅 기능 구현 |
| 메시지 보관함 | 메시지 보관함을 통해 바로 메시지 읽기 가능한 기능 구현 |
| 메시지 모두 읽기 | 메시지를 모두 읽기 처리 할 수 있는 기능 구현(미수신 알람 모두 삭제) |


#### 🔍 Overview

##### 1. 메인 페이지 (Main Page)

<img width="784" alt="Untitled 1" src="https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/1ba818ca-ebab-412e-880a-a36eaca7422f">


#### 2. 유저 회원가입 페이지 (User Register Page)

<img width="815" alt="Untitled 2" src="https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/510fe0f8-71a9-4fc2-9075-dd95c25a770c">


1. 회원가입 후 자동 로그인 되어 채팅 방으로 이동

#### 3. 유저 로그인 페이지 (User Login Page)

<img width="808" alt="Untitled 3" src="https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/9fbc09d9-8fe4-457b-8ca8-0e94aa798fea">


1. 로그인 한 유저만 채팅 방으로 입장 가능
2. 로그인 한 유저 정보를 localStorage에 저장
3. localStorage의 유저 정보를 useEffect로 가져와 state관리, 새로고침해도 정보가 이어지도록 설정

#### 4. 채팅 메인 페이지 (Chat Main Page)

![Untitled 4](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/09dc5f54-65cc-489b-ad07-2b4bc636879f)

![Untitled 5](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/b17f1067-91c0-4466-ab33-8f76808f5fe3)


1. socket.io를 이용하여 현재 로그인한 상태라면 왼쪽 유저 정보란에서 빨간색 알람이 뜨도록 함
2. 로그인하지 않았다면 빨간색 알람이 없음

#### 5. 채팅 방 생성(Chat Room Page)

![Untitled 6](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/233e4377-b677-44ee-a039-6590664d5997)

1. 왼쪽 유저 정보란에서 채팅을 원하는 상대를 클릭
2. 해당 상대와의 채팅방 생성 → 한번 더 해당 상대를 클릭하면 오른쪽에 채팅 창이 생성

#### 6. 채팅 메시지 전송(Chat Message Send)

![Untitled 7](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/fc996113-efee-4975-ad93-378020a0ad08)

1. 아래 text 창에서 메시지 입력 후 전송 가능
2. react-emoji 라이브러리를 이용하여 이모지를 추가할 수 있게 기능 추가

#### 7. 채팅 메시지 수신(Chat Message Receive)

![Untitled 8](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/03578b2f-1830-4561-b44c-6b9fb500fd75)

1. [socket.io](http://socket.io) 이용하여 메시지가 도착할 경우 header의 메시지 보관함에 메세지 갯수 알람이 표시됨
2. 왼쪽 채팅방에서도 수신된 마지막 메시지와 갯수 표시

#### 8. 채팅 메시지 수신(Chat Message Receive)

![Untitled 9](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/153c47aa-2e39-409a-a553-2b3374b1c5e0)
1. 채팅방을 클릭하여 메시지를 읽을 경우 메세지 보관함과 채팅방의 alert는 모두 삭제됨

#### 9. 채팅 메시지 보관함(Chat Message Box)

![Untitled 10](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/ca3c77ca-5ef0-47c8-9f6b-a16545e02429)

1. header의 메시지 보관함 클릭 후 알람을 선택하면 자동으로 해당 채팅방이 생성되고 읽기 처리되는 기능 추가

#### 10. 채팅 메시지 보관함 모두 읽기(Chat Message Box)

![Untitled 11](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/5dc28241-3172-4684-8c01-aa4ee7d51c23)

1. 굳이 채팅방을 일일이 클릭하지 않아도 header의 메시지 보관함을 클릭 후 메시지 모두 읽기를 클릭하면 모두 읽기 처리 되는 기능 추가

#### 11. 채팅 메시지 최종 형태

![Untitled 12](https://github.com/calmdownmanfanpage/calmdownmanfanpage/assets/80450737/1c4df39b-8edc-407d-8920-5cbe060bd6ce)

1. 자유롭게 유저들은 서로 침착맨에 대한 대화를 나눌 수 있습니다 :)

#### 📅 개발기간

2023.10.05 ~ 2023.10.26

#### 🏃 아쉬웠던 점 및 목표

1. husky 숙지하기 ( 여러명이서 같이 작업하다보니 merge작업 시 고충이 많았음)
2. [socket.io](http://socket.io) 원리 이해하기 (기능 만들기에 급급하다보니 에러 발생 시 해결이 어려웠음…)
3. typescript 발전시키기 (현재 모두 any로 설정되어있는데 typescript 공부 정리 후 천천히 발전시킬 예정)
4. 디자인 발전시키기 (좀 더 UI, UX를 세련되게 업데이트해보기..지금은 너무 기본적임!)
5. 직접 배포해보기( 프론트, 서버 배포 경험이 없음. 혼자서 처음부터 끝까지 해보는게 목표)
---

## 팀원

<table>
  <tr align="center">
    <td>
      <a href="https://github.com/ggsno">
        <img src="https://avatars.githubusercontent.com/u/46833758?v=4" width="100px;" alt="" />
      </a>
    </td>
    <td>
      <a href="https://github.com/itismilob">
        <img src="https://avatars.githubusercontent.com/u/132344704?v=4" width="100px;" alt="" />
      </a>
    </td>
    <td>
      <a href="https://github.com/DANA-HYEON">
        <img src="https://avatars.githubusercontent.com/u/80450737?v=4" width="100px;" alt="" />
      </a>
    </td>
    <td>
      <a href="https://github.com/zkflal">
        <img src="https://avatars.githubusercontent.com/u/146833294?v=4" width="100px;" alt="" />
      </a>
    </td>
  </tr>

  <tr align="center">
    <td><b>오강산</b></td>
    <td><b>곽동선</b></td>
    <td><b>이다현</b></td>
    <td><b>김정운</b></td>
  </tr>

  <tr align="center">
    <td><a href="https://github.com/ggsno">@ggsno</a></td>
    <td><a href="https://github.com/itismilob">@itismilob</a></td>
    <td><a href="https://github.com/DANA-HYEON">@DANA-HYEON</a></td>
    <td><a href="https://github.com/zkflal">@zkflal</a></td>
  </tr>

</table>
