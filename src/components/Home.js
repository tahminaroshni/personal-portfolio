import Bio from './Bio';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <Bio />
      <Projects />
    </div>
  );
};

export default Home;