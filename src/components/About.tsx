import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about } from '@/portfolio'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className="flex flex-col items-center mt-12 gap-4">
      {name && (
        <h1 className="font-bold">
          Hi, I am <span className="text-primary">{name}.</span>
        </h1>
      )}

      {role && <h2 className="mt-5 font-bold">{`A ${role}.`}</h2>}
      <p className="mt-6 max-w-xl">{description && description}</p>

      <div className="flex items-center justify-center mt-10">
        {resume && (
          <a href={resume}>
            <span className="text-base btn btn-outline px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-bg transition">
              resume
            </span>
          </a>
        )}

        {/* {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="mr-4 text-primary hover:text-primary-dark transition"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="text-primary hover:text-primary-dark transition"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )} */}
      </div>
    </div>
  )
}

export default About
