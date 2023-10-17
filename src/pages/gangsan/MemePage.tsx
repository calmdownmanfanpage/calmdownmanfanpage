import MemeContainer from "./components/MemeContainer";
import dummyData from "./dummy/memes.json";

export default function MemePage() {
  const data = dummyData.data;

  return <MemeContainer memes={data} />;
}
