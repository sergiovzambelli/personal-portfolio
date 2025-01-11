import uniqid from 'uniqid'
import { projects } from '@/portfolio'
import ProjectContainer from './ProjectContainer'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='mt-[3em]'>
      <h2 className="text-center mb-[1em] uppercase font-bold">Projects</h2>

      <div className='max-w-[1100px] mx-auto grid grid-cols-[repeat(auto-fit,_minmax(18em,_1fr))] gap-8'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
