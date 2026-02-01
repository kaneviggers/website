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
    title: "HookVault",
    altText: "HookVault",
    subtitle: "Webhook monitoring",
    period: "Developing",
    description:
      "Hookvault is the one-stop-shop for keeping on top of your webhooks. It acts as a proxy, routing data from your services to your application. When using HookVault, data loss is a thing of the past, all failed webhooks are simply stored and can be replayed at a later date back to your application, even in bulk!",
    logoUrl: "/images/hookvault-logo.png",
    badges: ["Next.js", "Supabase", "MongoDB", "GO", "Redis", "AWS"],
  },
  {
    title: "Airman",
    altText: "Airman",
    subtitle: "Flight planning IOS app",
    period: "Developing",
    description:
      "Airman is a free iOS app designed to simplify flight tracking with a seamless and intuitive experience. By entering just a flight number and departure date, users can monitor upcoming flights and receive real-time updates, including delays, cancellations, and gate changes. The app also features a world map view, allowing users to explore live air traffic and access detailed flight information with a simple tap. Built to integrate seamlessly with iOS Live Activities, Airman ensures you stay informed at every stage of your journey.",
    logoUrl: "/images/airman.png",
    badges: ["Swift", "Firebase", "API"],
  },
  {
    title: "Liftr",
    altText: "Liftr",
    subtitle: "Ridesharing App",
    period: "2023",
    description:
      "Liftr is a ridesharing app where users can find others driving to a similar destination to catch a lift. Originally developed for use within Queenstown District Lakes with the support of QLDC, it was an effort to reduce peak traffic in areas with poor road infrastructure. Liftr gave drivers the ability to list their travels in advance to allow other users on the app to book a seat the day before. Liftr was made in Flutter so that any user would be able to use the app, using Firebase as the backend to handle user and ride data. Safety was very important during development, so Passbase (now owned by Parallel Markets) was implemented to vet drivers before listing their travels. Other procautions we put inplace such as frequently checking the users location to ensure it was enroute, a silent panic button that would've integrated with local law enforcement and allow text communication between the agent and the user and vehicle data provided to a user to ensure they're boarding the correct vehicle.",
    logoUrl: "/images/liftr.png",
    logo_size_x: 30,
    logo_size_y: 30,
    badges: ["Flutter", "Firebase"],
  },
  {
    title: "Sava",
    altText: "Sava",
    subtitle: "Personal Assistant",
    period: "2022",
    description:
      "Sava is a basic personal assistant, with the purpose of being conversational and having the ability to interact with custom smart devices. Developed in Python and ran on a Raspberry Pi, Sava used AWS voice recognition, Open-ai for text generation and a text-to-speech service from Assembly AI Sava was bought to life. Through ripping an extention cable apart, attaching a relay and an Ardunio Nano to the live cable and electrocuting myself twice, Sava was able to wirelessly interact with the cable to turn a lamp on and off. This first project taught me a lot about cloud integration and wireless communication with micro controllers.",
    logoUrl: "",
    badges: ["Python", "AWS", "OpenAI"],
  },
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
                href={""}
                badges={project.badges || []}
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
