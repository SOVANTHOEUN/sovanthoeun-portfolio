"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BlogScene } from "./scene";
import { useSpring } from "framer-motion";


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

interface BlogClientProps {
  post: BlogPost;
}

export function BlogClient({ post }: BlogClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Use spring animation for smoother transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const y = useTransform(smoothProgress, [0, 0.2], [0, -100]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] w-full overflow-hidden">
        <motion.div
          style={{ opacity, y }}
          className="absolute inset-0 z-10"
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <BlogScene title={post.title} />
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
          <div className="prose dark:prose-invert max-w-none prose-sm sm:prose-base md:prose-lg">
            <ReactMarkdown
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{ margin: 0 }}
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
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Related Posts
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 sm:gap-8">
              {post.relatedPosts.map((relatedPost) => (
                <motion.a
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {relatedPost.excerpt}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 dark:bg-indigo-400 origin-left"
        style={{ scaleX: smoothProgress }}
      />
    </main>
  );
} 