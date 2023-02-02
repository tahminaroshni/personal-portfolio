import Bio from './Bio';
import Hero from './Hero';

const Home = () => {
  return (
    <div id='home' className='home container mx-auto mt-20'>
      <Hero />
      <Bio />
    </div>
  );
};

export default Home;