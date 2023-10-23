import { useState, useEffect } from "react";
import MemeContainer from "./components/MemeContainer";
import { MemeType } from "./components/Meme";
import { getMemes } from "./apis/memes";

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

  return isLoading ? (
    "loading"
  ) : !memes ? (
    errorMessage
  ) : (
    <MemeContainer memes={memes} />
  );
}
