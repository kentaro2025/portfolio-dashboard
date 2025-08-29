import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Shield, Gamepad2, Globe, Blocks, Cloud, Brain, Zap } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Systems Programming",
      description:
        "High-performance C/C++ development for operating systems, embedded systems, and performance-critical applications.",
      icon: <Code className="h-8 w-8" />,
      features: [
        "Low-level system optimization",
        "Memory management expertise",
        "Multithreading and concurrency",
        "Cross-platform development",
      ],
    },
    {
      title: "Security & Reverse Engineering",
      description: "Comprehensive security analysis, vulnerability assessment, and reverse engineering services.",
      icon: <Shield className="h-8 w-8" />,
      features: ["Binary analysis and disassembly", "Vulnerability research", "Malware analysis", "Security auditing"],
    },
    {
      title: "Game Development",
      description: "Custom game engines, graphics programming, and interactive entertainment solutions.",
      icon: <Gamepad2 className="h-8 w-8" />,
      features: [
        "Custom game engine development",
        "Graphics and shader programming",
        "Physics simulation",
        "Cross-platform deployment",
      ],
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern frameworks and scalable architectures.",
      icon: <Globe className="h-8 w-8" />,
      features: [
        "React/Next.js applications",
        "RESTful API development",
        "Database design and optimization",
        "Real-time applications",
      ],
    },
    {
      title: "Blockchain Solutions",
      description: "Smart contract development, DeFi protocols, and blockchain architecture consulting.",
      icon: <Blocks className="h-8 w-8" />,
      features: [
        "Smart contract development",
        "DeFi protocol design",
        "Blockchain integration",
        "Tokenomics consulting",
      ],
    },
    {
      title: "Cloud Architecture",
      description: "Scalable cloud infrastructure design, DevOps implementation, and containerization.",
      icon: <Cloud className="h-8 w-8" />,
      features: [
        "AWS/Azure/GCP deployment",
        "Kubernetes orchestration",
        "CI/CD pipeline setup",
        "Infrastructure automation",
      ],
    },
    {
      title: "AI/ML Integration",
      description: "Machine learning model development, AI system integration, and data science solutions.",
      icon: <Brain className="h-8 w-8" />,
      features: [
        "Custom ML model development",
        "Computer vision solutions",
        "Natural language processing",
        "AI system optimization",
      ],
    },
    {
      title: "Performance Optimization",
      description: "Code profiling, performance tuning, and system optimization across all technology stacks.",
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Code profiling and analysis",
        "Algorithm optimization",
        "System performance tuning",
        "Scalability improvements",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive software engineering services across multiple domains, from low-level systems programming to
            cutting-edge AI applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                <CardDescription className="text-pretty">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
