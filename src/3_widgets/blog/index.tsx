"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const blogPosts = [
  {
    slug: "my-journey-in-korea",
    title: "My Journey in Korea",
    excerpt:
      "Sharing my experience of living and working in Korea for the past 6 years, from cultural adaptation to professional growth.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Life",
  },
  {
    slug: "building-microservices-with-spring-cloud",
    title: "Building Microservices with Spring Cloud",
    excerpt:
      "A deep dive into creating scalable microservices architecture using Spring Cloud and best practices for distributed systems.",
    date: "2024-03-10",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    slug: "mentoring-junior-developers",
    title: "Mentoring Junior Developers",
    excerpt:
      "Lessons learned from mentoring junior developers and helping them grow in their careers while working remotely.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Career",
  },
];

export function Blog() {
  const router = useRouter();

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Latest Articles
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => router.push(`/blog/${post.slug}`)}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}