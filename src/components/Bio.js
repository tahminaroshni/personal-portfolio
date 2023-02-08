import { useRef } from "react";
import { useGsapBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useGsapBioReveal(bioRef, 2);

  return (
    <div className="bio container mx-auto mt-20 overflow-hidden">
      <p ref={bioRef}>I am a ReactJS developer with expertize in React, Redux, Tailwind CSS and Bootstrap and also learning Mern Stack. I deliver responsive, creative and innovative web applications. Passionate about coding and always up to date with latest technologies. Let's create a high quality solution together!</p>
    </div>
  );
};

export default Bio;