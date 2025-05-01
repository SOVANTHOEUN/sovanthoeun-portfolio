"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiOpenjdk,
  SiSpring,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiThreedotjs,
  SiDocker,
  SiGit,
  SiAmazon,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: 90, icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", level: 80, icon: SiNextdotjs, color: "#000000" },
      { name: "Three.js", level: 75, icon: SiThreedotjs, color: "#000000" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Java", level: 95, icon: SiOpenjdk, color: "#007396" },
      { name: "Spring Framework", level: 90, icon: SiSpring, color: "#6DB33F" },
      { name: "PostgreSQL", level: 85, icon: SiPostgresql, color: "#336791" },
      { name: "Microservices", level: 85, icon: SiSpring, color: "#6DB33F" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", level: 90, icon: SiGit, color: "#F05032" },
      { name: "Docker", level: 75, icon: SiDocker, color: "#2496ED" },
      { name: "AWS", level: 65, icon: SiAmazon, color: "#FF9900" },
      { name: "CI/CD", level: 70, icon: SiGit, color: "#F05032" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With over 7 years of experience, I've developed expertise in various
            technologies across the full stack development spectrum.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon
                          className="text-gray-600 dark:text-gray-400"
                          size={20}
                          style={{ color: skill.color }}
                        />
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: skill.color,
                          opacity: 0.8,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/resume.pdf"
            className="btn btn-primary inline-flex items-center gap-2"
            download
          >
            <span>Download Full Resume</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 