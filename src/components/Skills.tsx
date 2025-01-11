import uniqid from "uniqid";
import { skills } from "@/portfolio";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="mt-[5em]" id="skills">
      <h2 className="text-center mb-[1em] uppercase font-bold">Skills</h2>
      <ul className="max-w-[500px] w-[95%] mx-auto flex flex-wrap justify-center">
        {skills.map((skill) => (
          <li key={uniqid()} className="m-2 block py-3 px-5 font-medium text-base md:text-lg transition-transform duration-200 ease-in-out bg-bg-alt hover:transform hover:translate-y-[-4px]">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
