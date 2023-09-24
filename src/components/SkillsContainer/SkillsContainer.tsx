import { classNames } from '../../helpers/classHelper';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';

export type SkillsContainerProps = {
  title?: string;
  skills: string[];
  themeColor?: string;
  hasProjectThemeColors?: boolean;
};

type Props = SkillsContainerProps & {
  className?: string;
};

const SkillsContainer = ({
  title,
  skills,
  className,
  themeColor = 'primary-blue',
  hasProjectThemeColors
}: Props) => (
  <div className={classNames(className, styles.container)}>
    {title && <h4 className={styles.title}>{title}</h4>}
    <div className={styles.skillsContainer}>
      {skills?.map((skill, index) => (
        <div
          key={index}
          className={twMerge(
            styles.skill,
            hasProjectThemeColors && `text-white border-white/90 bg-${themeColor}/80`
          )}>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default SkillsContainer;
