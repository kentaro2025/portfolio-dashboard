import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function Products() {
  const projects = [
    // 🟢 BLOCKCHAIN & WEB3
    {
      title: "Ink Finance Economy Staking & Governance DApps",
      description:
        "DeFi protocol with staking, pledging, and DAO governance smart contracts optimized for gas efficiency and security.",
      image: "/ink-finance-dapp.png",
      technologies: ["Solidity", "TypeScript", "Web3", "DeFi"],
      github: "https://github.com/kentaro2025/solidity-inkfinance-staking-v3",
      demo: "https://app.inkfinance.xyz",
    },
    {
      title: "Loxar NFT Marketplace",
      description:
        "Blockchain-powered NFT marketplace for fractional real estate ownership with custom smart contracts and frontend integration.",
      image: "/loxar-nft-marketplace.png",
      technologies: ["Solidity", "React", "IPFS", "ERC721 / 1155"],
      github: "https://github.com/LooksRare",
      demo: "https://looksrare.org/",
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
      title: "Real-Time Trading Bot",
      description:
        "High-frequency trading system with machine learning algorithms for cryptocurrency and traditional markets.",
      image: "/trading-bot-dashboard-interface.png",
      technologies: ["Node.js", "AWS", "WebSocket", "AI/ML"],
      github: "https://github.com/kentaro2025/basis-tradingbot-frontend-v1",
      demo: "https://basis-tradingbot-frontend-v1.vercel.app/",
    },

    // 🔵 AI & DATA
    {
      title: "AI Music Video Generator",
      description:
        "AI-powered system that automatically generates music videos by syncing visuals with beats and lyrics.",
      image: "/ai-music-video-generator.png",
      technologies: ["React", "TensorFlow", "OpenCV", "FFmpeg"],
      github: "https://github.com/kentaro2025/music-video-generator-ai",
      demo: "https://music-video-generator-ai-mocha.vercel.app/",
    },
    {
      title: "AI-Powered Code Optimizer",
      description:
        "Machine learning system that analyzes and optimizes C/C++ code for performance improvements and bug detection.",
      image: "/ai-code-analysis-visualization.png",
      technologies: ["Python", "TensorFlow", "LLVM", "C/C++"],
      github: "#",
      demo: "#",
    },

    // 🎮 GAMES & SYSTEMS
    {
      title: "Slot Machine Game",
      description:
        "Interactive slot machine game developed in Unity3D with Node.js backend for multiplayer and reward mechanics.",
      image: "/slot-machine-game.png",
      technologies: ["Unity3D", "C#", "Node.js", "MongoDB"],
      github: "https://github.com/kentaro2025/slot-machine-unity3d",
      demo: "#",
    },
    {
      title: "High-Performance Game Engine",
      description:
        "Custom C++ game engine with advanced rendering pipeline, physics simulation, and cross-platform support.",
      image: "/game-engine-architecture-diagram.png",
      technologies: ["C++", "OpenGL", "Vulkan", "Physics"],
      github: "#",
      demo: "#",
    },

    // ⚙️ DEVOPS & SYSTEMS
    {
      title: "Cloud-Native Microservices",
      description:
        "Scalable microservices architecture deployed on Kubernetes with automated CI/CD and monitoring.",
      image: "/microservices-architecture.png",
      technologies: ["Go", "Docker", "Kubernetes", "AWS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Reverse Engineering Toolkit",
      description:
        "Comprehensive suite of tools for binary analysis, disassembly, and security research with automated vulnerability detection.",
      image: "/reverse-engineering-tools-interface.png",
      technologies: ["C++", "Assembly", "IDA Pro", "Cheat Engine"],
      github:
        "https://github.com/kentaro2025/integrated-reverse-engineering-tools",
      demo: "#",
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of innovative projects spanning game engines, blockchain
            platforms, security tools, and AI-powered applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-pretty">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Application
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
