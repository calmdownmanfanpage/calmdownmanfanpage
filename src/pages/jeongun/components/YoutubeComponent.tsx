export default function YoutubeComponent(props: { id: string }) {
  const { id } = props;

  return (
    <>
      <iframe
        id="ytplayer"
        width="500rem"
        height="350rem"
        src={`https://www.youtube.com/embed/${id}`}
        style={{
          borderRadius: "6px",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      />
    </>
  );
}