import { Hero } from "src/3_widgets/hero";
import { Projects } from "src/3_widgets/projects";
import { Skills } from "src/3_widgets/skills";
import { Experience } from "src/3_widgets/experience";
import { Blog } from "src/3_widgets/blog";
import { Header } from "src/3_widgets/header";
import { Footer } from "src/3_widgets/footer";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-32">
      <Head>
        <title>Sovanthoeun Portfolio</title>
        <meta name="description" content="Sovanthoeun Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
