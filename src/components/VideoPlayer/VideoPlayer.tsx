import { motion } from 'framer-motion';

type Props = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: Props) => {
  return <motion.video src={videoUrl} autoPlay controls className="w-full" />;
};

export default VideoPlayer;
