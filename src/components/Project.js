import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Project = ({ project }) => {
  const projectRightImage = useRef(null);

  useHoverEffect(projectRightImage, project.img1, project.img2);

  return (
    <div className="project grid grid-cols-5">
      <div className="project-left col-span-3">
        <div className=" flex flex-col gap-10">
          <span className="project-id text-white/20 text-9xl">{String(`${project.id}`).padStart(2, 0)}</span>
          <h3 className="project-title text-cyan-500 uppercase text-5xl">{project.title}</h3>
          <p className="project-description text-white/75">{project.description}</p>
          <div className="tools flex flex-wrap gap-10 text-cyan-500">
            {
              project.tools.map((tool, i) => <span key={i}>{tool}</span>)
            }
          </div>
          <div className="flex flex-wrap gap-10">
            <span className="py-8 px-14 border border-white/25 uppercase rounded-full">
              <a href={project.liveSite} target="_blank" rel="noreferrer">Live Site</a>
            </span>
            <span>
              {
                project.backEndCode && <a href={project.frontEndCode} target="_blank" rel="noreferrer">Front-end Code</a>
              }
            </span>
          </div>
        </div>
      </div>
      <div className="project-right col-span-2 justify-self-end">
        <div ref={projectRightImage} className="project-right-img"></div>
      </div>
    </div>
  );
};

export default Project;