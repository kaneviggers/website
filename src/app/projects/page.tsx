"use client";

import BlurFade from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { ResumeCard } from "@/components/jobCard";

import React from "react";

import FlickeringGrid from "@/components/ui/flickering-grid";

/*
 TODO Make bento grid overlay the flickering grid
*/

const BLUR_FADE_DELAY = 0.04;

const projects = [
  {
    title: "Airman",
    altText: "Airman",
    subtitle: "Flight planning IOS app",
    period: "Developing",
    description: "Airman is a free iOS app designed to simplify flight tracking with a seamless and intuitive experience. By entering just a flight number and departure date, users can monitor upcoming flights and receive real-time updates, including delays, cancellations, and gate changes. The app also features a world map view, allowing users to explore live air traffic and access detailed flight information with a simple tap. Built to integrate seamlessly with iOS Live Activities, Airman ensures you stay informed at every stage of your journey.",
    logoUrl:
      "",
    herf: "www.creaturepost.co.nz",
  }
];

export default function Home() {
  return (
    <div>
      <div className="relative flex h-[250px] w-full">
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

      <div className="flex-1 space-y-4 max-w-[800px] mx-auto px-8 sm:px-6 lg:px-8">
        <BlurFade inView delay={BLUR_FADE_DELAY * 1}>
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Projects
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
          <Separator />
        </BlurFade>
        <div className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <BlurFade key={index} inView delay={BLUR_FADE_DELAY * (index + 2)}>
              <ResumeCard
                key={index}
                logoUrl={project.logoUrl}
                altText={project.altText}
                title={project.title}
                subtitle={project.subtitle}
                href={project.herf}
                badges={[]}
                period={project.period}
                description={project.description}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
