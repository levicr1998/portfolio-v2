import VideoPlayerComponent from './VideoPlayer';

export default {
  component: VideoPlayerComponent,
  title: '1.Components/VideoPlayer'
};

export const VideoPlayer = () => (
  <div className="w-full h-[40rem]">
    <VideoPlayerComponent />
  </div>
);
