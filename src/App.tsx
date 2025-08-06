import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import ProjectPreview from './components/ProjectPreview'
import Curriculum from './components/Curriculum'
import Tools from './components/Tools'
import Instructor from './components/Instructor'
import ValueProposition from './components/ValueProposition'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <ProjectPreview />
      <Curriculum />
      <Tools />
      <Instructor />
      <ValueProposition />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default App