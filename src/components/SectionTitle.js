import { useRef } from "react";
import { useGsapTitleReveal } from "../hooks/gsap";

const SectionTitle = ({ title }) => {
  const titleRef = useRef(null);

  useGsapTitleReveal(titleRef, 1);

  return (
    <div ref={titleRef} className="section-title overflow-hidden mt-40">
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;