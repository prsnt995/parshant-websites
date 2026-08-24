import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhatWeBuild />
      <HowItWorks />
      <Projects />
      <About />
      <Contact />
    </>
  );
}


