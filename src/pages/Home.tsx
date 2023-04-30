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
      skills: [
        'HTML',
        'CSS/SCSS',
        'Javascript',
        'Typescript',
        'Java',
        'PHP',
        'C#',
        'SQL',
        'NoSQL',
        'Dart'
      ]
    },
    {
      title: 'Used frameworks',
      skills: [
        'Springboot',
        'Angular',
        'Vue.js',
        'Symfony',
        'Capacitor',
        'Flutter',
        'React',
        'React Native',
        'Next.JS'
      ]
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
        'Figma',
        'Trello',
        'JIRA',
        'Windows Terminal',
        'Android Studio',
        'Azure DevOps',
      ]
    }
  ];

  return (
    <>
      <div className="bg-primary-blue h-full">
        <Header />
        <div className="grid grid-cols-6 md:grid-cols-8 grid-rows-3 container mx-auto h-screen justify-center">
          <TextTyper
            className="col-span-6 md:col-span-2 md:col-start-1 lg:col-start-2 md:row-span-2 mx-auto text-center"
            wordsToType={['Developer', 'Motivator', 'Teamplayer', 'Discoverer', 'Creator']}
          />
          <div className="flex justify-center items-center col-span-6 md:col-span-3 md:row-span-2 md:col-start-6 lg:col-start-5">
            <img
              src="../../assets/img/intro-image.png"
              alt="Levi Crietee"
              className="rounded-full w-60 h-60 xs:w-64 xs:h-64 md:h-60 md:w-60 lg:w-80 lg:h-80"
            />
          </div>
        </div>
      </div>
      <div className="bg-white mb-20">
        <div className="flex flex-col md:grid md:grid-cols-7 md:grid-rows-4 container mx-auto md:h-screen justify-center">
          <div className="mx-5 mt-20 md:mx-0 md:my-0 col-start-2 col-span-5 md:col-start-1 md:col-span-3 md:row-start-2 lg:col-span-2 lg:col-start-2">
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
          <div className="mx-5 my-10 md:my-0 md:mx-0 col-start-2 col-span-5 md:col-start-5 md:col-span-3 md:row-start-2 lg:col-start-5 lg:col-span-2">
            {skillsContainerItems?.map((props) => (
              <SkillsContainer className="mt-4 first-of-type:mt-0" key={props.title} {...props} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
