import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useGsapFooterReveal } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useGsapFooterReveal(footerRef, 0.5);

  return (
    <footer ref={footerRef} className="footer my-40 text-center ">
      <p className="text-white/50">&copy; 2023 <HashLink to="#home" className="link-item hover:text-white">Tahmina Akter Tanni</HashLink>. Crafted by yours truly</p>
    </footer>
  );
};

export default Footer;