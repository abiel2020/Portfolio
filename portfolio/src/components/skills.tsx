import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest", "Cypress"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-secondary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with regularly
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="overflow-hidden bg-gradient-to-br from-secondary-800 to-secondary-900 border-accent/20 hover:border-accent/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/10 p-0"
            >
              <CardHeader className="bg-gradient-to-r from-accent/20 to-orange/20 -m-0 p-4 rounded-t-lg border-b border-accent/10">
                <CardTitle className="text-center text-white text-xl m-0 p-0">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-gradient-to-r from-accent to-orange text-white hover:from-accent-600 hover:to-orange-600 transition-all duration-300 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
