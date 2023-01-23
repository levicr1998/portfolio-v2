import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import TextTyper from '../components/TextTyper';
import SkillsContainer, { SkillsContainerProps } from '../components/SkillsContainer';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const skillsContainerItems: SkillsContainerProps[] = [
    {
      title: 'Used languages',
      skills: ['HTML', 'CSS/SCSS', 'Javascript', 'Java', 'PHP', 'C#', 'SQL', 'NoSQL', 'Dart']
    },
    {
      title: 'Used frameworks',
      skills: ['Springboot', 'Angular', 'Vue.js', 'Symfony', 'Capacitor', 'Flutter']
    },
    {
      title: 'Used tools',
      skills: [
        'Git & GitHub',
        'Adobe XD',
        'Docker Desktop',
        'Postman',
        'IntelliJ',
        'Visual Code',
        'Azure DevOps',
        'Trello',
        'Windows Terminal',
        'Figma',
        'Android Studio'
      ]
    }
  ];

  return (
    <>
      <div className="bg-primary-blue h-full">
        <Header />
        <div className="grid grid-cols-6 grid-rows-3 container mx-auto h-screen justify-center">
          <TextTyper
            className="col-start-2 col-span-2 row-start-1 row-span-2"
            wordsToType={['Developer', 'Motivator', 'Teamplayer', 'Discoverer', 'Creator']}
          />
          <div className="col-start-4 row-start-1 row-span-2 col-span-2 flex justify-center items-center">
            <img
              src="../../assets/img/intro-image.png"
              alt="Levi Crietee"
              className="rounded-full w-80 h-80"
            />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-7 grid-rows-4 container mx-auto h-screen justify-center">
          <div className="col-start-2 col-span-2 row-start-2">
            <h3 className="text-3xl font-extrabold text-primary-blue mb-4">About me</h3>
            <p className="text-grey mb-4">
              Hi, my name is Levi Crietee. I’m a passionated ICT & Software Engineering student at
              Fontys. I like to learn new things and challenge myself by working with new advanced
              technologies. I’m a motivated and positive person. I like to work in a team and
              improve myself daily by the feedback of my team members and new things I learned that
              day.
            </p>
            <button className="border border-primary-blue text-primary-blue font-bold px-4 py-3 hover:bg-primary-blue hover:text-white">
              Download resume
            </button>
          </div>
          <div className="col-start-5 col-span-2 row-start-2">
            {skillsContainerItems?.map((props) => (
              <SkillsContainer className='mt-4 first-of-type:mt-0' key={props.title} {...props} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
