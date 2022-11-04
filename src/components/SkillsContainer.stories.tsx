import SkillsContainer from './SkillsContainer';

export default {
  component: SkillsContainer,
  title: '1.Components/SkillsContainer'
};

const skills = ['Spring Boot', 'Java', 'REST', 'Kubernetes', 'Docker', 'Azure DevOps'];
export const Default = () => <SkillsContainer skills={skills} />;
