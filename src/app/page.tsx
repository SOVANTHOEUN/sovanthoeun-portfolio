import { Hero } from "@/widgets/hero";
import { Projects } from "@/widgets/projects";
import { Skills } from "@/widgets/skills";
import { Blog } from "@/widgets/blog";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
        <Blog />
      </div>
      <Footer />
    </main>
  );
}
