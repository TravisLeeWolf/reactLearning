import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  return (
    <div className={`bg-white text-black shadow-xl rounded p-1 m-2 ${reverse && 'bg-indigo-800 text-white'}`}>
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card