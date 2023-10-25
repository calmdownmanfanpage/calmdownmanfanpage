import axios from "axios";
import { MemeType } from "../components/Meme";

const getMemes = async () => {
  const memes = axios.get<MemeType[]>(
    `${import.meta.env.VITE_BACKEND_URL}/api/memes`,
  );

  return memes;
};

export { getMemes };
