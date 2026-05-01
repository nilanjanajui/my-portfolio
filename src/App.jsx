import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Hero from "./components/Hero"
import FeaturedProject from "./components/FeaturedProject"
import ProjectsGrid from "./components/ProjectsGrid"
import GitHubActivity from './components/GitHubActivity'
import Skills from "./components/Skills"
import HowIBuild from "./components/HowIBuild"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Contact from "./components/Contact"
import ProjectDetail from "./components/ProjectDetail"

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-primary text-light-bg selection:bg-accent selection:text-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <main className="grow">
            <Hero />
            <FeaturedProject />
            <ProjectsGrid />
            <GitHubActivity />
            <Skills />
            <HowIBuild />
            <About />
            <Education />
            <Experience />
            <Contact />
          </main>
        } />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}