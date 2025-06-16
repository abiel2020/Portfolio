import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "WinScope",
      description:"A NBA Player Analytics Dashboard that empowers users to explore, compare, and predict NBA player performance using advanced data visualization and machine learning.",
      image: "/winscope.jpeg",
      technologies: ["Next.js", "TypeScript", "MogoDB", "Python","Scikit-learn", "pandas", "numpy", ],
      liveUrl: "#",
      githubUrl: "https://github.com/abiel2020/WinScope",
    },
    {
      title: "TradeSpace",
      description:"Ai powered trading journal that allows users to track their trades, analyze their performance, and improve their trading skills.",
      image: "/tradespace.webp?height=200&width=400",
      technologies: ["React","TypeScript", "Node.js", "Next.js", "Supabase", "OpenAI API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white realtive">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-white border-gray-200 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-black group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-accent to-orange hover:from-accent-600 hover:to-orange-600 text-white transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
