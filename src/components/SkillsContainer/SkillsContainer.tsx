import { classNames } from '../../helpers/classHelper';
import { styles } from './styles';

export type SkillsContainerProps = {
  title?: string;
  skills: string[];
};

type Props = SkillsContainerProps & {
  className?: string;
};

const SkillsContainer = ({ title, skills, className }: Props) => (
  <div className={classNames(className, styles.container)}>
    {title && <h4 className={styles.title}>{title}</h4>}
    <div className={styles.skillsContainer}>
      {skills?.map((skill, index) => (
        <div key={index} className={styles.skill}>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default SkillsContainer;
