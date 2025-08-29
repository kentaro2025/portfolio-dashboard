import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Products() {
  const projects = [
    {
      title: "High-Performance Game Engine",
      description:
        "Custom C++ game engine with advanced rendering pipeline, physics simulation, and cross-platform support.",
      image: "/game-engine-architecture-diagram.png",
      technologies: ["C++", "OpenGL", "Vulkan", "Physics"],
      github: "#",
      demo: "#",
    },
    {
      title: "Blockchain Analytics Platform",
      description:
        "Full-stack application for analyzing blockchain transactions with real-time monitoring and AI-powered insights.",
      image: "/blockchain-analytics-dashboard.png",
      technologies: ["React", "Node.js", "Solidity", "Python"],
      github: "#",
      demo: "#",
    },
    {
      title: "Reverse Engineering Toolkit",
      description:
        "Comprehensive suite of tools for binary analysis, disassembly, and security research with automated vulnerability detection.",
      image: "/reverse-engineering-tools-interface.png",
      technologies: ["C++", "Python", "Assembly", "Qt"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI-Powered Code Optimizer",
      description:
        "Machine learning system that analyzes and optimizes C/C++ code for performance improvements and bug detection.",
      image: "/ai-code-analysis-visualization.png",
      technologies: ["Python", "TensorFlow", "LLVM", "C++"],
      github: "#",
      demo: "#",
    },
    {
      title: "Cloud-Native Microservices",
      description: "Scalable microservices architecture deployed on Kubernetes with automated CI/CD and monitoring.",
      image: "/microservices-architecture.png",
      technologies: ["Go", "Docker", "Kubernetes", "AWS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-Time Trading Bot",
      description:
        "High-frequency trading system with machine learning algorithms for cryptocurrency and traditional markets.",
      image: "/trading-bot-dashboard-interface.png",
      technologies: ["C++", "Python", "WebSocket", "ML"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of innovative projects spanning game engines, blockchain platforms, security tools, and
            AI-powered applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
