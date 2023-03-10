import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";

function App() {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useSmoothScroll();
  useCustomCursor(innerCursorRef, outerCursorRef);

  return (
    <div className="App container mx-auto mt-20">
      <div className="noise"></div>
      <CustomCursor innerCursorRef={innerCursorRef} outerCursorRef={outerCursorRef} />
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navbar footerNav />
      <Footer />
    </div>
  );
}

export default App;

// https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600
// https://images.pexels.com/photos/2693814/pexels-photo-2693814.jpeg?auto=compress&cs=tinysrgb&w=600
// https://images.pexels.com/photos/2216542/pexels-photo-2216542.jpeg?auto=compress&cs=tinysrgb&w=600


// https://res.cloudinary.com/dpz7iqses/image/upload/v1675318115/personal-portfolio/tech-alpha-1_h780ct.png
// https://res.cloudinary.com/dpz7iqses/image/upload/v1675318030/personal-portfolio/tech-alpha-2_wsowmx.png
// https://res.cloudinary.com/dpz7iqses/image/upload/v1675318100/personal-portfolio/food-verse-1_lnsgdy.png
// https://res.cloudinary.com/dpz7iqses/image/upload/v1675318046/personal-portfolio/food-verse-2_u9poun.png
// https://res.cloudinary.com/dpz7iqses/image/upload/v1675318044/personal-portfolio/food-verse-3_ee9tvp.png
// https://res.cloudinary.com/dpz7iqses/image/upload/v1675318034/personal-portfolio/about-1_dqkg69.jpg
// https://res.cloudinary.com/dpz7iqses/image/upload/v1675318040/personal-portfolio/about-2_faul2l.jpg

// https://tech-alpha-project.netlify.app
// https://foodverse-project.netlify.app

// https://github.com/tahminaroshni/tech-alpha
// https://github.com/tahminaroshni/foodverse