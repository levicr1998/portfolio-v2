type Props = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: Props) => {
  return <video src={videoUrl} autoPlay controls />;
};

export default VideoPlayer;
