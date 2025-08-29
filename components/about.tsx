"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "2012 ~ now",
      title: "Started Programming Journey",
      description:
        "Began developing applications using C/C++ and computer science fundamentals",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      year: "2014 ~ 2020",
      title: "Game Development Focus",
      description:
        "Specialized in game engine development and security of communication",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      year: "2015 ~ now",
      title: "Reverse Engineering Expertise",
      description:
        "Developed skills in binary analysis and security research, worked on windows / web / android app's analysis",
      icon: <MapPin className="h-4 w-4" />,
    },
    {
      year: "2017 ~ now",
      title: "Full-Stack Development",
      description: "Expanded into web technologies and full-stack architecture",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      year: "2020 ~ now",
      title: "Blockchain Architecture",
      description:
        "Specialized in blockchain development and smart contracts on EVM/Solana/Bitcoin",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      year: "2023 ~ now",
      title: "AI/ML Integration",
      description: "Integrated machine learning and AI into software solutions",
      icon: <MapPin className="h-4 w-4" />,
    },
    {
      year: "2025",
      title: "Senior Software Engineer",
      description:
        "Developing complex projects across multiple technology domains",
      icon: <Briefcase className="h-4 w-4" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm a Senior Software Engineer with 10+ years of experience
            delivering secure, scalable solutions across Full-Stack, Web3,
            Blockchain, DevOps, AI/ML, and cloud infrastructure. My journey in
            software engineering spans over a decade, evolving from low-level
            programming to cutting-edge AI/ML applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
              My Journey Since 2012
            </h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Starting with C/C++ programming in 2012, I've continuously evolved
              my expertise across diverse technology domains. My passion for
              understanding systems at their core led me through reverse
              engineering, game development, and eventually into modern
              full-stack development, blockchain architecture, and AI/ML
              programming.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              I’ve launched 50+ Production smart contracts powering DeFi
              platforms, DEXs, Staking, Lending, and GameFi with $50M+ in volume
              on EVM/Solana/Bitcoin Mainnet. I built a cross-exchange Basis
              Trading Bot (Hyperliquid, Binance, Kraken, ByBit) leveraging live
              spread and funding data for real-time execution.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              Skilled in Node.js, JavaScript/TypeScript (React, Next.js),
              Python, Go, C/C++, C#, PHP (Laravel, CodeIgniter), Unity3d,
              Cocos2d, and Database systems (PostgreSQL, MongoDB, MysQL,
              Oracle).
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              Strong in cloud-native DevOps with AWS, Docker, Kubernetes, and
              CI/CD automation.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              Passionate about AI/ML, with hands-on work in NLP, predictive
              modeling, and CV using TensorFlow and PyTorch. I value clean code,
              secure architecture, and thriving in fast-moving, collaborative
              teams.
            </p>
            <p className="text-muted-foreground text-pretty">
              Today, I leverage this broad technical foundation to architect
              innovative solutions that bridge traditional software engineering
              with emerging technologies, always focusing on performance,
              security, and scalability.
            </p>
          </motion.div>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-l-4 border-l-primary bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="flex-shrink-0 w-8 h-8 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary border border-primary/20"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-heading font-semibold text-primary">
                            {item.year}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            •
                          </span>
                          <h4 className="font-medium text-foreground">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground text-pretty">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
