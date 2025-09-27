"use client"

import { useEffect, useState } from "react"

export function About() {
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

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-background/50 via-background to-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 text-balance">
                Sobre Mí
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-blue-400/10 to-purple-400/10 blur-xl -z-10" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full" />
          </div>

          <div
            className={`grid lg:grid-cols-3 gap-12 items-start transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="lg:col-span-1">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-400 to-purple-400 rounded-full animate-pulse opacity-80" />
                <div
                  className="absolute inset-2 bg-gradient-to-tl from-purple-400 via-blue-400 to-primary rounded-full animate-pulse opacity-60"
                  style={{ animationDelay: "1s" }}
                />
                <div className="absolute inset-4 bg-gradient-to-br from-background/80 to-background/40 rounded-full backdrop-blur-sm" />

                <div
                  className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin"
                  style={{ animationDuration: "20s" }}
                />
                <div
                  className="absolute inset-8 border border-blue-400/30 rounded-full animate-spin"
                  style={{ animationDuration: "15s", animationDirection: "reverse" }}
                />
                <div
                  className="absolute inset-16 border border-purple-400/30 rounded-full animate-spin"
                  style={{ animationDuration: "10s" }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg scale-110">
                    <img 
                      src="/fotocv.jpg" 
                      alt="Lucía Jallés" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className="absolute top-4 right-4 text-primary/60 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  {"</>"}
                </div>
                <div
                  className="absolute bottom-4 left-4 text-blue-400/60 animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  {"{}"}
                </div>
                <div
                  className="absolute top-1/2 left-0 text-purple-400/60 animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                >
                  {"()"}
                </div>
                <div
                  className="absolute top-1/4 right-0 text-primary/60 animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  {"[]"}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                
                
                Soy Lucía Jallés (Salta, 2004), estudiante avanzada de la carrera de Ingeniería en Informática, una desarrolladora apasionada por crear interfaces de usuario accesibles y soluciones digitales que
                combinan diseño reflexivo con ingeniería robusta. Mi trabajo favorito se encuentra en la intersección
                del diseño y el desarrollo, creando experiencias que no solo se ven estéticas sino que están
                meticulosamente construidas a medida para el rendimiento y la usabilidad. 
              </p>

              <p className="text-muted-foreground">
                Actualmente estoy especializándome en{" "}
                <span className="text-primary font-medium">desarrollo web, experiencia de usuario y análiis de datos</span>. Contribuyo a la creación y mantenimiento de componentes de UI
                que alimentan aplicaciones modernas, desarrollo proyectos completos que integran inteligencia artificial de punta a punta y continúo mi formación en el análisis de datos. Además, tengo un interés particular en la
                accesibilidad web, la automatización de procesos y la optimización del rendimiento. 
              </p>

              <p className="text-muted-foreground">
                En el pasado, he tenido la oportunidad de desarrollar software y aplicaciones web en una variedad de entornos — desde{" "}
                <span className="text-primary font-medium">proyectos universitarios</span> y{" "}
                <span className="text-primary font-medium">pequeñas start-ups</span> hasta{" "}
                <span className="text-primary font-medium">proyectos personales</span> y{" "}
                <span className="text-primary font-medium">pequeños estudios de productos digitales</span>.
                Estas experiencias me han permitido trabajar con equipos multifuncionales, aprender nuevas tecnologías rápidamente y adaptarme a diferentes metodologías de desarrollo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
