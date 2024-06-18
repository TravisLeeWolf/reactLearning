function FeedbackItem({ item }) {
    return (
        <div className='bg-white text-black shadow-xl rounded p-1 m-2'>
            <div className='bg-red-500 text-white text-sm text-center rounded-full max-w-6 min-h-6 px-1 -m-3'>{item.rating}</div>
            <div className='px-3 pb-1'>
                <div>{item.text} </div>
            </div>
        </div>
    )
}

export default FeedbackItem