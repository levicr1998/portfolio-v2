import { classNames } from '../../helpers/classHelper';

export type SkillsContainerProps = {
  title?: string;
  skills: string[];
};

type Props = SkillsContainerProps & {
  className?: string;
};

const SkillsContainer = ({ title, skills, className }: Props) => (
  <div className={classNames(className, 'flex flex-col')}>
    {title && <h4 className="text-primary-blue text-2xl mb-4 font-extrabold">{title}</h4>}
    <div className="flex flex-row flex-wrap">
      {skills?.map((skill, index) => (
        <div
          key={index}
          className="flex justify-center items-center bg-white text-sm text-center text-primary-blue border border-primary-blue rounded-lg py-1 px-2 m-1">
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default SkillsContainer;
