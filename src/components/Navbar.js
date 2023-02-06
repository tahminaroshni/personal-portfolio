import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useGsapLinksReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const logoRef = useRef(null);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);

  const linksArr = [logoRef, link1Ref, link2Ref, link3Ref, link4Ref, link5Ref, link6Ref];

  useGsapLinksReveal(linksArr, 1.5);

  return (
    <nav className={`navbar container mx-auto ${footerNav ? 'mt-40' : 'mt-20'} flex justify-between uppercase`}>
      <div ref={logoRef} className="logo">
        <HashLink className=" link-item" smooth to='#home'>
          {
            footerNav ? 'Go to top' : ' Tahmina Akter Tanni'
          }
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li ref={link1Ref}>
          <HashLink className="link-item" to='#home'>Home</HashLink>
        </li>
        <li ref={link2Ref}>
          <HashLink className="link-item" to='#projects'>Projects</HashLink>
        </li>
        <li ref={link3Ref}>
          <HashLink className="link-item" to='#skills'>Skills</HashLink>
        </li>
        <li ref={link4Ref}>
          <HashLink className="link-item" to='#about'>About</HashLink>
        </li>
        <li ref={link5Ref}>
          <HashLink className="link-item" to='#contact'>Contact</HashLink>
        </li>
        <li ref={link6Ref}>
          <a href="https://www.google.com" target='_blank' rel="noreferrer" className="link-item" to='#resume'>View Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;