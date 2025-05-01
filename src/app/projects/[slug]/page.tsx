"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { FiGithub, FiExternalLink, FiCheck } from "react-icons/fi";
import { useRef } from "react";

// This would come from your data source
const projects = [
  {
    slug: "financial-web-app",
    title: "Financial Web Application",
    description: "A full-stack financial platform built with Spring Cloud and React.",
    techStack: ["Spring Cloud", "React", "TypeScript", "Microservices"],
    features: [
      "Real-time financial data processing",
      "Secure user authentication",
      "Interactive data visualization",
      "Microservices architecture",
    ],
    links: {
      github: "https://github.com/yourusername/finance-app",
      live: "https://finance-app.example.com",
    },
  },
  // Add more projects here
];

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function ProjectScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ height: '100%', width: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center>
          <Text3D
            font="/fonts/Inter_Bold.json"
            size={0.35}
            height={0.2}
            curveSegments={12}
          >
            {projectData.title}
            <meshStandardMaterial color="#6366f1" />
          </Text3D>
        </Center>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

export default function ProjectPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <motion.div
          style={{ opacity, y }}
          className="absolute inset-0 z-10"
        >
          <ProjectScene />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            {projectData.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            {projectData.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8 sm:mb-12">
            {projectData.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Key Features
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {projectData.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <FiCheck className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Project Links
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href={projectData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FiGithub size={20} />
                  <span className="text-sm sm:text-base">View Source Code</span>
                </a>
                <a
                  href={projectData.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FiExternalLink size={20} />
                  <span className="text-sm sm:text-base">View Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 