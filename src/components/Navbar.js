import { HashLink } from "react-router-hash-link";

const Navbar = ({ footerNav }) => {
  return (
    <nav className={`navbar container mx-auto ${footerNav ? 'mt-40' : 'mt-20'} flex justify-between uppercase`}>
      <div className="logo">
        <HashLink className=" link-item" smooth to='#home'>
          {
            footerNav ? 'Go to top' : ' Tahmina Akter Tanni'
          }
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink className="link-item" to='#home'>Home</HashLink>
        </li>
        <li>
          <HashLink className="link-item" to='#projects'>Projects</HashLink>
        </li>
        <li>
          <HashLink className="link-item" to='#skills'>Skills</HashLink>
        </li>
        <li>
          <HashLink className="link-item" to='#about'>About</HashLink>
        </li>
        <li>
          <HashLink className="link-item" to='#contact'>Contact</HashLink>
        </li>
        <li>
          <a href="https://www.google.com" target='_blank' rel="noreferrer" className="link-item" to='#resume'>View Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;