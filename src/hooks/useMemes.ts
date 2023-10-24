import { useState } from "react";
import { MemeType } from "../pages/gangsan/components/Meme";
import { getMemes } from "../pages/gangsan/apis/memes";
import useIntersectionObserver from "./useIntersectionObserver";

export default function useMemes() {
  const [memes, setMemes] = useState<MemeType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onIntersect: IntersectionObserverCallback = async ([
    { isIntersecting },
  ]) => {
    if (!isIntersecting || hasError) return;
    fetchMemes();
  };

  const fetchMemes = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const { data } = await getMemes();
      setMemes(memes ? [...memes, ...data] : data);
    } catch (e) {
      setHasError(true);
      setErrorMessage(e instanceof Error ? e.message : "Unexpected Error");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  const retry = () => {
    fetchMemes();
  };

  return { memes, isLoading, hasError, errorMessage, setTarget, retry };
}
