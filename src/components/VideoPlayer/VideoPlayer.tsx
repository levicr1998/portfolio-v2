import YouTube from 'react-youtube';
import { styles } from './styles';

type Props = {
  videoId: string;
};

const VideoPlayer = ({ videoId }: Props) => {
  return <YouTube videoId={videoId} iframeClassName={styles.videoplayer} />;
};

export default VideoPlayer;
