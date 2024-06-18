import { useState } from 'react'
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from './components/FeedbackList'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <div className="bg-indigo-950 text-white min-h-screen">
            <Header />
            <div className="px-2">
                <FeedbackList feedback={feedback} />
            </div>
        </div>
    )
}

export default App