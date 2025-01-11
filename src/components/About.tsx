// import GitHubIcon from '@mui/icons-material/GitHub'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about } from "@/portfolio";
import Image from "next/image";

const About = () => {
  const { name, role, description, resume } = about;

  return (
    <div className="flex flex-col items-center mt-4 md:mt-12 gap-4">
      {name && (
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
          Hi, I am <span className="text-primary">{name}.</span>
        </h1>
      )}

      {role && <h2 className="mt-2 md:mt-5 font-bold">{`A ${role}.`}</h2>}
      <p className="mt-6 max-w-xl">{description && description}</p>

      <div className="relative w-full h-60 mt-10 md:h-[50px]">
        {/* Background image on larger screens */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-xl md:hidden"
          style={{
            backgroundImage: "url('/me.webp')",
            backgroundPosition: "50% 25%",
          }}
        />

        {/* Resume button, always visible */}
        {resume && (
          <a href={resume}>
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-base px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-bg transition">
              resume
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default About;
