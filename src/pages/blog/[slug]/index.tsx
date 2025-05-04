import { GetStaticProps, GetStaticPaths } from 'next';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const blogPosts = [
  {
    slug: "building-modern-web-apps",
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
        excerpt:
          "Learn advanced techniques for creating stunning 3D web experiences.",
      },
      {
        title: "Next.js Performance Optimization",
        slug: "nextjs-performance",
        excerpt: "Tips and tricks for optimizing your Next.js applications.",
      },
    ],
  },
  {
    slug: "my-journey-in-korea",
    title: "My Journey in Korea",
    date: "May 4, 2025",
    content: `
# My Journey in Korea

This blog post shares my experiences and adventures during my time in Korea. From exploring the vibrant cities to enjoying the serene countryside, Korea has been an unforgettable journey.

## Highlights

- Visiting historical landmarks
- Tasting delicious Korean cuisine
- Experiencing the culture and traditions

## Conclusion

Korea is a beautiful country with a rich history and culture. I highly recommend visiting it if you have the chance.
    `,
    relatedPosts: [
      {
        title: "Exploring Seoul",
        slug: "exploring-seoul",
        excerpt: "Discover the vibrant city of Seoul and its many attractions.",
      },
      {
        title: "Korean Cuisine",
        slug: "korean-cuisine",
        excerpt: "A guide to the delicious and diverse food of Korea.",
      },
    ],
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug) || null;
  return { props: { post } };
};

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

interface BlogPageProps {
  post: BlogPost;
}

export default function BlogPage({ post }: BlogPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] w-full overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-indigo-600 text-center px-4">{post.title}</h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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
              <a
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="block p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {relatedPost.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {relatedPost.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 dark:bg-indigo-400 origin-left"
        style={{ scaleX: smoothProgress }}
      />
    </main>
  );
}
