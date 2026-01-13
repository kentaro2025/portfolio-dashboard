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
        "Began developing applications using C / C++ / C# / Java / Qt and OOP, Data Structures, Algorithms, Computer Networks, Operating Systems, Database Systems, Software Engineering, etc.",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      year: "2014 ~ 2020",
      title: "Game Development Focus",
      description:
        "Specialized in game engine using Unity3d / Cocos2d / Unreal and security of communication, developed games for Windows, Android, and iOS",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      year: "2015 ~ now",
      title: "Reverse Engineering Expertise",
      description:
        "Developed skills in binary analysis and security research using IDA Pro / Ghidra / Immunity Debugger / OllyDbg / x64dbg / WinDbg / C++ Decompiler / C# Decompiler / Java Decompiler / Qt Decompiler, worked on windows / web / android app's analysis",
      icon: <MapPin className="h-4 w-4" />,
    },
    {
      year: "2017 ~ now",
      title: "Full-Stack Development",
      description: "Expanded into web technologies and full-stack for ecommerce, social media, and other web applications using Node.js, JavaScript/TypeScript (React, Next.js, Angular, Vue.js, Express.js), Python (Django, Flask), Go, PHP (Laravel, CodeIgniter), PostgreSQL, MongoDB, MySQL, Oracle",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      year: "2020 ~ now",
      title: "Blockchain Architecture",
      description:
        "Specialized in Blockchain development and Smart contracts for DeFi dapps and NFTs on EVM/Solana/Bitcoin/Sui using Solidity, Rust, Move, etc.",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      year: "2023 ~ now",
      title: "AI/ML Integration",
      description: "Integrated machine learning and AI into software solutions using TensorFlow, PyTorch, OpenAI, DeepSeek, etc.",
      icon: <MapPin className="h-4 w-4" />,
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
            delivering secure, scalable solutions across AI/ML, Full-Stack, Web3/Blockchain, DevOps, and cloud infrastructure. My journey in
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
              Starting with <b>C/C++ programming</b> in 2012, I've continuously evolved
              my expertise across diverse technology domains. My passion for
              understanding systems at their core led me through <b>Reverse
              engineering, Game development</b>, and eventually into modern 
              <b> Full Stack development, Blockchain, AI/ML engineering</b>, and etc.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              In <b>Blockchain development</b>, I’ve launched <b>50+ Production smart contracts</b> powering DeFi
              platforms, <b>DEXs, Staking, Lending, and GameFi</b> with $50M+ in volume
              on <b>EVM/Solana/Bitcoin Mainnet</b>.
              <br />For a few example, I've architected and deployed production-grade
              DeFi protocols including the <b>Ink Economy Finance Platform</b>, a comprehensive
              ecosystem with yield farming, liquidity pools, and NFT staking that processed
              $50M+ in transactions. 
              <br />Built <b>SolSniper</b>, an advanced MEV-protected token
              sniper bot with real-time on-chain monitoring and automated execution strategies
              for the Solana ecosystem.
              <br /> I also built a <b>Cross-exchange Basis
              Trading Bot</b> (Hyperliquid, Binance, Kraken, ByBit) leveraging live
              spread and funding data for real-time execution.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              In <b>Full Stack development</b>, I'm skilled in using various technologies including <b>Node.js, JavaScript/TypeScript (React, Next.js),
              Python, Go, C/C++, C#, PHP (Laravel, CodeIgniter), Unity3d,
              Cocos2d, Unreal</b>, and <b>Database systems (PostgreSQL, MongoDB, MySQL,
              Oracle)</b>.
              <br />Built <b>ModernShop</b>, a scalable full-stack e-commerce platform with real-time
              inventory management, payment gateway integration, and AI-powered recommendations,
              architected with microservices to handle thousands of concurrent transactions
              with 99.9% uptime.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              In <b>AI/ML engineering</b>, I have hands-on work in <b>NLP, predictive
              modeling, LLM, and Computer Vision using TensorFlow and PyTorch</b>. 
              <br />I've built <b>AI Movie Generator</b>, a content
              creation platform leveraging LLM integration and computer vision to generate
              production-ready scripts and storyboards. Created <b>CleverChat</b>, an intelligent
              conversational AI with multi-modal capabilities, real-time NLP processing, and
              context-aware responses for enterprise applications.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              In <b>Game development</b>, I created <b>PokerGamePlugins</b> for Unity3d and Cocos2d,
              implementing secure multiplayer networking, anti-cheat systems, and real-time
              synchronization for competitive gaming experiences deployed across desktop and
              mobile platforms.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              Also, I've developed <b>WowsaMeet</b> - a real-time video conferencing platform with WebRTC integration, featuring screen
              sharing and recording capabilities, scaling to support thousands of simultaneous
              participants with low-latency streaming.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              Strong in cloud-native <b>DevOps</b> with AWS, Docker, Kubernetes, and 
              <b> CI/CD automation</b>.
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
