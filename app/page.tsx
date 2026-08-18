import { About } from "@/components/sections/about";
import { Certificates } from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { PipelineWalkthrough } from "@/components/sections/pipeline-walkthrough";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <PipelineWalkthrough />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}
