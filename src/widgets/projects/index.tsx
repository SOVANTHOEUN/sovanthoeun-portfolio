"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Financial Web Application",
    description:
      "Built a full-stack financial platform using Spring Cloud and React. Implemented microservices architecture for scalability and maintainability.",
    image: "/projects/finance.jpg",
    technologies: ["Spring Cloud", "React", "TypeScript", "Microservices"],
    links: {
      github: "https://github.com/yourusername/finance-app",
      live: "https://finance-app.example.com",
    },
  },
  {
    title: "3D UI/UX Platform",
    description:
      "Developed an interactive 3D interface using React and Three.js. Created immersive user experiences with WebGL animations.",
    image: "/projects/3d-ui.jpg",
    technologies: ["React", "Three.js", "WebGL", "TypeScript"],
    links: {
      github: "https://github.com/yourusername/3d-ui",
      live: "https://3d-ui.example.com",
    },
  },
  {
    title: "E-commerce Platform",
    description:
      "Created a scalable e-commerce solution with Spring Boot and React. Implemented secure payment processing and real-time inventory management.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce.example.com",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-indigo-600/10 transition-colors duration-300" />
                {/* Add actual project images later */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Project Image
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 