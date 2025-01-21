"use client";

import Link from "next/link";

import { Footer } from "@/components/footer";

import { cn } from "@/lib/utils";

import FlickeringGrid from "@/components/ui/flickering-grid";
import WordRotate from "@/components/ui/word-rotate";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Marquee from "@/components/ui/marquee";
import BlurFade from "@/components/ui/blur-fade";

const reviews = [
  {
    name: "Lakshman",
    username: "@linechecker",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNSAuNSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIyOS41IiBjeT0iMjkuNSIgcj0iMjkuNSIvPgogICAgPHBhdGggZD0iTTQgMjguNzYxMzc1MzRjOS4zMTA5Njc2NCAxLjkwOTc2OTkyIDE2LjQ5MDMxNiAyLjA0MTYyMzc0IDIxLjUzODA0NTEuMzk1NTYxNDcgNy41NzE1OTM3LTIuNDY5MDkzNCAxNC4zMzU4NDk2LTMuODAzNDQyNjUgMTkuMDUyMTg4LTMuMzYyNTk0NDMgMy4xNDQyMjU2LjI5Mzg5ODgxIDYuNjA4MzExNiAyLjA2MjU4NTg1IDEwLjM5MjI1NzkgNS4zMDYwNjExMi04LjQyNDU1NDYtMS40ODEzNzAxOS0xNC41NDA5MDQ3LTEuNzU0NDQ5OTctMTguMzQ5MDUwNS0uODE5MjM5MzUtNS43MTIyMTg2IDEuNDAyODE1OTMtMTIuNTQ5OTI3MSAzLjgwNjQ0NzQ2LTE3LjI4NjMzNjkgMy44MDY0NDc0Ni00LjczNjQwOTggMC04LjU2NTMxNDA0LS42NDc3NTA2OS0xMC44NTg1MTk1OC0yLjAwNjM1MzAyQzYuOTU5NzgwMzMgMzEuMTc1NTIzNyA1LjQ2MzU4NTY1IDMwLjA2ODg5NTk1IDQgMjguNzYxMzc1MzR6IiBmaWxsPSIjREQ2MTQwIi8+CiAgICA8cGF0aCBkPSJNMTYuNzc0NzY4OSAzNC4wMzI2NjY1NWMtMS41NTcwMjM3LTIuMzUwMTg4ODctMi4zMzU1MzU2LTQuMjQ0ODYzMjEtMi4zMzU1MzU2LTUuNjg0MDIzMDEgMC0xLjQzOTE1OTc5LjA1NDY2MjQtMi41NTUzNzQzLjE2Mzk4NzItMy4zNDg2NDM1NC0xLjkwMzE4MjE2IDEuMjg5MDYyNS0zLjE0MTc2OTA0IDIuODA4Nzc5NzYtMy43MTU3NjA2OSA0LjU1OTE1MTc5LS41NzM5OTE2NSAxLjc1MDM3MjAyLS44MzM2NTYyOSAyLjg0OTQxNjItLjc3ODk5MzkxIDMuMjk3MTMyNTUuODgzNjA1NzEuMjkzMzU5NDMgMS45MTYwODU0OC41NTQwMTEwNiAzLjA5NzQzOTMyLjc4MTk1NDkxIDEuMTgxMzUzODguMjI3OTQzODUgMi4zNzA5NzUwOC4zNTk0MTk2MiAzLjU2ODg2MzY4LjM5NDQyNzN6TTQyLjc0OTM2OTUyIDI1LjY5ODgzMTM2YzEuNDMyNTIzMjggMi4zNzM5MzI3IDIuMTExMzE4ODQgNC4yNzk0OTI3OCAyLjAzNjM4NjQ3IDUuNzE2NjgwMjYtLjA3NDkzMjI4IDEuNDM3MTg3NDctLjE4NzYzNzMzIDIuNTQ4OTk2NjYtLjMzODExNTE3IDMuMzM1NDI3NTQgMS45Njc2OTEwNC0xLjE4NzE3NTk0IDMuMjgzNzA3MTUtMi42Mzk2NTI2NCAzLjk0ODA0ODMzLTQuMzU3NDMwMS42NjQzNDEwOS0xLjcxNzc3NzQ0Ljk2MjY1MjY2LTIuNzgzMzQwMzQuODk0OTM0NzQtMy4xOTY2ODg2Ni0uNzc2MDE2NTQtLjQ0OTMzMS0xLjc0Nzk1ODA1LS44MTg4ODU3Mi0yLjkxNTgyNDY0LTEuMTA4NjY0Mi0xLjE2Nzg2NjU4LS4yODk3Nzg0Ni0yLjM3NjM0MzE2LS40MTk1NTM0MS0zLjYyNTQyOTczLS4zODkzMjQ4NHoiIGZpbGw9IiNGREY4RjYiLz4KICA8L2c+Cjwvc3ZnPg==",
  },
  {
    name: "Eden",
    username: "@deepfocus",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://static1.squarespace.com/static/5f0a3f92afd11c2196107cf7/t/622a8fa77ad6a91f9ac202b7/1622070244599/deep+logo.png?format=1500w",
  },
  {
    name: "Kath",
    username: "@onefinedayinternational",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://media.licdn.com/dms/image/v2/C560BAQF5r7plSmxRoA/company-logo_200_200/company-logo_200_200/0/1630633456869?e=2147483647&v=beta&t=z8O5mwd_JrNu7YUuzmaMLD0pV5366eqX32uWSaQfiLI",
  },
  {
    name: "Jason",
    username: "@jasonwright",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://media.licdn.com/dms/image/v2/C5603AQEbjFu8C61A5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1658391765827?e=2147483647&v=beta&t=hyYEmVwqAj0Wr6jS9zixtU9EiG_pdmLoq0PsaMv5Q1c",
  },
  {
    name: "Kim",
    username: "@kim",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden z-[-1]">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.4}
          flickerChance={0.1}
        />
        <BlurFade inView className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Let’s start creating
          </h1>
          <WordRotate
            className="text-4xl font-bold text-black dark:text-white"
            words={[
              "a website",
              "an API",
              "a mobile app",
              "interactive art",
              "cloud infrastructure",
              "AI image models",
              "the future",
            ]}
            duration={3000}
            framerProps={{
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 20 },
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          />
        </BlurFade>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* About me Section */}
      <div className="relative flex justify-between items-start w-full pl-40 pr-40">
        <div className="flex-1 flex flex-col">
          <BlurFade inView delay={BLUR_FADE_DELAY * 5}>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Who am I?
            </h1>
          </BlurFade>
        </div>
        {/* 
          TODO: Rewrite this section
        */}
        <div className="flex-1 space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
            <h1 className="text-lg font-bold text-gray-500 dark:text-white">
              Hey, I&apos;m Kane! Orignally from Queenstown, New Zealand and
              currently in Univserity in Auckland.
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
            <h1 className="text-lg font-bold text-gray-500 dark:text-white">
              Since I was 13 I&apos;ve been beyond interested in computer
              programming and have been learning ever since.
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
            <h1 className="text-lg font-bold text-gray-500 dark:text-white">
              I started working as a private contracter soon after and have
              worked in all sorts of different fields, with the added beneift of
              being a fast learner and a great problem solver, I feel very
              confident in picking something new up and running with it.
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
            <h1 className="text-lg font-bold text-gray-500 dark:text-white">
              I&apos;m always looking for new opportunities and challenges, so
              if you have something in mind, feel free to reach out!
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
            <Link href="/contact" className={`${process.env.NEXT_PUBLIC_IS_PREVIEW! == "true" ? "pointer-events-none opacity-50" : ""}`}>
              <InteractiveHoverButton className="w-40" text="Lets chat!" />
            </Link>
          </BlurFade>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="pt-10 pb-10">
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
