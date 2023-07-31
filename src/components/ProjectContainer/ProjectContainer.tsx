import SkillsContainer from '../SkillsContainer/SkillsContainer';
import { classNames } from '../../helpers/classHelper';
import { useNavigate } from 'react-router-dom';
import { Entry } from 'contentful';

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
    <div
      className={classNames(
        containerClasses,
        'flex flex-col md:grid md:grid-cols-10 bg-white p-4'
      )}>
      <div className="md:col-span-5 lg:col-span-6">
        <div className="flex flex-col lg:flex-row m-6 lg:items-center">
          <h1 className="font-black text-3xl mr-3 whitespace-nowrap pb-3 lg:pb-0">{title}</h1>
          <div className="flex flex-wrap">
            {details !== undefined &&
              details.map((detail, index) => (
                <span
                  key={index}
                  className="bg-primary-blue flex items-center text-white rounded font-bold text-xs p-1.5 m-1">
                  {detail}
                </span>
              ))}
          </div>
        </div>
        <div className="flex flex-row text-primary-blue items-center mx-4 mb-4">
          <img src="../../assets/img/icons/company-icon.svg" alt="Company icon" />
          <span className="ml-1 font-bold">{company}</span>
        </div>
        <p className="text-grey mx-4 mb-4">{description}</p>
        <div className="mx-4 mb-4 flex flex-wrap">
          <SkillsContainer skills={skills} />
        </div>
        <button
          className="text-white bg-primary-blue w-32 font-bold py-1.5 mx-4 mb-4"
          onClick={() => navigate(`/projects/${sys?.id}`)}>
          Learn more
        </button>
      </div>
      <div className="flex md:col-start-7 md:col-span-3 md:items-center my-8 md:my-0 justify-center">
        <img
          src={image}
          alt="Project"
          className={classNames(
            isMobileThumbnail ? 'w-32 md:w-32' : 'w-1/2 md:w-[20rem] h-auto',
            'flex self-center'
          )}
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
