import { ProjectClient } from "./client";

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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug) || projects[0];
  return <ProjectClient project={project} />;
} 