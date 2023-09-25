import { useLoaderData } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { TypeProject } from '../../types';
import Footer from '../../components/Footer/Footer';
import { CompanyIcon } from '../../components/icons';
import SkillsContainer from '../../components/SkillsContainer/SkillsContainer';
import { classNames } from '../../helpers/classHelper';
import useScrollToTop from '../../hooks/useScrollToTop';
import { footerItems } from '../../components/Footer/data';

export const Project = () => {
  useScrollToTop();
  const projectContenful = useLoaderData() as TypeProject;
  const project = {
    ...projectContenful?.fields,
    videoUrl: projectContenful?.fields?.video?.fields?.file?.url,
    themeColor: projectContenful?.fields?.themeColor ?? 'primary-blue'
  };
  return (
    <div>
      <div
        className={classNames(
          'bg-gradient-to-b h-[200px]',
          `from-${project?.themeColor}/80 to-${project?.themeColor}`
        )}>
        <div className="grid grid-cols-3 pt-12 items-center">
          <BackButton className={classNames('relative z-10 ml-12', `bg-${project?.themeColor}`)} />
          <h3 className="text-3xl font-extrabold text-white text-center">{project?.title}</h3>
        </div>
      </div>
      <div
        className={classNames(
          `bg-${project?.themeColor}`,
          'h-full',
          project?.videoUrl ? 'pb-52 lg:pb-[500px]' : 'pb-52'
        )}>
        <div className="mx-12 grid grid-cols-4">
          <h3 className="text-3xl font-extrabold text-white mb-6 col-span-4">Project details</h3>
          <div className="bg-white/10 w-full p-8 col-span-4 lg:col-span-2 relative">
            <div className="flex items-center content-center">
              <div className="flex flex-wrap items-center">
                {project?.details !== undefined &&
                  project?.details.map((detail, index) => (
                    <span
                      key={index}
                      className={classNames(
                        'flex items-center border-white/90 border text-white rounded font-bold text-xs p-1.5 first:mx-0 mx-2',
                        `bg-${project?.themeColor}/80`
                      )}>
                      {detail}
                    </span>
                  ))}
              </div>
            </div>
            <div className="flex items-center text-white font-bold mt-2">
              <CompanyIcon className="stroke-2 stroke-white w-8 h-8" />
              <span className="ml-2">{project?.company}</span>
            </div>
            <div className="mt-2">
              <span className="font-bold text-white mt-2">Description</span>
              <p className="text-white">{project?.description}</p>
            </div>
            {
              <div className="mt-2">
                <span className="font-bold text-white">Used technologies</span>
                <p>
                  <SkillsContainer
                    skills={project?.skills ?? []}
                    themeColor={project?.themeColor}
                    hasProjectThemeColors
                  />
                </p>
              </div>
            }
            {project?.videoUrl && (
              <div
                className={classNames(
                  'hidden bg-black lg:flex absolute -bottom-[380px] lg:-bottom-[320px] lg:-right-[450px] w-[500px] h-[350px] justify-center'
                )}>
                <VideoPlayer videoUrl={(project?.videoUrl as string) ?? ''} />
              </div>
            )}
          </div>
          {project?.videoUrl && (
            <div
              className='bg-black flex mt-8 w-full col-span-4 h-[350px] lg:hidden'>
              <VideoPlayer videoUrl={(project?.videoUrl as string) ?? ''} />
            </div>
          )}
        </div>
      </div>
      <div></div>
      <Footer themeColor={project?.themeColor} items={footerItems} />
    </div>
  );
};
