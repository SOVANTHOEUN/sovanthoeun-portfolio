"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Float } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 100, 200]} scale={2.4} ref={sphereRef}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
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
                Hi, I'm{" "}
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[400px] lg:h-[600px] -order-1 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 dark:opacity-40 animate-pulse" />
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              className="canvas-container"
            >
              <color attach="background" args={['transparent']} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 5]} intensity={1} />
              <spotLight position={[-2, 2, 5]} intensity={0.5} angle={0.3} penumbra={1} />
              <AnimatedSphere />
              <Environment preset="city" />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
    </section>
  );
} 