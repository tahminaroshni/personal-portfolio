import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Hero = () => {
  const heroImageRef = useRef(null);
  const data = {
    image1: ' https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600',
    image2: 'https://images.pexels.com/photos/2216542/pexels-photo-2216542.jpeg?auto=compress&cs=tinysrgb&w=600'
  };

  useHoverEffect(heroImageRef, data.image1, data.image2);

  return (
    <div className="hero flex justify-center overflow-hidden">
      <div ref={heroImageRef} className="hero-img"></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1>ReactJS</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;