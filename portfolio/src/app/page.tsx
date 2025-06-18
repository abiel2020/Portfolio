import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
// import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
      <footer className="border-t border-accent/20 py-8 bg-gradient-to-r from-black to-secondary-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            &copy; 2024 <span className="text-gradient font-semibold">Abiel Yemane</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
