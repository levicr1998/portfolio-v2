import SkillsContainer from '../SkillsContainer/SkillsContainer';
import { classNames } from '../../helpers/classHelper';
import { useNavigate } from 'react-router-dom';
import { Entry } from 'contentful';
import CompanyIcon from '../icons/CompanyIcon';
import { styles } from './styles';

export type Props = {
  id: string;
  title: string;
  details: string[];
  company: string;
  description: string;
  skills: string[];
  image: string;
  containerClasses?: string;
  isMobileThumbnail: boolean;
} & Partial<Entry>;

const ProjectContainer = ({
  id,
  sys,
  title,
  details,
  company,
  description,
  skills,
  image,
  containerClasses,
  isMobileThumbnail
}: Props) => {
  const navigate = useNavigate();
  return (
    <div className={classNames(containerClasses, styles.container)}>
      <div className={styles.containerWrapper}>
        <div className={styles.detailsAndTitleContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.detailsContainer}>
            {details !== undefined &&
              details.map((detail, index) => (
                <span key={index} className={styles.detail}>
                  {detail}
                </span>
              ))}
          </div>
        </div>
        <div className={styles.companyContainer}>
          <CompanyIcon />
          <span className={styles.companyTitle}>{company}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.skillsContainer}>
          <SkillsContainer skills={skills} />
        </div>
        <button className={styles.button} onClick={() => navigate(`/projects/${sys?.id}`)}>
          Learn more
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt="Project"
          className={classNames(
            isMobileThumbnail ? styles.mobileImage : styles.desktopImage,
            styles.image
          )}
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
