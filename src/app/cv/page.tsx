"use client";

import { Clapperboard, Apple, Satellite, Calendar } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { ResumeCard } from "@/components/jobCard";

import React from "react";

import FlickeringGrid from "@/components/ui/flickering-grid";

/*
 TODO Make bento grid overlay the flickering grid
*/

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <div>
      <div className="relative z-0 flex h-[250px] w-full">
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
        <BlurFade inView delay={BLUR_FADE_DELAY * 5}>
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Work experience
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 6}>
          <Separator />
        </BlurFade>
        <ResumeCard
          key={1}
          logoUrl="https://static1.squarespace.com/static/5f0a3f92afd11c2196107cf7/t/622a8fa77ad6a91f9ac202b7/1622070244599/deep+logo.png?format=1500w"
          altText="DeepFocus"
          title="DeepFocus"
          subtitle="Apple Authorsied Service provider"
          href="www.deepfocus.co.nz"
          badges={[]}
          period="May 2021 - Oct 2022"
          description="Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript."
        />
        <ResumeCard
          key={2}
          logoUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNSAuNSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIyOS41IiBjeT0iMjkuNSIgcj0iMjkuNSIvPgogICAgPHBhdGggZD0iTTQgMjguNzYxMzc1MzRjOS4zMTA5Njc2NCAxLjkwOTc2OTkyIDE2LjQ5MDMxNiAyLjA0MTYyMzc0IDIxLjUzODA0NTEuMzk1NTYxNDcgNy41NzE1OTM3LTIuNDY5MDkzNCAxNC4zMzU4NDk2LTMuODAzNDQyNjUgMTkuMDUyMTg4LTMuMzYyNTk0NDMgMy4xNDQyMjU2LjI5Mzg5ODgxIDYuNjA4MzExNiAyLjA2MjU4NTg1IDEwLjM5MjI1NzkgNS4zMDYwNjExMi04LjQyNDU1NDYtMS40ODEzNzAxOS0xNC41NDA5MDQ3LTEuNzU0NDQ5OTctMTguMzQ5MDUwNS0uODE5MjM5MzUtNS43MTIyMTg2IDEuNDAyODE1OTMtMTIuNTQ5OTI3MSAzLjgwNjQ0NzQ2LTE3LjI4NjMzNjkgMy44MDY0NDc0Ni00LjczNjQwOTggMC04LjU2NTMxNDA0LS42NDc3NTA2OS0xMC44NTg1MTk1OC0yLjAwNjM1MzAyQzYuOTU5NzgwMzMgMzEuMTc1NTIzNyA1LjQ2MzU4NTY1IDMwLjA2ODg5NTk1IDQgMjguNzYxMzc1MzR6IiBmaWxsPSIjREQ2MTQwIi8+CiAgICA8cGF0aCBkPSJNMTYuNzc0NzY4OSAzNC4wMzI2NjY1NWMtMS41NTcwMjM3LTIuMzUwMTg4ODctMi4zMzU1MzU2LTQuMjQ0ODYzMjEtMi4zMzU1MzU2LTUuNjg0MDIzMDEgMC0xLjQzOTE1OTc5LjA1NDY2MjQtMi41NTUzNzQzLjE2Mzk4NzItMy4zNDg2NDM1NC0xLjkwMzE4MjE2IDEuMjg5MDYyNS0zLjE0MTc2OTA0IDIuODA4Nzc5NzYtMy43MTU3NjA2OSA0LjU1OTE1MTc5LS41NzM5OTE2NSAxLjc1MDM3MjAyLS44MzM2NTYyOSAyLjg0OTQxNjItLjc3ODk5MzkxIDMuMjk3MTMyNTUuODgzNjA1NzEuMjkzMzU5NDMgMS45MTYwODU0OC41NTQwMTEwNiAzLjA5NzQzOTMyLjc4MTk1NDkxIDEuMTgxMzUzODguMjI3OTQzODUgMi4zNzA5NzUwOC4zNTk0MTk2MiAzLjU2ODg2MzY4LjM5NDQyNzN6TTQyLjc0OTM2OTUyIDI1LjY5ODgzMTM2YzEuNDMyNTIzMjggMi4zNzM5MzI3IDIuMTExMzE4ODQgNC4yNzk0OTI3OCAyLjAzNjM4NjQ3IDUuNzE2NjgwMjYtLjA3NDkzMjI4IDEuNDM3MTg3NDctLjE4NzYzNzMzIDIuNTQ4OTk2NjYtLjMzODExNTE3IDMuMzM1NDI3NTQgMS45Njc2OTEwNC0xLjE4NzE3NTk0IDMuMjgzNzA3MTUtMi42Mzk2NTI2NCAzLjk0ODA0ODMzLTQuMzU3NDMwMS42NjQzNDEwOS0xLjcxNzc3NzQ0Ljk2MjY1MjY2LTIuNzgzMzQwMzQuODk0OTM0NzQtMy4xOTY2ODg2Ni0uNzc2MDE2NTQtLjQ0OTMzMS0xLjc0Nzk1ODA1LS44MTg4ODU3Mi0yLjkxNTgyNDY0LTEuMTA4NjY0Mi0xLjE2Nzg2NjU4LS4yODk3Nzg0Ni0yLjM3NjM0MzE2LS40MTk1NTM0MS0zLjYyNTQyOTczLS4zODkzMjQ4NHoiIGZpbGw9IiNGREY4RjYiLz4KICA8L2c+Cjwvc3ZnPg=="
          altText="CreaturePost"
          title="CreaturePost"
          subtitle="Postproduction house"
          href="www.creaturepost.co.nz"
          badges={[]}
          period="May 2021 - Oct 2022"
          description="Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript."
        />
        <ResumeCard
          key={3}
          logoUrl="https://media.licdn.com/dms/image/v2/C560BAQF5r7plSmxRoA/company-logo_200_200/company-logo_200_200/0/1630633456869?e=2147483647&v=beta&t=z8O5mwd_JrNu7YUuzmaMLD0pV5366eqX32uWSaQfiLI"
          altText="OneFineDay International"
          title="OneFineDay International"
          subtitle="Postproduction house"
          href="www.creaturepost.co.nz"
          badges={[]}
          period="May 2021 - Oct 2022"
          description="Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript."
        />
        <ResumeCard
          key={4}
          logoUrl=""
          altText="Agtech Software Company"
          title="Agtech Software Company"
          subtitle=""
          href="www.creaturepost.co.nz"
          badges={[]}
          period="May 2021 - Oct 2022"
          description="Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript."
        />
        <BlurFade inView delay={BLUR_FADE_DELAY * 5}>
          <h1 className="text-4xl font-bold text-black dark:text-white pt-20">
            Education
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 6}>
          <Separator />
        </BlurFade>
        <ResumeCard
          key={1}
          logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GLKFaVEKpDb_cCs-QE9riht30PL4E1CEpw&s"
          altText="Wakatipu High School"
          title="Wakatipu High School"
          subtitle="Secondary school"
          href="www.wakatipu.school.nz"
          badges={[]}
          period="May 2021 - Oct 2022"
          description="Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript."
        />
        <ResumeCard
          key={2}
          logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahThNfuyGXldNPw-RO5mnRmSywK9hVmZ0vw&s"
          altText="Auckland University of Technology"
          title="Auckland University of Technology"
          subtitle="Territory education"
          href="www.aut.ac.nz"
          badges={[]}
          period="May 2021 - Oct 2022"
          description="Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript."
        />
      </div>
    </div>
  );
}
