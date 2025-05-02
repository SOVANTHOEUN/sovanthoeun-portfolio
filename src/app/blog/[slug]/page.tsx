import React from "react";
import { BlogClient } from "./client";

// This would come from your data source
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
  // Add more blog posts here
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Update font path to use absolute path from the public folder
const interFontPath = "/fonts/Inter_18pt-Regular.ttf";

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> | undefined }) {
  const resolvedParams = params ? await params : { slug: "" };
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug) || blogPosts[0];

  return (
    <BlogClient post={post} fontPath={interFontPath} />
  );
}
