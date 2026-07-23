import { Routes, Route, Navigate } from 'react-router-dom'
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectsGrid from "./components/ProjectsGrid"
import GitHubActivity from './components/GitHubActivity'
import Skills from "./components/Skills"
import About from "./components/About"
import Journey from "./components/Journey"
import Education from "./components/Education"
import HowIBuild from "./components/HowIBuild"
import Contact from "./components/Contact"
import ProjectDetail from "./components/ProjectDetail"
import AllProjects from "./components/AllProjects"
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-primary text-light-bg selection:bg-accent selection:text-white">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1e1e2a',
            color: '#f0ece8',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600',
          },
          success: {
            iconTheme: { primary: '#715A5A', secondary: '#fff' },
          },
        }}
      />

      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-accent/15 blur-[100px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-80 h-80 bg-secondary/30 blur-[80px] rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-72 h-72 bg-accent/10 blur-[90px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="grow">
              <Hero />
              <ProjectsGrid limit={4} showViewMore={true} title="Featured Projects" />
              <GitHubActivity />
              <Skills />
              <About />
              <Journey />
              <Education />
              <HowIBuild />
              <Contact />
            </main>
          } />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

    </div>
  )
}