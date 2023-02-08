import { useRef } from "react";
import { useGsapSocialsReveal } from "../hooks/gsap";

const data = [
  { id: 1, title: 'Facebook', link: 'https://www.facebook.com/roshnisharmin.tonny' },
  { id: 2, title: 'Github', link: 'https://github.com/tahminaroshni' },
  { id: 3, title: 'LinkedIn', link: 'https://www.linkedin.com/in/tahmina-tanni-982060265/' },
  { id: 4, title: 'Leetcode', link: 'https://leetcode.com/tahminaroshni/' },
  { id: 5, title: 'Twitter', link: 'https://twitter.com/tahminaroshni' },
];

const Socials = () => {
  const socialsRef = useRef(null);

  useGsapSocialsReveal(socialsRef, 2.5);

  return (
    <ul ref={socialsRef} className="socials overflow-hidden flex gap-8 tracking-[3px] text-sm uppercase fixed origin-left top-[70%] bg-black/75 text-white/60 backdrop-blur p-5 px-8 -rotate-90 left-10">
      {
        data.map(socials => <li className="hover:text-cyan-500 duration-300 " key={socials.id}><a href={socials.link} target="_blank" rel="noreferrer">{socials.title}</a></li>)
      }
    </ul>
  );
};

export default Socials;