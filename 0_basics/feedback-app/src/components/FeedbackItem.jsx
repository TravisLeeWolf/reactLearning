import { useState } from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(5)
    const [text, setText] = useState('Sample text for a feedback item to be displayed')

    const handleClick = () => {
        setRating(prev => prev + 1)
    }

    return (
        <div className='bg-white text-black shadow-xl rounded p-1 m-2'>
            <div className='bg-red-500 text-white text-sm text-center rounded-full max-w-6 min-h-6 px-1 -m-3'>{rating}</div>
            <div className='px-3 pb-1'>
                <div>{text} </div>
                <button className='p-1 text-xs border rounded border-green-600 hover:text-white hover:bg-green-600 hover:drop-shadow-md' onClick={handleClick}>+ Rating</button>
            </div>
        </div>
    )
}

export default FeedbackItem