import { useRef } from "react";
import { useGsapHeroHeadlineReveal, useGsapHeroImageReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  image1: 'https://res.cloudinary.com/dpz7iqses/image/upload/v1675837623/personal-portfolio/hero-1_h6wu83.jpg',
  image2: 'https://res.cloudinary.com/dpz7iqses/image/upload/v1675837624/personal-portfolio/hero-2_iinsi9.jpg'
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadline1 = useRef(null);
  const heroHeadline2 = useRef(null);

  const heroHeadlineArr = [heroHeadline1, heroHeadline2];

  useHoverEffect(heroImageRef, data.image1, data.image2);
  useGsapHeroImageReveal(heroImageRef);
  useGsapHeroHeadlineReveal(heroHeadlineArr, 1);

  return (
    <div className="hero flex justify-center overflow-hidden">
      <div ref={heroImageRef} className="hero-img"></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadline1}>ReactJS</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadline2}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;