"use client";

import { Clapperboard, Apple, Satellite, Calendar } from "lucide-react";

import React from "react";

import FlickeringGrid from "@/components/ui/flickering-grid";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const jobs = [
  {
    Icon: Clapperboard,
    name: "CreaturePost",
    description: "Creating interactive visuals for events and festivals",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Apple,
    name: "DeepFocus",
    description: "Automating internal processes utilising APIs",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Satellite,
    name: "Skyris",
    description:
      "Identifying invasive vegetation using satellite imagery and AI image models",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Calendar,
    name: "Romeo Software",
    description: "Reinventing the event management industry",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
];

/*
 TODO Make bento grid overlay the flickering grid
*/

export default function Home() {
  return (
    <div>
      <div className="relative z-10 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden pointer-events-none¡">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.4}
          flickerChance={0.1}
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center -mt-40">
        <BentoGrid className="lg:grid-rows-4 z-20">
          {jobs.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
