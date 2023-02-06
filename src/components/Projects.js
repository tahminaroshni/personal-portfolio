import Project from "./Project";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    id: 1,
    title: "Tech Alpha",
    img1: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675318115/personal-portfolio/tech-alpha-1_h780ct.png",
    img2: " https://res.cloudinary.com/dpz7iqses/image/upload/v1675318030/personal-portfolio/tech-alpha-2_wsowmx.png",
    description: "Shopping cart functionality has been implemented using Redux Toolkit. All the product data has been served via JSON server and fetched using RTK Query. Cart items also saved into the local storage of the client’s browser",
    tools: [
      "React.js",
      "Redux",
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
    img1: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675318100/personal-portfolio/food-verse-1_lnsgdy.png",
    img2: "https://res.cloudinary.com/dpz7iqses/image/upload/v1675318046/personal-portfolio/food-verse-2_u9poun.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta quam pariatur sint numquam architecto necessitatibus et exercitationem facere odit? Odio distinctio repudiandae eveniet architecto provident explicabo molestias placeat sit!",
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