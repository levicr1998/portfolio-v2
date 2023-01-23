import { classNames } from '../helpers/classHelper';

export type SkillsContainerProps = {
  title?: string;
  skills: string[];
};

type Props = SkillsContainerProps & {
  className?: string;
};

const SkillsContainer = ({ title, skills, className }: Props) => (
  <div className={classNames(className, 'grid grid-cols-3')}>
    {title && (
      <h4 className="text-primary-blue text-2xl mb-4 col-span-3 font-extrabold">{title}</h4>
    )}
    {skills?.map((skill, index) => (
      <div
        key={index}
        className="flex justify-center items-center col-span-1 row-span-1 bg-white text-sm text-center text-primary-blue border border-primary-blue rounded-lg py-1 px-0.5 m-1">
        {skill}
      </div>
    ))}
  </div>
);

export default SkillsContainer;
