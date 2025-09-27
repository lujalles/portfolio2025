"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useState } from "react"

const projects = [
  {
    title: "Plataforma MathXpert",
    description:
      "Plataforma web completa para estudiantes, destinada a resolver distintos métodos númericos, con interfaz intuitiva y responsive.",
    tech: ["React", "HTML/CSS", "Python", "Flask", "NumPy", "Matplotlib"],
    image: "/mathxpert.png",
    github: "https://github.com/lujalles/AnalisisNumericoCopia",
    demo: "https://mathxpert.onrender.com/",
    year: "2025",
  },
  {
    title: "App de Protección Contra el Grooming Infantil",
    description:
      "Aplicación web para la detección del Grooming y Bullying en niños y adolescentes, mediante análisis de chats exportados y generación de reportes.",
    tech: ["React Native", "Minimax", "Flask", "Python", "SQLite", "JavaScript", "HTML/CSS", "AI"],
    image: "/appgrooming.png",
    github: "https://github.com",
    demo: "https://z8jo7q8xjpin.space.minimax.io/",
    year: "2025",
  },
  {
    title: "Casagaleria - Sitio de Arte Online - Prototipo",
    description: "Tienda online diseñada para CasaGalería, una galería de arte salteña, con diseño limpio, carrito de compras, visualización de eventos y artistas.",
    tech: ["Next.js", "Node.js", "Tailwind CSS", "Prisma"],
    image: "/casagaleria.png",
    github: "https://github.com",
    demo: "https://v0-casagaleria-website.vercel.app",
    year: "2025",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 text-balance">
                Proyectos Destacados
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-blue-400/10 to-purple-400/10 blur-xl -z-10" />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full" />
            <p
              className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
            >
              Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack y diseño de interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border hover:bg-primary/10 hover:border-primary bg-transparent hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </a>
                      </Button>
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-border hover:bg-primary/10 hover:border-primary bg-transparent hover:scale-105 transition-all duration-300"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
