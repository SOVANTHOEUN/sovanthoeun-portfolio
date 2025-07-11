import { Hero } from "src/3_widgets/hero";
import { Projects } from "src/3_widgets/projects";
import { Skills } from "src/3_widgets/skills";
import { Experience } from "src/3_widgets/experience";
import { Blog } from "src/3_widgets/blog";
import { Header } from "src/3_widgets/header";
import { Footer } from "src/3_widgets/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-32">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Blog />
      </div>
      <Footer />
    </main>
  );
}
