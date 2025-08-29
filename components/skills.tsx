import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Shield,
  Gamepad2,
  Globe,
  Blocks,
  Cloud,
  Brain,
  Wifi,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "C/C++ Programming",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Systems Programming", level: 95 },
        { name: "Desktop Programming", level: 97 },
        { name: "Performance Optimization", level: 85 },
        { name: "Memory Management", level: 92 },
        { name: "Multithreading", level: 95 },
      ],
    },
    {
      title: "Reverse Engineering",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Binary Analysis", level: 90 },
        { name: "Disassembly", level: 95 },
        { name: "Integrated Security", level: 92 },
        { name: "Security Research", level: 80 },
        { name: "Malware Analysis", level: 88 },
      ],
    },
    {
      title: "Network Programming",
      icon: <Wifi className="h-6 w-6" />,
      skills: [
        { name: "TCP / UDP / Sockets", level: 95 },
        { name: "HTTP / REST / WebSocket", level: 92 },
        { name: "gRPC / RPC Protocols", level: 85 },
        { name: "Network Security: SSL/TLS / VPN", level: 78 },
        { name: "Open SIP / Software Switch", level: 75 },
      ],
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="h-6 w-6" />,
      skills: [
        { name: "Unity3D / Cocos2D / Unreal", level: 90 },
        { name: "Network Programming", level: 97 },
        { name: "Graphics Programming", level: 85 },
        { name: "Physics & Math Simulation", level: 82 },
        { name: "AI Development", level: 80 },
      ],
    },
    {
      title: "Full Stack Engineering",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "HTML5 / CSS3 / TypeScript", level: 90 },
        { name: "React / Next.js", level: 90 },
        { name: "Node.js / Express / Nest", level: 95 },
        { name: "Database Design", level: 85 },
        { name: "API Development", level: 95 },
      ],
    },
    {
      title: "Blockchain Architecture",
      icon: <Blocks className="h-6 w-6" />,
      skills: [
        { name: "Solidity / Rust", level: 95 },
        { name: "Smart Contracts", level: 92 },
        { name: "DeFi Protocols", level: 88 },
        { name: "Trading Bot", level: 92 },
        { name: "Web3 Integration", level: 95 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS / Azure / GCP", level: 88 },
        { name: "Docker / Kubernetes", level: 85 },
        { name: "CI / CD Pipelines", level: 90 },
        { name: "Infrastructure as Code", level: 82 },
        { name: "Monitoring & Logging", level: 82 },
      ],
    },
    {
      title: "AI/ML Programming",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Python / PyTorch / TorchEngine", level: 80 },
        { name: "Model: CNN / RNN / GNN", level: 75 },
        { name: "Computer Vision: Yolo / Vgg / OpenCV", level: 85 },
        { name: "Audio: DeepSpeach / TTS / LibRosa", level: 82 },
        { name: "Generative AI: NLP, LLM, GPTs", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive skill set spanning low-level systems programming to
            cutting-edge AI/ML applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <span className="font-heading text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
