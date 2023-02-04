import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Project = ({ project }) => {
  const projectRightImage = useRef(null);

  useHoverEffect(projectRightImage, project.img1, project.img2);

  return (
    <div className="project grid grid-cols-5 gap-10">
      <div className="project-left col-span-3">
        <div className=" flex flex-col gap-20">
          <span className="project-id text-white/20 text-9xl">{String(`${project.id}`).padStart(2, 0)}</span>
          <h3 className="project-title text-cyan-500 uppercase text-5xl leading-relaxed">{project.title}</h3>
          <p className="project-description text-white/75">{project.description}</p>
          <div className="tools flex flex-wrap gap-10 text-cyan-500">
            {
              project.tools.map((tool, i) => <span key={i}>{tool} {'|'}</span>)
            }
          </div>
          <div className="flex flex-wrap gap-10">
            <button className="py-8 px-14 border border-white/25 uppercase rounded-full hover:bg-cyan-500/25 hover:border-cyan-500/25 duration-300 tracking-widest">
              <a href={project.liveSite} target="_blank" rel="noreferrer">Live Site</a>
            </button>
            <button className="py-8 px-14 border border-white/25 uppercase rounded-full hover:bg-cyan-500/25 hover:border-cyan-500/25 duration-300 tracking-widest">
              <a href={project.backEndCode} target="_blank" rel="noreferrer">Front-end Code</a>
            </button>
            <button>
              {
                project.backEndCode && <a href={project.backEndCode} target="_blank" rel="noreferrer">Front-end Code</a>
              }
            </button>
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