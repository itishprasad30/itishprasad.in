import useSWR from "swr";
import Track from "./Track";
export default function Tracks() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/top-tracks", fetcher);
  if (!data) {
    return null;
  }
  // console.log(data);

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
