"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted relative overflow-hidden"
    >
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
      />

      <motion.div
        style={{ y, opacity }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-2xl"></div>
            <img
              src="/software-engineer-headshot.png"
              alt="Kentaro Namba"
              className="w-48 h-48 rounded-full mx-auto border-4 border-primary/20 relative z-10"
            />
          </div>
        </motion.div> */}

        <motion.h1
          className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 text-balance"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Kentaro Namba
        </motion.h1>

        <motion.p
          className="font-heading text-xl sm:text-2xl text-primary mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Senior Software Engineer
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Crafting innovative solutions across C/C++, Reverse engineering, Game
          development, Full-stack engineering, Blockchain engineering, AWS &
          Azure Clouding, and AI/ML programming.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="w-full sm:w-auto transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent transition-all duration-300 hover:shadow-lg hover:bg-primary/5"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="transition-all duration-300 hover:bg-primary/10"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="transition-all duration-300 hover:bg-primary/10"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
