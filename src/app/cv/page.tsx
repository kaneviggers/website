"use client";

import { Clapperboard, Apple, Satellite, Calendar } from "lucide-react";

import React from "react";

import FlickeringGrid from "@/components/ui/flickering-grid";

const jobs = [
  {
    Icon: Clapperboard,
    name: "CreaturePost",
    description: "Creating interactive visuals for events and festivals",
    href: "/",
    cta: "Learn more",
  },
  {
    Icon: Satellite,
    name: "Skyris",
    description:
      "Identifying invasive vegetation using satellite imagery and AI image models",
    href: "/",
    cta: "Learn more",
  },
  {
    Icon: Apple,
    name: "DeepFocus",
    description: "Automating internal processes utilising APIs",
    href: "/",
    cta: "Learn more",
  },
  {
    Icon: Calendar,
    name: "Romeo Software",
    description: "Reinventing the event management industry",
    href: "/",
    cta: "Learn more",
  },
];

/*
 TODO Make bento grid overlay the flickering grid
*/

export default function Home() {
  return (
    <div>
      <div className="relative z-0 flex h-[500px] w-full">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#6FCF97"
          maxOpacity={0.4}
          flickerChance={0.1}
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="relative z-10 -mt-80 flex justify-center">
        <ul className="grid gap-8 max-w-4xl w-full">
          {jobs.map((job, index) => {
            return (
              <li
                key={index}
                className="relative bg-white rounded-lg shadow-lg p-6 flex items-center gap-6"
              >
                <job.Icon className="w-12 h-12 text-green-500" />
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{job.name}</h2>
                  <p className="text-gray-600">{job.description}</p>
                  <a
                    href={job.href}
                    className="mt-2 inline-block text-green-600 hover:underline"
                  >
                    {job.cta}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
