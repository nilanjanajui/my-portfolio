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
import CustomCursor from "./components/CustomCursor"
import InteractiveBackground from "./components/InteractiveBackground"
import ScrollToTop from "./components/ScrollToTop"
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-primary text-light-bg selection:bg-accent selection:text-white">
      <CustomCursor />
      <InteractiveBackground />
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
              <ScrollToTop />
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