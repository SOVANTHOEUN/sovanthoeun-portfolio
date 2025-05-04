import { GetStaticProps, GetStaticPaths } from 'next';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink, FiCheck } from "react-icons/fi";

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
  {
    slug: "3d-ui-ux-platform",
    title: "3D UI/UX Platform",
    description: "Developed an interactive 3D interface using React and Three.js. Created immersive user experiences with WebGL animations.",
    techStack: ["React", "Three.js", "WebGL", "TypeScript"],
    features: [
      "Immersive 3D UI",
      "WebGL animations",
      "Modern React architecture",
      "Responsive design",
    ],
    links: {
      github: "https://github.com/yourusername/3d-ui",
      live: "https://3d-ui.example.com",
    },
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Created a scalable e-commerce solution with Spring Boot and React. Implemented secure payment processing and real-time inventory management.",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    features: [
      "Secure payment processing",
      "Real-time inventory management",
      "Scalable architecture",
      "Modern UI/UX",
    ],
    links: {
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce.example.com",
    },
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({ params: { slug: project.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug) || null;
  return { props: { project } };
};

interface ProjectPageProps {
  project: typeof projects[0];
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <motion.div
          style={{ opacity, y }}
          className="absolute inset-0 z-10"
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-indigo-600">{project.title}</h1>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.6 
          }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8 sm:mb-12">
            {project.techStack.map((tech) => (
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
                {project.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: index * 0.1 
                    }}
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
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <FiGithub size={20} />
                  <span className="text-sm sm:text-base">View Source Code</span>
                </motion.a>
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <FiExternalLink size={20} />
                  <span className="text-sm sm:text-base">View Live Demo</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 dark:bg-indigo-400 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </main>
  );
}