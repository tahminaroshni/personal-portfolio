import Project from "./Project";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    id: 1,
    title: "Tech Alpha",
    img1: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675837629/personal-portfolio/tech-alpha-1_my74di.png",
    img2: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675837623/personal-portfolio/tech-alpha-2_r0rjwd.png",
    description: "Tech Alpha is a modern web application built using React, Redux Toolkit, Tailwind CSS, and React Router. The project leberages the power of Redux Thunk and Axios to fetch and manage data seamlessly, allowing for a dynamic and responsive user experience. Users are able to add their favorite products to a virtual cart and book them for purchase, making the shopping process quick and convenient. This project showcases the potential of React, Redux and other cutting-edge technologies,  delivering a high-quality and user-friendly experience to its users. ",
    tools: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "RTK Query",
      "Tailwind CSS"
    ],
    liveSite: 'https://tech-alpha-project.netlify.app',
    frontEndCode: 'https://github.com/tahminaroshni/tech-alpha',
    backEndCode: ''
  },
  {
    id: 2,
    title: "Foodverse",
    img1: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675837625/personal-portfolio/food-verse-1_ryd8s1.png",
    img2: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675837632/personal-portfolio/food-verse-2_w3ipbo.png",
    description: "Foodverse is a react-based recipe discovering platform that allows users to browse and save their favorite recipes. Utilizing Tailwind CSS and React Router, it offers a visually appealing intetface and easy navigation. Data is retrieved using Async/Await for fast and seamless integration. Users can add recipes to their favorites and view detailed instructions with a simple click. Food verse simplifies recipe discovery and meal planning for all food enthusiasts. ",
    tools: [
      "React.js",
      "React Router",
      "Tailwind CSS"
    ],
    liveSite: ' https://foodverse-project.netlify.app',
    frontEndCode: ' https://github.com/tahminaroshni/foodverse',
    backEndCode: ''
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects overflow-hidden">
      <SectionTitle title="projects" />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {
          projects.map(project => <Project key={project.id} project={project} />)
        }
      </div>
    </div>
  );
};

export default Projects;