import { useLoaderData, ScrollRestoration } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { TypeProject } from '../../types';
import Footer from '../../components/Footer/Footer';
import { CompanyIcon, LinkIcon } from '../../components/icons';
import SkillsContainer from '../../components/SkillsContainer/SkillsContainer';
import { classNames } from '../../helpers/classHelper';
import { footerItems } from '../../components/Footer/data';
import { motion } from 'framer-motion';
import { animationProps } from '../../helpers';
import { useCurrentBreakpoints } from '../../hooks/useCurrentBreakpoint';
import { useMemo } from 'react';

export const Project = () => {
  const projectContenful = useLoaderData() as TypeProject;
  const project = {
    ...projectContenful?.fields,
    videoUrl: projectContenful?.fields?.video?.fields?.file?.url,
    themeColor: projectContenful?.fields?.themeColor ?? 'primary-blue'
  };
  const breakpoints = useCurrentBreakpoints();
  const isDesktop = useMemo(() => {
    return breakpoints.includes('lg');
  }, [breakpoints]);
  return (
    <>
      <ScrollRestoration />
      <div
        className={classNames(
          'bg-gradient-to-b h-[200px]',
          `from-${project?.themeColor}/80 to-${project?.themeColor}`
        )}>
        <div className="grid grid-cols-3 pt-12 items-center">
          <BackButton className={classNames('relative z-10 ml-12', `bg-${project?.themeColor}`)} />
          <motion.h3
            className="text-3xl font-extrabold text-white text-center "
            {...animationProps(0)}>
            {project?.title}
          </motion.h3>
        </div>
      </div>
      <div
        className={classNames(
          `bg-${project?.themeColor}`,
          'h-full',
          project?.videoUrl ? 'pb-52 lg:pb-[500px]' : 'pb-52'
        )}>
        <div className="mx-12 grid grid-cols-4">
          <motion.h3
            className="text-3xl font-extrabold text-white mb-6 col-span-4"
            {...animationProps(-200)}>
            Project details
          </motion.h3>
          <motion.div
            className="bg-white/10 w-full px-5 pb-5 pt-4 col-span-4 lg:col-span-2 relative"
            {...animationProps(-200)}>
            <div className="flex items-center justify-between">
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
              {(project?.links as any)?.live?.enabled && (
                <a href={(project?.links as any)?.live?.link}>
                  <LinkIcon className="fill-white w-7 h-7s" />
                </a>
              )}
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
                <div>
                  <SkillsContainer
                    skills={project?.skills ?? []}
                    themeColor={project?.themeColor}
                    hasProjectThemeColors
                  />
                </div>
              </div>
            }
            {project?.videoUrl && isDesktop && (
              <motion.div
                {...animationProps(400)}
                className={classNames(
                  'hidden bg-black lg:flex absolute -bottom-[380px] lg:-bottom-[320px] lg:-right-[450px] w-[500px] h-[350px] justify-center'
                )}>
                <VideoPlayer videoUrl={(project?.videoUrl as string) ?? ''} />
              </motion.div>
            )}
          </motion.div>
          {project?.videoUrl && !isDesktop && (
            <div className="bg-black flex mt-8 w-full col-span-4 h-[350px] lg:hidden">
              <VideoPlayer videoUrl={(project?.videoUrl as string) ?? ''} />
            </div>
          )}
        </div>
      </div>
      <div></div>
      <Footer themeColor={project?.themeColor} items={footerItems} />
    </>
  );
};
