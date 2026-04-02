import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  skills: string[];
};

const experiences: Experience[] = [
  {
    period: "April 2022 – November 2025",
    role: "AI & Blockchain Engineer",
    company: "Ink Finance",
    highlights: [
      "Designed tokenomics including the INK token model and integrated decentralized governance mechanisms inspired by MakerDAO with Uniswap v2-based swap experience and AAVE v2–style.",
      "Created the Staking Economy core DeFi dApp on EVM, architecting mathematical models, mechanisms, and smart contracts for staking, pledging, and sponsorship systems.",
      "Built a multi-exchange basis trading bot (Hyperliquid, Binance, Kraken, Bybit) with real-time spread monitoring, funding rate evaluation, and dynamic cross-venue execution.",
      "Developed predictive trading models (CNN, LSTM, Transformers), RAG pipelines, and LLM-powered automation tools using LangChain, OpenAI, and HuggingFace to enhance DeFi analytics and developer workflows.",
      "Developed a backend-only protocol testing framework to validate smart-contract interactions without a UI, contributing to a 9.5+ Certik audit rating for security and architecture.",
    ],
    skills: [
      "Solidity",
      "Rust",
      "Python",
      "TypeScript",
      "Node.js",
      "Web3",
      "Hardhat",
      "Foundry",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "CCXT",
      "Slither",
      "Tenderly",
      "OpenZeppelin",
      "Cryptography",
      "Pandas",
      "NumPy",
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "LangChain",
      "RAG",
      "FAISS",
    ],
  },
  {
    period: "October 2020 – February 2022",
    role: "AI & Full Stack Engineer",
    company: "LooksRare (Startup)",
    highlights: [
      "Implemented an AI-powered NFT art generation pipeline that creates character and item NFTs from short video clips.",
      "Combined computer vision for key frame extraction with diffusion models for stylized art generation and automated metadata packaging for ERC-721/1155 minting.",
      "Delivered backend, admin systems, and scalable microservices for high-volume NFT generation workflows.",
      "Set up CI/CD pipelines with GitHub Actions and containerized the backend with Docker for rapid, stable deployment.",
    ],
    skills: [
      "AI Art Generation",
      "Diffusion Models",
      "Computer Vision",
      "Metadata Automation",
      "Solidity",
      "Smart Contracts",
      "Hardhat",
      "Web3.js",
      "Node.js",
      "MongoDB",
      "Apache Kafka",
      "NFT Standards (ERC-20/721/1155)",
      "BSC",
      "Docker",
      "AWS",
      "CI/CD",
      "GitHub Actions",
      "Nginx",
      "PM2",
    ],
  },
  {
    period: "August 2019 – August 2020",
    role: "AI Solution Architect",
    company: "HSQA (Startup)",
    highlights: [
      "Architected and deployed a web-based platform for automated website testing with AI-driven flows.",
      "Integrated facial recognition and real-time camera authentication for frictionless sign-in workflows.",
      "Built an AI system for loading, chunking, parsing, and indexing large PDF documents with OCR, semantic chunking, embeddings, and vector search using FAISS and AWS OpenSearch.",
      "Designed backend infrastructure on AWS (S3, DynamoDB, Polly, Rekognition, Lex, Lambda, API Gateway) and automated testing with Selenium.",
    ],
    skills: [
      "Deep Learning",
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "OCR",
      "NLP",
      "Embedding Models",
      "FAISS",
      "React.js",
      "Next.js",
      "Three.js",
      "D3.js",
      "Node.js",
      "AWS",
      "Selenium",
      "S3",
      "DynamoDB",
      "Polly",
      "Rekognition",
      "Lex",
      "Lambda",
      "API Gateway",
    ],
  },
  {
    period: "January 2017 – May 2019",
    role: "Full Stack Developer",
    company: "WPP Energy",
    highlights: [
      "Led development of dashboards visualizing real-time energy consumption, savings, and project progress for stakeholders.",
      "Enhanced WPP’s user portals with secure authentication and seamless data exchange with energy partners.",
      "Deployed cloud solutions on AWS to deliver a robust, scalable, and cost-efficient platform.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "AWS (EC2, S3, RDS, CloudWatch)",
      "RESTful APIs",
      "JWT Authentication",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Chart.js",
    ],
  },
  {
    period: "December 2012 – November 2016",
    role: "Game Developer",
    company: "Square Enix",
    highlights: [
      "Developed MMORPG titles for Windows, Android, and iOS with rich game economies designed for long-term engagement.",
      "Used Cocos2d-x, CryEngine, Unity3D, and Three.js to build immersive experiences and AI-driven NPC behaviors.",
      "Engineered a game security platform using C++ and x86/64 Assembly to protect against cheating and reverse engineering.",
      "Implemented real-time authentication and networking using socket programming, enabling seamless low-latency multiplayer gameplay.",
    ],
    skills: [
      "C++",
      "Cocos2d-x",
      "CryEngine",
      "Unity3D",
      "Three.js",
      "Deep Learning",
      "Game Economics",
      "Multiplayer Networking",
      "Game Security",
      "x86/64 Assembly",
      "Socket Programming",
      "Real-Time Systems",
      "Windows/Android/iOS Development",
    ],
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A proven track record of delivering high-impact systems across AI, DeFi, full-stack platforms,
            and large-scale game development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.company + exp.period}
              className="relative border-l-4 border-l-primary bg-background/40 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl">
                        {exp.role}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground text-pretty">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-normal"
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
  );
}

