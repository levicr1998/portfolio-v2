import SkillsContainerComponent from './SkillsContainer';

export default {
  component: SkillsContainerComponent,
  title: '1.Components/SkillsContainer'
};

const skills = ['Spring Boot', 'Java', 'REST', 'Kubernetes', 'Docker', 'Azure DevOps'];
export const SkillsContainer = () => (
  <div className="w-full h-full bg-white p-4">
    <SkillsContainerComponent title="Used technologies" skills={skills} />
  </div>
);
