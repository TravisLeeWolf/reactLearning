import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='flex justify-between font-semibold'>
            <p>{feedback.length} Reviews</p>
            <p>Average Rating: {isNaN(average) ? 0 : average}</p>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats