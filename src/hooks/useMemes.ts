import { useEffect, useState } from "react";
import { MemeType } from "../pages/gangsan/components/Meme";
import { getMemes } from "../pages/gangsan/apis/memes";

export default function useMemes() {
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

  return { memes, isLoading, errorMessage };
}
