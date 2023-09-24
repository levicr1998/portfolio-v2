import ProjectContainerComponent, { Props } from './ProjectContainer';
import { ReactRouterDecorator } from '../../decorators/ReactRouterDecorator';

export default {
  component: ProjectContainerComponent,
  title: '1.Components/ProjectContainer',
  decorators: [ReactRouterDecorator]
};

const project: Props = {
  id: '123',
  title: 'Motivatio',
  details: ['2021', 'School project'],
  company: 'Fontys',
  description:
    'Motivatio is social media mobile application where you can post positive quotes, impressive stories or questions to ask other users. It also offers users the possibility to follow/unfollow other users and comment on other people their posts. Motivatio also offers a specific section with a lot of motivation articles to motivate the users daily. Motivatio is build with a microservices architecture backend that supports scalability and a high volume of users. When a microservice is updated their is a CI/CD-pipeline that tests the microservice and automatically deploys it on Kubernetes.',
  skills: ['Spring Boot', 'Java', 'REST', 'Kubernetes', 'Docker', 'Azure DevOps'],
  image: '../../back-up-assets/thumbnails/thumbnail-motivatio.png',
  isMobileThumbnail: true
};

export const ProjectContainer = () => (
  <div className="bg-primary-blue h-full w-full p-20">
    <ProjectContainerComponent {...project} />
  </div>
);
