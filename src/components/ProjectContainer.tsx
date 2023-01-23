import SkillsContainer from './SkillsContainer';

type Props = {
  title: string;
  details: string[];
  company: string;
  description: string;
  skills: string[];
  image: string;
};

const ProjectContainer = ({ title, details, company, description, skills, image }: Props) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-row m-6 items-center">
        <h1 className="font-black text-3xl mr-3">{title}</h1>
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
        <img src="../assets/img/icons/company-icon.svg" alt="Company icon" />
        <span className="ml-1 font-bold">{company}</span>
      </div>
      <p className="text-grey mx-4 mb-4">{description}</p>
      <div className="mx-4 mb-4 flex flex-wrap">
        <SkillsContainer skills={skills} />
      </div>
      <button className="text-white bg-primary-blue w-32 font-bold py-1.5 mx-4 mb-4">
        Learn more
      </button>
      <img src={image} alt="Project" className="w-32 mr-20 mb-4 self-center" />
    </div>
  );
};

export default ProjectContainer;
