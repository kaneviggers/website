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

const jobs = [
  {
    title: "Ghost Street",
    altText: "Ghost Street",
    subtitle: "Junior Developer",
    period: "April 2025 - Present",
    description: "As a junior developer, my role involves maintaining and updating existing websites and digital products, as well as assisting with bug fixes and minor feature updates. I collaborate with the development team on ongoing projects, document any changes I make, and manage code using version control systems like Git. I actively participate in team meetings, contribute to problem-solving discussions, and enjoy working both independently and as part of a collaborative team environment.",
    logoUrl:
      "/images/ghost.png",
    herf: "www.ghost.st",
    logo_size_x: 30,
    logo_size_y: 30
  },
  {
    title: "CreaturePost",
    altText: "CreaturePost",
    subtitle: "Full stack Software Engineer",
    period: "June 2023 - Present",
    description: "I've had the privilege of working with CreaturePost, starting with the LUMA Light Show in 2023 and 2024. During that time, we launched Imaginaium—an innovative video feed that uses AI-generated imagery, dynamically evolving based on live microphone input. Initially a prototype with limited performance, we leveraged advancing technology to transform it into the captivating visual installation we envisioned.", // In July 2024, we embarked on an exciting project for a prominent New Zealand telco company. While details are still under wraps, the progress we've made is incredibly promising.Working with CreaturePost has been a rewarding experience, full of creativity, collaboration, and meaningful strides in visual and AI-driven innovation.",
    logoUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNSAuNSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIyOS41IiBjeT0iMjkuNSIgcj0iMjkuNSIvPgogICAgPHBhdGggZD0iTTQgMjguNzYxMzc1MzRjOS4zMTA5Njc2NCAxLjkwOTc2OTkyIDE2LjQ5MDMxNiAyLjA0MTYyMzc0IDIxLjUzODA0NTEuMzk1NTYxNDcgNy41NzE1OTM3LTIuNDY5MDkzNCAxNC4zMzU4NDk2LTMuODAzNDQyNjUgMTkuMDUyMTg4LTMuMzYyNTk0NDMgMy4xNDQyMjU2LjI5Mzg5ODgxIDYuNjA4MzExNiAyLjA2MjU4NTg1IDEwLjM5MjI1NzkgNS4zMDYwNjExMi04LjQyNDU1NDYtMS40ODEzNzAxOS0xNC41NDA5MDQ3LTEuNzU0NDQ5OTctMTguMzQ5MDUwNS0uODE5MjM5MzUtNS43MTIyMTg2IDEuNDAyODE1OTMtMTIuNTQ5OTI3MSAzLjgwNjQ0NzQ2LTE3LjI4NjMzNjkgMy44MDY0NDc0Ni00LjczNjQwOTggMC04LjU2NTMxNDA0LS42NDc3NTA2OS0xMC44NTg1MTk1OC0yLjAwNjM1MzAyQzYuOTU5NzgwMzMgMzEuMTc1NTIzNyA1LjQ2MzU4NTY1IDMwLjA2ODg5NTk1IDQgMjguNzYxMzc1MzR6IiBmaWxsPSIjREQ2MTQwIi8+CiAgICA8cGF0aCBkPSJNMTYuNzc0NzY4OSAzNC4wMzI2NjY1NWMtMS41NTcwMjM3LTIuMzUwMTg4ODctMi4zMzU1MzU2LTQuMjQ0ODYzMjEtMi4zMzU1MzU2LTUuNjg0MDIzMDEgMC0xLjQzOTE1OTc5LjA1NDY2MjQtMi41NTUzNzQzLjE2Mzk4NzItMy4zNDg2NDM1NC0xLjkwMzE4MjE2IDEuMjg5MDYyNS0zLjE0MTc2OTA0IDIuODA4Nzc5NzYtMy43MTU3NjA2OSA0LjU1OTE1MTc5LS41NzM5OTE2NSAxLjc1MDM3MjAyLS44MzM2NTYyOSAyLjg0OTQxNjItLjc3ODk5MzkxIDMuMjk3MTMyNTUuODgzNjA1NzEuMjkzMzU5NDMgMS45MTYwODU0OC41NTQwMTEwNiAzLjA5NzQzOTMyLjc4MTk1NDkxIDEuMTgxMzUzODguMjI3OTQzODUgMi4zNzA5NzUwOC4zNTk0MTk2MiAzLjU2ODg2MzY4LjM5NDQyNzN6TTQyLjc0OTM2OTUyIDI1LjY5ODgzMTM2YzEuNDMyNTIzMjggMi4zNzM5MzI3IDIuMTExMzE4ODQgNC4yNzk0OTI3OCAyLjAzNjM4NjQ3IDUuNzE2NjgwMjYtLjA3NDkzMjI4IDEuNDM3MTg3NDctLjE4NzYzNzMzIDIuNTQ4OTk2NjYtLjMzODExNTE3IDMuMzM1NDI3NTQgMS45Njc2OTEwNC0xLjE4NzE3NTk0IDMuMjgzNzA3MTUtMi42Mzk2NTI2NCAzLjk0ODA0ODMzLTQuMzU3NDMwMS42NjQzNDEwOS0xLjcxNzc3NzQ0Ljk2MjY1MjY2LTIuNzgzMzQwMzQuODk0OTM0NzQtMy4xOTY2ODg2Ni0uNzc2MDE2NTQtLjQ0OTMzMS0xLjc0Nzk1ODA1LS44MTg4ODU3Mi0yLjkxNTgyNDY0LTEuMTA4NjY0Mi0xLjE2Nzg2NjU4LS4yODk3Nzg0Ni0yLjM3NjM0MzE2LS40MTk1NTM0MS0zLjYyNTQyOTczLS4zODkzMjQ4NHoiIGZpbGw9IiNGREY4RjYiLz4KICA8L2c+Cjwvc3ZnPg==",
    herf: "www.creaturepost.co.nz",
  },
  {
    title: "DeepFocus",
    altText: "DeepFocus",
    subtitle: "Apple Certified Technician | Software developer",
    period: "Janurary 2022 - Present",
    description: "Working at DeepFocus provided me with valuable opportunities and played a key role in launching my software development career. Initially training as an Apple Certified Technician, I soon shifted my focus to automating internal processes, streamlining everything from repair bookings to lead management. This ultimately led to integrating an official Apple API, optimizing workflows to reduce administrative overhead and enhance both operational efficiency and the customer experience.",
    logoUrl:
      "https://static1.squarespace.com/static/5f0a3f92afd11c2196107cf7/t/622a8fa77ad6a91f9ac202b7/1622070244599/deep+logo.png?format=1500w",
    herf: "www.deepfocus.co.nz",
  },
  {
    title: "AI Startup",
    altText: "AI Startup",
    subtitle: "Full stack Software Engineer",
    period: "June 2023 - Feburary 2024",
    description: "As the lead developer in R&D, I advanced the development of AI-driven image analysis models to detect invasive vegetation in satellite imagery. In addition to my work in machine learning, I played a key role in preliminary UI/UX design and website development, ensuring intuitive and effective user experiences. I also managed administrative tasks, collaborating with external partners to support project goals and streamline operations.",
    logoUrl: "",
    herf: "",
  },
  {
    title: "KM Events",
    altText: "OneFineDay International",
    subtitle: "Web developer",
    period: "June 2022 - December 2024",
    description: "At KM Events, a full-service wedding planning company, I was responsible for designing and developing custom websites tailored to individual weddings. These websites served as a central hub for guests, providing event details, RSVPs, and personalized content. By creating seamless, user-friendly experiences, I helped enhance the digital presence of each event while ensuring a smooth and engaging experience for both clients and their guests.",
    logoUrl:
      "/images/km_events.png",
    herf: "www.onefineday.co.nz",
  }
];

