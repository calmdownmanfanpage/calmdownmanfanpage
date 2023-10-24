import MemeContainer from "./components/MemeContainer";
import AsyncContainer from "../../components/AsyncContainer";
import useMemes from "../../hooks/useMemes";

export default function MemePage() {
  const { memes, isLoading, errorMessage } = useMemes();

  return (
    <AsyncContainer
      isLoading={isLoading}
      hasError={!memes}
      errorMessage={errorMessage}
    >
      <MemeContainer memes={memes!} />
    </AsyncContainer>
  );
}
