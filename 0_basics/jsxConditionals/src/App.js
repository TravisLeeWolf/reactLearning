function App() {
    const title = 'Blog Post'
    const body = 'This is a blog post'
    const comments = [
        {id: 1, text: 'comment 1'},
        {id: 2, text: 'comment 2'},
        {id: 3, text: 'comment 3'},
    ]

    const loading = false
    const showComments = true
    const commentDisplay = (
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul> 
        </div>
    )

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <hr />

            {showComments && commentDisplay}
        </div>
    )
}

export default App