const education = [
  {
    title: "Wakatipu High School",
    altText: "Wakatipu High School",
    subtitle: "NCEA L3 | UE",
    period: "Janurary 2019 - December 2024",
    description: "I attended Wakatipu High School, where I successfully completed all three levels of NCEA without failing a class. My strengths were in computer programming, mathematics, and physics, where I consistently excelled and deepened my technical and problem-solving skills.",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GLKFaVEKpDb_cCs-QE9riht30PL4E1CEpw&s",
    herf: "www.wakatipu.school.nz",
  },
  {
    title: "Auckland University of Technology",
    altText: "Auckland University of Technology",
    subtitle: "Bachelor of Engineering | Mechatronics",
    period: "July 2024 - Present",
    description: "I am currently pursuing a Bachelor of Engineering (Honours) in Mechatronics at Auckland University of Technology. This program has allowed me to develop a strong foundation in mechanical, electrical, and software engineering, with a focus on automation, robotics, and embedded systems.",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahThNfuyGXldNPw-RO5mnRmSywK9hVmZ0vw&s",
    herf: "www.aut.ac.nz",
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
            Work experience
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
          <Separator />
        </BlurFade>
        <div className="flex flex-col gap-3">
          {jobs.map((job, index) => (
            <BlurFade key={index} inView delay={BLUR_FADE_DELAY * (index + 2)}>
              <ResumeCard
                key={index}
                logoUrl={job.logoUrl}
                altText={job.altText}
                title={job.title}
                subtitle={job.subtitle}
                href={job.herf}
                badges={[]}
                period={job.period}
                description={job.description}
                logo_size_x={job.logo_size_x ?? 0}
                logo_size_y={job.logo_size_y ?? 0}
              />
            </BlurFade>
          ))}
        </div>
        <BlurFade inView delay={BLUR_FADE_DELAY * 5}>
          <h1 className="text-4xl font-bold text-black dark:text-white pt-20">
            Education
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 6}>
          <Separator />
        </BlurFade>
        <div className="flex flex-col gap-3">
          {education.map((school, index) => (
            <BlurFade key={index} inView delay={BLUR_FADE_DELAY * (index + 3 + jobs.length)}>
              <ResumeCard
                key={index}
                logoUrl={school.logoUrl}
                altText={school.altText}
                title={school.title}
                subtitle={school.subtitle}
                href={school.herf}
                badges={[]}
                period={school.period}
                description={school.description}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
