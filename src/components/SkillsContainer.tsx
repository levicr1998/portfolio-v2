type Props = {
  skills: string[];
};

const SkillsContainer = ({ skills }: Props) => (
  <div>
    {skills !== undefined &&
      skills.map((skill, index) => (
        <span
          key={index}
          className="bg-white text-sm text-primary-blue border border-primary-blue rounded-lg py-1 px-1.5 m-1">
          {skill}
        </span>
      ))}
  </div>
);

export default SkillsContainer;
