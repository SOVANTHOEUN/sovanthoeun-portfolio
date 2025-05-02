"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        ".role-text",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        }
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 px-4 mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg font-medium text-indigo-600 dark:text-indigo-400"
              >
                Full Stack Developer
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold tracking-tight"
              >
                Hi, I&apos;m{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  Sovanthoeun
                </span>
              </motion.h1>
              <div className="overflow-hidden h-12">
                <div className="role-text-container">
                  <p className="role-text text-xl text-gray-600 dark:text-gray-300">
                    {"<"} Java Developer {"/>"}
                  </p>
                  <p className="role-text text-xl text-gray-600 dark:text-gray-300">
                    {"<"} React Engineer {"/>"}
                  </p>
                  <p className="role-text text-xl text-gray-600 dark:text-gray-300">
                    {"<"} UI/UX Enthusiast {"/>"}
                  </p>
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              7+ years of experience crafting elegant solutions with Spring Cloud,
              React, and modern web technologies. Currently exploring AI/ML and
              DevOps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="btn btn-primary min-w-[150px] flex items-center justify-center"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="btn btn-outline min-w-[150px] flex items-center justify-center"
                download
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start text-gray-600 dark:text-gray-400"
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <HiMail size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
    </section>
  );
}