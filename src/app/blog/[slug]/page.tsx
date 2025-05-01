"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// This would come from your data source
const blogData = {
  title: "Building Modern Web Applications with Next.js and Three.js",
  date: "March 15, 2024",
  content: `
# Building Modern Web Applications

Modern web applications require a combination of performance, interactivity, and visual appeal. In this post, we'll explore how to create engaging user experiences using Next.js and Three.js.

## Getting Started

First, let's set up our project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm install three @react-three/fiber @react-three/drei
\`\`\`

## Creating 3D Elements

Here's a simple example of a 3D scene:

\`\`\`jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Sphere>
        <meshStandardMaterial color="hotpink" />
      </Sphere>
      <OrbitControls />
    </Canvas>
  )
}
\`\`\`

## Best Practices

1. Optimize performance
2. Use proper lighting
3. Implement responsive design
4. Add smooth animations

## Conclusion

Building modern web applications is an exciting journey. With the right tools and techniques, you can create amazing user experiences.
  `,
  relatedPosts: [
    {
      title: "Advanced Three.js Techniques",
      slug: "advanced-threejs",
      excerpt: "Learn advanced techniques for creating stunning 3D web experiences.",
    },
    {
      title: "Next.js Performance Optimization",
      slug: "nextjs-performance",
      excerpt: "Tips and tricks for optimizing your Next.js applications.",
    },
  ],
};

function BlogScene() {
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
            {blogData.title}
            <meshStandardMaterial color="#6366f1" />
          </Text3D>
        </Center>
      </Float>
    </Canvas>
  );
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] w-full overflow-hidden">
        <motion.div
          style={{ opacity, y }}
          className="absolute inset-0 z-10"
        >
          <BlogScene />
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
          <div className="prose dark:prose-invert max-w-none prose-sm sm:prose-base md:prose-lg">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {blogData.content}
            </ReactMarkdown>
          </div>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Related Posts
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 sm:gap-8">
              {blogData.relatedPosts.map((post) => (
                <motion.a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </motion.a>
              ))}
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