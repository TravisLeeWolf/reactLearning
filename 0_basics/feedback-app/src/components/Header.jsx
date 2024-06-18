import PropTypes from 'prop-types'

function Header({ text }) {
  return (
    <header>
        <div className="text-center shadow-xl p-2">
            <h1>{text} </h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI",
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header