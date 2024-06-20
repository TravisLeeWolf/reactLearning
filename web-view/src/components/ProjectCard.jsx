import PropTypes from 'prop-types'

function ProjectCard({ details }) {
  return (
    <div className="flex flex-col border border-black text-center rounded-b-xl min-w-full drop-shadow-xl" key={details.id}>
        <h2 className="px-1 pt-2 text-lg">{details.name}</h2>
        <p className="px-2 pb-6">{details.description}</p>
        <a className="px-1 bg-blue-400 text-white font-semibold rounded-b-xl" href={details.link}>Click here</a>
    </div>
  )
}

ProjectCard.defaultProps = {
    details: {
        name: "Project Name",
        description: "Project Description",
        link: "#"
    }
}

ProjectCard.propTypes = {
    details: PropTypes.object.isRequired
}

export default ProjectCard