type Props = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: Props) => {
  return <video src={videoUrl} autoPlay controls className="w-full" />;
};

export default VideoPlayer;
