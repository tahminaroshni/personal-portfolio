import { useRef } from "react";
import { useGsapAboutReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675837628/personal-portfolio/about-1_uagyc4.jpg",
  img2: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675837625/personal-portfolio/about-2_nqydp4.jpg"
}

const About = () => {
  const aboutImageRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutArr = [aboutImageRef, aboutRightRef];

  useHoverEffect(aboutImageRef, data.img1, data.img2);
  useGsapAboutReveal(aboutArr, 1);

  return (
    <div id="about">
      <SectionTitle title={"About"} />
      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left overflow-hidden">
          <div ref={aboutImageRef} className="about-left-img"></div>
        </div>
        <div ref={aboutRightRef} className="about-right flex flex-col gap-10">
          <p> I am a highly skilled ReactJS developer. I have a strong focus on creating responsive websites using the latest technologies and frameworks. I have expertize in using React, Redux, Tailwind CSS and Bootstrap to build high-quality and user-friendly web applications. With a passion for building creative and innovative solutions, I am dedicated to delivering exceptional results of my clients. I am highly motivated and focused on delivering projects on time and within budget, always striving to exceed expectations.
          </p>
          <p>In addition to my goal is to become a full-stack MERN developer and I am currently expanding my knowledge and skills in backend development. I am constantly striving to improve and enhance my skills, always looking for new and innovative ways to bring my projects to life.
          </p>
          <div>
            <button className="about-btn inline-block py-8 px-14 border border-white/25 uppercase rounded-full hover:bg-cyan-500/25 hover:border-cyan-500/25 duration-300 tracking-widest">
              <a href="https://docs.google.com/document/d/1hxYzH__U_99pivIKX-XsztLaNZ9lzF6JMFpZupgm60w/edit?usp=drivesdk" target="_blank" rel="noreferrer">View Resume</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;