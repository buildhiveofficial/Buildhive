// app/page.js

"use client";

import Cards from "@/components/Cards";
import Testimonials from "@/components/Cards";
import Hero from "@/components/Home/Hero";
import Process from "@/components/Home/Process";
import Services from "@/components/Home/Services";
import Showcase from "@/components/Home/Showcase";
import Vision from "@/components/Home/Vission";
import { useState } from "react";


export default function Home() {
  const [activePillar, setActivePillar] = useState("design");

  return (
    <main className="overflow-hidden">
      <Hero
        activePillar={activePillar}
        setActivePillar={setActivePillar}
      />

      <Services activePillar={activePillar} />

      <Showcase activePillar={activePillar} />

      <Process activePillar={activePillar} />

      {/* <Testimonials /> */}
      <Cards activePillar={activePillar} />

      <Vision />
    </main>
  );
}