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

### 침착맨 명언집 <<< 수정 요망

### 침착맨 게임 ?<<< 수정 요망

### 채팅방 <<< 수정 요망


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
