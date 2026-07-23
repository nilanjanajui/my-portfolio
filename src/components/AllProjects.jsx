import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ProjectsGrid from './ProjectsGrid'

export default function AllProjects() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="min-h-screen pt-24 sm:pt-32 pb-8 flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="
                      inline-flex items-center gap-2 mb-8
                      bg-white/5 backdrop-blur-md
                      border border-white/12
                      text-light-bg px-5 py-2.5 rounded-xl
                      font-bold text-sm
                      hover:bg-white/10 hover:border-white/20 hover:-translate-x-1
                      shadow-lg shadow-black/20
                      transition-all duration-300
                      w-fit
                    "
                >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Back to Home
                </button>
            </div>
            
            <div className="grow flex flex-col">
                <ProjectsGrid title="All Projects" />
            </div>
        </main>
    )
}
