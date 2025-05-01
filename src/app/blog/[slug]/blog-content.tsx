"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { useRef } from "react";

interface BlogPost {
  title: string;
  date: string;
  content: string;
  relatedPosts: {
    title: string;
    slug: string;
    excerpt: string;
  }[];
}

function BlogScene({ title }: { title: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center>
          <Text3D
            font="/fonts/Inter_Bold.json"
            size={0.5}
            height={0.2}
            curveSegments={12}
          >
            {title}
            <meshStandardMaterial color="#6366f1" />
          </Text3D>
        </Center>
      </Float>
    </Canvas>
  );
}

export function BlogContent({ blogData }: { blogData: BlogPost }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative h-[50vh] overflow-hidden">
        <motion.div
          style={{ opacity, transform: `translateY(${translateY}px)` }}
          className="absolute inset-0 z-10"
        >
          <BlogScene title={blogData.title} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Related Posts
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogData.relatedPosts.map((post) => (
                <motion.a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
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
        style={{ transform: `scaleX(${scrollYProgress})` }}
      />
    </main>
  );
} 