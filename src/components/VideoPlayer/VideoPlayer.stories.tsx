import VideoPlayerComponent from './VideoPlayer';

export default {
  component: VideoPlayerComponent,
  title: '1.Components/VideoPlayer'
};

export const VideoPlayer = () => (
  <div className="w-full h-[40rem]">
    <VideoPlayerComponent videoUrl="https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4" />
  </div>
);
