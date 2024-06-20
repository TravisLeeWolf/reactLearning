import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'
import Hero from './components/Hero'
import ProjectList from './components/ProjectList'
import ProjectData from './data/ProjectData'

function App() {
  const projects = ProjectData

  return (
    <div>
      <MainHeader />
      <div className="p-2 min-h-screen space-y-3">
        <Hero />
        <ProjectList projects={projects} />
      </div>
      <MainFooter />
    </div>
  )
}

export default App
