import { useState } from 'react'
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <div className="bg-indigo-950 text-white min-h-screen">
            <Header />
            <div className="px-2">
                <FeedbackStats feedback={feedback} />
                <FeedbackList 
                    feedback={feedback}
                    handleDelete={deleteFeedback} />
            </div>
        </div>
    )
}

export default App