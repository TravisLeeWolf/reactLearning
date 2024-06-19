import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({ item, handleDelete }) {

    return (
        <Card>
            <div className='bg-red-500 text-white text-sm text-center rounded-full max-w-6 min-h-6 px-1 -m-3'>{item.rating}</div>
            <button className='float-right' onClick={() => handleDelete(item.id)}>
                <FaTimes />
            </button>
            <div className='px-3 pb-1'>
                <div>{item.text} </div>
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem