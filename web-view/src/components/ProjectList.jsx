import PropTypes from 'prop-types'
import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  if (!projects || projects.length === 0) {
    return <div>Projects coming soon!</div>
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-4">
      {projects.map((item) => (
        <ProjectCard key={item.id} details={item} />
      ))}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectList