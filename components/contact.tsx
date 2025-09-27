"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

export function Contact() {
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

    const element = document.getElementById("contact")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 text-balance">
                Contacto
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-blue-400/10 to-purple-400/10 blur-xl -z-10" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full" />
          </div>

          <div
            className={`text-center space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground text-balance">
                ¿Te gustaría discutir un proyecto o simplemente saludar?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Siempre estoy abierta a nuevas oportunidades y colaboraciones. No dudes en contactarme si tenés alguna
                pregunta o propuesta.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="mailto:luciajalles04@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar mensaje
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Mail, title: "Email", info: "luciajalles04@gmail.com" },
              { icon: MapPin, title: "Ubicación", info: "Argentina" },
              { icon: Phone, title: "Teléfono", info: "+5493872133377" },
            ].map((contact, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/5 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full flex items-center justify-center mx-auto">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{contact.title}</h4>
                    <p className="text-sm text-muted-foreground">{contact.info}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className={`flex justify-center space-x-6 transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-gradient-to-r hover:from-primary/20 hover:to-blue-400/20 hover:border-primary bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-lg"
              asChild
            >
              <a href="https://github.com/lujalles" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-border hover:bg-gradient-to-r hover:from-blue-400/20 hover:to-purple-400/20 hover:border-blue-400 bg-transparent hover:scale-110 transition-all duration-300 hover:shadow-lg"
              asChild
            >
              <a href="https://www.linkedin.com/in/luciajalles/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div
            className={`text-center pt-8 border-t border-border transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
          >
            <p className="text-sm text-muted-foreground">© 2025 Lucía Jallés.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
