import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App() {
    return (
        <div className="bg-indigo-950 text-white min-h-screen">
            <Header />
            <div className="px-2">
                <FeedbackItem />
            </div>
        </div>
    )
}

export default App