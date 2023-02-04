import SectionTitle from "./SectionTitle";

const data = [
  { id: 1, skill: 'HTML' },
  { id: 2, skill: 'CSS' },
  { id: 3, skill: 'Bootstrap' },
  { id: 4, skill: 'Tailwind CSS' },
  { id: 5, skill: 'Material UI' },
  { id: 6, skill: 'JavaScript' },
  { id: 7, skill: 'React' },
  { id: 8, skill: 'React Router' },
  { id: 9, skill: 'Redux' },
  { id: 10, skill: 'Redux Toolkit' },
  { id: 12, skill: 'GSAP' },
  { id: 13, skill: 'Firebase' },
  { id: 14, skill: 'Github' },
  { id: 15, skill: 'Netlify' },
];

const Skills = () => {
  return (
    <div id="skills">
      <SectionTitle title="skills" />
      <div className="skills-wrapper mt-40 grid grid-cols-2 gap-10">
        <div className="skill-left flex flex-col gap-10">
          {
            data.filter((_, i) => i < Math.floor(data.length / 2)).map((skill, i) => {
              return <div key={skill.id} className="skill-item flex gap-10 items-baseline pb-5">
                <span className="skill-id text-white/50">{String(`${skill.id}`).padStart(2, 0).padEnd(3, '.')}</span>
                <span className="skill-name text-3xl">{skill.skill}</span>
              </div>
            })
          }
        </div>
        <div className="skill-right flex flex-col gap-10">
          {
            data.filter((_, i) => i >= Math.floor(data.length / 2)).map((skill, i) => {
              return <div key={skill.id} className="skill-item flex gap-10 items-baseline pb-5">
                <span className="skill-id text-white/50">{String(`${skill.id}`).padStart(2, 0).padEnd(3, '.')}</span>
                <span className="skill-name text-3xl">{skill.skill}</span>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;