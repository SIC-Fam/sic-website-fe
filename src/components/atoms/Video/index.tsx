function getSrcYoutube(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const ID = match && match[2].length === 11 ? match[2] : null;
  return 'https://www.youtube.com/embed/' + ID;
}

const Video = ({ src }) => {
  return (
    <iframe
      className="w-full aspect-video"
      src={getSrcYoutube(src)}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default Video;
