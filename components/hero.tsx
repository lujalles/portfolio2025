"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles, Rocket, Users, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 pt-32">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(101, 163, 163, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 25%, 
              rgba(147, 51, 234, 0.1) 50%, 
              transparent 70%),
            linear-gradient(135deg, 
              rgba(101, 163, 163, 0.1) 0%, 
              rgba(59, 130, 246, 0.05) 50%, 
              rgba(147, 51, 234, 0.1) 100%)
          `,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`mb-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="flex items-center space-x-3 bg-background/10 backdrop-blur-sm border border-border/20 rounded-full px-6 py-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">LJ</span>
          </div>
          <span className="text-muted-foreground">Bienvenido a mi portafolio personal</span>
          <span className="text-lg">👋</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12">
        <div
          className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 text-balance animate-pulse">
                Lucía Jallés
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-400/20 to-purple-400/20 blur-lg -z-10 animate-pulse" />
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Code className="h-6 w-6 text-primary animate-bounce" />
              <h2 className="text-xl lg:text-2xl text-primary font-medium">Estudiante de Ingeniería en Informática</h2>
              <Sparkles className="h-5 w-5 text-purple-400 animate-spin" style={{ animationDuration: "3s" }} />
            </div>

            <p
              className={`text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
            >
              Construyo soluciones digitales accesibles y experiencias que combinan diseño reflexivo con ingeniería
              robusta. Mi trabajo favorito se encuentra en la intersección del diseño y el desarrollo.
            </p>
          </div>

          <div
            className={`flex items-center justify-center space-x-4 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
          >
            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-gradient-to-r hover:from-primary/20 hover:to-blue-400/20 hover:border-primary bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              asChild
            >
              <a href="https://github.com/lujalles" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-gradient-to-r hover:from-blue-400/20 hover:to-primary/20 hover:border-blue-400 bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25"
              asChild
            >
              <a href="https://www.linkedin.com/in/luciajalles/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-gradient-to-r hover:from-purple-400/20 hover:to-primary/20 hover:border-purple-400 bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25"
              asChild
            >
              <a href="mailto:luciajalles04@email.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="group bg-background/5 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:bg-background/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Desarrollo Full-Stack</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Especializada en crear aplicaciones web modernas con IA y tecnologías de vanguardia.
            </p>
          </div>

          <div className="group bg-background/5 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:bg-background/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/10">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Innovación Tecnológica</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Apasionada por explorar nuevas tecnologías e implementar soluciones creativas.
            </p>
          </div>

          <div className="group bg-background/5 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:bg-background/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/10">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Trabajo Colaborativo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experiencia trabajando en equipos multidisciplinarios y proyectos académicos.
            </p>
          </div>

          <div className="group bg-background/5 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:bg-background/10 hover:border-green-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/10">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Formación constante en Análisis de Datos</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comprometida con el aprendizaje continuo, con herramientas como Power BI y la mejora constante de mis habilidades de reconocimiento de comportamientos y tendencias.
            </p>
          </div>
        </div>

        <Button
          onClick={scrollToAbout}
          variant="ghost"
          className={`text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-blue-400 group transition-all duration-1000 delay-900 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
        >
          <ArrowDown className="h-4 w-4 mr-2 group-hover:translate-y-1 group-hover:text-primary transition-all duration-300" />
          Conocé más sobre mí
        </Button>
      </div>
    </section>
  )
}
