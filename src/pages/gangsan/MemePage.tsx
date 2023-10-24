import { useState, useEffect } from "react";
import MemeContainer from "./components/MemeContainer";
import { MemeType } from "./components/Meme";
import { getMemes } from "./apis/memes";
import AsyncContainer from "../../components/AsyncContainer";

export default function MemePage() {
  const [memes, setMemes] = useState<MemeType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getMemes();
        setMemes(data);
      } catch (e) {
        setMemes(null);
        setErrorMessage(e instanceof Error ? e.message : "Unexpected Error");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

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
