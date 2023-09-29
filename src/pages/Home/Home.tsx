import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';
import TextTyper from '../../components/TextTyper/TextTyper';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';
import Footer from '../../components/Footer/Footer';
import { footerItems } from '../../components/Footer/data';
import { motion } from 'framer-motion';
import { useScrollToAnchor } from '../../hooks/useScrollToAnchor';
import { skillsContainerItems } from './data';
import { useGetContentfulProjects } from '../../hooks/useGetContentfulProjects';
import SkillsContainer from '../../components/SkillsContainer/SkillsContainer';
import { useState } from 'react';
import { animationProps } from '../../helpers';
import { useGetCvUrl } from '../../hooks/useGetCvUrl';

export const Home = () => {
  useScrollToAnchor();
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [projects, isLoading] = useGetContentfulProjects(showMoreProjects ? 10 : 5);
  const [cvFileUrl] = useGetCvUrl();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="bg-primary-blue h-full relative">
        <Header />
        <div
          id="home"
          className="grid grid-cols-6 md:grid-cols-8 grid-rows-3 container mx-auto h-[calc(100vh-5rem)] justify-center">
          <motion.div
            className="col-span-6 md:col-span-2 md:col-start-1 lg:col-start-2 md:row-span-2 mx-auto text-center"
            {...animationProps(-200)}>
            <TextTyper
              className="w-full h-full"
              wordsToType={['Developer', 'Motivator', 'Teamplayer', 'Discoverer', 'Creator']}
            />
          </motion.div>
          <div className="flex justify-center items-center col-span-6 md:col-span-3 md:row-span-2 md:col-start-6 lg:col-start-5">
            <motion.img
              src="../../../assets/img/intro-image.png"
              alt="Levi Crietee"
              className="rounded-full w-60 h-60 xs:w-64 xs:h-64 md:h-60 md:w-60 lg:w-80 lg:h-80"
              {...animationProps(200)}
            />
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1690033990">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div className="bg-white mb-20" id="about-me-container">
        <div className="flex flex-col md:grid md:grid-cols-7 md:grid-rows-4 container mx-auto md:h-screen justify-center">
          <motion.div
            className="mx-5 mt-20 md:mx-0 md:my-0 col-start-2 col-span-5 md:col-start-1 md:col-span-3 md:row-start-2 lg:col-span-2 lg:col-start-2"
            {...animationProps(-200)}>
            <h3 className="text-3xl font-extrabold text-primary-blue mb-4">About me</h3>
            <p className="text-grey mb-8">
              Hello, my name is Levi Crietee. <br /> <br />
              I am a dedicated Frontend Developer with a passion for continuous learning and
              embracing new, advanced technologies. <br /> <br /> I am a motivated and positive
              individual who thrives in a team environment, constantly seeking opportunities to
              enhance my skills through constructive feedback from my colleagues and the knowledge I
              acquire each day.
            </p>
            <a
              target="_blank"
              href={cvFileUrl}
              className="border border-primary-blue text-primary-blue font-bold px-4 py-2.5  duration-500 hover:bg-primary-blue hover:text-white"
              rel="noreferrer">
              Download resume
            </a>
          </motion.div>
          <motion.div
            {...animationProps(200)}
            className="mx-5 my-10 md:my-0 md:mx-0 col-start-2 col-span-5 md:col-start-5 md:col-span-3 md:row-start-2 lg:col-start-5 lg:col-span-2">
            {skillsContainerItems?.map((props) => (
              <SkillsContainer className="mt-4 first-of-type:mt-0" key={props.title} {...props} />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="bg-primary-blue relative" id="projects-container">
        <div className="custom-shape-divider-top-1690034218">
          <svg
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"></path>
          </svg>
        </div>
        <div className="container mx-auto py-5 mb-48">
          <h3 className="text-3xl font-extrabold text-white mt-32 w-[90%] mx-auto">My projects</h3>
          {projects.map((project, index) => (
            <ProjectContainer
              containerClasses="mt-8"
              key={project.fields?.id}
              image={project?.fields?.thumbnail?.fields?.file?.url}
              isEven={index % 2 === 0}
              {...project.fields}
              {...project}
            />
          ))}
          <div className="w-full flex justify-center mt-8">
            <motion.button
              {...animationProps(-100)}
              className="border border-white text-white font-bold px-4 py-2.5 duration-500 hover:bg-white hover:text-primary-blue"
              onClick={() => setShowMoreProjects((prevState) => !prevState)}>
              {showMoreProjects ? 'Show less projects' : 'Show more projects'}
            </motion.button>
          </div>
        </div>
        <Footer items={footerItems} />
      </div>
    </>
  );
};
