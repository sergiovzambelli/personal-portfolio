import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface Project {
  name: string;
  description: string;
  stack?: string[];
  sourceCode?: string;
  livePreview?: string;
}

const ProjectContainer = ({ project }: { project: Project }) => (
  <div className="p-8 mx-auto text-center border-[1px] border-fg rounded-xl flex flex-col justify-between transition-transform duration-200 transform hover:translate-y-[-7px]">
    <h3 className="font-bold text-xl">{project.name}</h3>

    <p className="mt-4">{project.description}</p>
    {project.stack && (
      <ul className="flex flex-wrap justify-center my-5">
        {project.stack.map((item) => (
          <li key={uniqid()} className="m-2 text-sm text-primary font-semibold">
            {item}
          </li>
        ))}
      </ul>
    )}

    <div className="flex flex-row gap-2 justify-center">
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label="source code"
          className="inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label="live preview"
          className="inline-flex items-center "
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  </div>
);

export default ProjectContainer;
