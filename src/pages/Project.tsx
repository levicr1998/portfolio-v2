import {useLoaderData, useNavigate} from 'react-router-dom';
import BackButton from '../components/BackButton/BackButton';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

export const Project = () => {
  const project = useLoaderData();
console.log(project)
  return (
    <div>
      <BackButton />
      <h3 className="text-3xl text-center font-extrabold text-primary-blue mb-4">Project video</h3>
      <VideoPlayer videoId={project?.fields?.videoId} />
    </div>
  );
};
