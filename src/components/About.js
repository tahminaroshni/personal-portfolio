import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675318034/personal-portfolio/about-1_dqkg69.jpg",
  img2: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675318040/personal-portfolio/about-2_faul2l.jpg"
}

const About = () => {
  const aboutImageRef = useRef(null);

  useHoverEffect(aboutImageRef, data.img1, data.img2);

  return (
    <div id="about">
      <SectionTitle title={"About"} />
      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20">
        <div className="about-left overflow-hidden">
          <div ref={aboutImageRef} className="about-left-img"></div>
        </div>
        <div className="about-right flex flex-col gap-10">
          <p>I am a MERN stack developer with a strong focus on React, Redux, and Tailwind CSS. I specialize in building responsive and user-friendly web applications that provide a seamless experience for the end-user. With my in-depth knowledge of the latest web development technologies and frameworks, I am able to create innovative solutions that meet the needs of my clients. Whether it's a simple website or a complex web application, I am committed to delivering high-quality work that exceeds expectations.
          </p>
          <p>In addition to my expertise in the MERN stack, I also have a strong background in UI design and animation. I am skilled in using the GreenSock Animation Platform (GSAP) library to create dynamic and engaging user interfaces. I have experience in creating smooth animations and transitions that enhance the overall user experience. I am also well-versed in using other design tools such as Adobe XD and Figma to create wireframes and mockups. My ability to combine my technical skills with my artistic eye allows me to create visually appealing and functional web applications that stand out in the market.
          </p>
          <div>
            <button className="about-btn inline-block py-8 px-14 border border-white/25 uppercase rounded-full hover:bg-cyan-500/25 hover:border-cyan-500/25 duration-300 tracking-widest">
              <a href="https://www.google.com" target="_blank" rel="noreferrer">View Resume</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;