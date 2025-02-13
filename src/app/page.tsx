"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import FlickeringGrid from "@/components/ui/flickering-grid";
import WordRotate from "@/components/ui/word-rotate";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Marquee from "@/components/ui/marquee";
import BlurFade from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const reviews = [
  {
    name: "Lakshman",
    username: "@creaturepost",
    body: "[Awaiting Testimony]",
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNSAuNSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIyOS41IiBjeT0iMjkuNSIgcj0iMjkuNSIvPgogICAgPHBhdGggZD0iTTQgMjguNzYxMzc1MzRjOS4zMTA5Njc2NCAxLjkwOTc2OTkyIDE2LjQ5MDMxNiAyLjA0MTYyMzc0IDIxLjUzODA0NTEuMzk1NTYxNDcgNy41NzE1OTM3LTIuNDY5MDkzNCAxNC4zMzU4NDk2LTMuODAzNDQyNjUgMTkuMDUyMTg4LTMuMzYyNTk0NDMgMy4xNDQyMjU2LjI5Mzg5ODgxIDYuNjA4MzExNiAyLjA2MjU4NTg1IDEwLjM5MjI1NzkgNS4zMDYwNjExMi04LjQyNDU1NDYtMS40ODEzNzAxOS0xNC41NDA5MDQ3LTEuNzU0NDQ5OTctMTguMzQ5MDUwNS0uODE5MjM5MzUtNS43MTIyMTg2IDEuNDAyODE1OTMtMTIuNTQ5OTI3MSAzLjgwNjQ0NzQ2LTE3LjI4NjMzNjkgMy44MDY0NDc0Ni00LjczNjQwOTggMC04LjU2NTMxNDA0LS42NDc3NTA2OS0xMC44NTg1MTk1OC0yLjAwNjM1MzAyQzYuOTU5NzgwMzMgMzEuMTc1NTIzNyA1LjQ2MzU4NTY1IDMwLjA2ODg5NTk1IDQgMjguNzYxMzc1MzR6IiBmaWxsPSIjREQ2MTQwIi8+CiAgICA8cGF0aCBkPSJNMTYuNzc0NzY4OSAzNC4wMzI2NjY1NWMtMS41NTcwMjM3LTIuMzUwMTg4ODctMi4zMzU1MzU2LTQuMjQ0ODYzMjEtMi4zMzU1MzU2LTUuNjg0MDIzMDEgMC0xLjQzOTE1OTc5LjA1NDY2MjQtMi41NTUzNzQzLjE2Mzk4NzItMy4zNDg2NDM1NC0xLjkwMzE4MjE2IDEuMjg5MDYyNS0zLjE0MTc2OTA0IDIuODA4Nzc5NzYtMy43MTU3NjA2OSA0LjU1OTE1MTc5LS41NzM5OTE2NSAxLjc1MDM3MjAyLS44MzM2NTYyOSAyLjg0OTQxNjItLjc3ODk5MzkxIDMuMjk3MTMyNTUuODgzNjA1NzEuMjkzMzU5NDMgMS45MTYwODU0OC41NTQwMTEwNiAzLjA5NzQzOTMyLjc4MTk1NDkxIDEuMTgxMzUzODguMjI3OTQzODUgMi4zNzA5NzUwOC4zNTk0MTk2MiAzLjU2ODg2MzY4LjM5NDQyNzN6TTQyLjc0OTM2OTUyIDI1LjY5ODgzMTM2YzEuNDMyNTIzMjggMi4zNzM5MzI3IDIuMTExMzE4ODQgNC4yNzk0OTI3OCAyLjAzNjM4NjQ3IDUuNzE2NjgwMjYtLjA3NDkzMjI4IDEuNDM3MTg3NDctLjE4NzYzNzMzIDIuNTQ4OTk2NjYtLjMzODExNTE3IDMuMzM1NDI3NTQgMS45Njc2OTEwNC0xLjE4NzE3NTk0IDMuMjgzNzA3MTUtMi42Mzk2NTI2NCAzLjk0ODA0ODMzLTQuMzU3NDMwMS42NjQzNDEwOS0xLjcxNzc3NzQ0Ljk2MjY1MjY2LTIuNzgzMzQwMzQuODk0OTM0NzQtMy4xOTY2ODg2Ni0uNzc2MDE2NTQtLjQ0OTMzMS0xLjc0Nzk1ODA1LS44MTg4ODU3Mi0yLjkxNTgyNDY0LTEuMTA4NjY0Mi0xLjE2Nzg2NjU4LS4yODk3Nzg0Ni0yLjM3NjM0MzE2LS40MTk1NTM0MS0zLjYyNTQyOTczLS4zODkzMjQ4NHoiIGZpbGw9IiNGREY4RjYiLz4KICA8L2c+Cjwvc3ZnPg==",
  },
  {
    name: "Eden",
    username: "@deepfocus",
    body: "Adaptable, brilliant, conscious, and sincere. Kane is the distillation of everything our industry represents. He's humble, yet direct. Always learning, yet mature. He will be of aid to any enterprise… and a friend to those who do it right. I'd hire him, so I did.",
    img: "https://static1.squarespace.com/static/5f0a3f92afd11c2196107cf7/t/622a8fa77ad6a91f9ac202b7/1622070244599/deep+logo.png?format=1500w",
  },
  {
    name: "Kath",
    username: "@kmevents",
    body: "Kane is the epitome of dedication and expertise. His exceptional work ethic and unparalleled skill in his field consistently set him apart, making him an invaluable asset to any team or project.",
    img: "/images/km_events.png",
  },
  {
    name: "Jason",
    username: "@jasonwright",
    body: "[Awaiting Testimony]",
    img: "https://media.licdn.com/dms/image/v2/C5603AQEbjFu8C61A5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1658391765827?e=2147483647&v=beta&t=hyYEmVwqAj0Wr6jS9zixtU9EiG_pdmLoq0PsaMv5Q1c",
  },
  {
    name: "Kim",
    username: "@creaturepost",
    body: "We have worked with Kane Viggers for the last few years on a number of technically creative projects. These include tech assisting at Luma Southern Lights Project  (2023/2024), developing a bespoke AI installation for the 2023 AI Forum, and various ongoing R & D projects. Kane is currently employed in a part time role working on regular AI, commercial and creative tech R & D for our creative studio. We find Kane to be extremely enthusiastic, always available and up for tight deadlines, and a clever and keen problem solver. He is friendly and easy to communicate with.",
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNSAuNSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIyOS41IiBjeT0iMjkuNSIgcj0iMjkuNSIvPgogICAgPHBhdGggZD0iTTQgMjguNzYxMzc1MzRjOS4zMTA5Njc2NCAxLjkwOTc2OTkyIDE2LjQ5MDMxNiAyLjA0MTYyMzc0IDIxLjUzODA0NTEuMzk1NTYxNDcgNy41NzE1OTM3LTIuNDY5MDkzNCAxNC4zMzU4NDk2LTMuODAzNDQyNjUgMTkuMDUyMTg4LTMuMzYyNTk0NDMgMy4xNDQyMjU2LjI5Mzg5ODgxIDYuNjA4MzExNiAyLjA2MjU4NTg1IDEwLjM5MjI1NzkgNS4zMDYwNjExMi04LjQyNDU1NDYtMS40ODEzNzAxOS0xNC41NDA5MDQ3LTEuNzU0NDQ5OTctMTguMzQ5MDUwNS0uODE5MjM5MzUtNS43MTIyMTg2IDEuNDAyODE1OTMtMTIuNTQ5OTI3MSAzLjgwNjQ0NzQ2LTE3LjI4NjMzNjkgMy44MDY0NDc0Ni00LjczNjQwOTggMC04LjU2NTMxNDA0LS42NDc3NTA2OS0xMC44NTg1MTk1OC0yLjAwNjM1MzAyQzYuOTU5NzgwMzMgMzEuMTc1NTIzNyA1LjQ2MzU4NTY1IDMwLjA2ODg5NTk1IDQgMjguNzYxMzc1MzR6IiBmaWxsPSIjREQ2MTQwIi8+CiAgICA8cGF0aCBkPSJNMTYuNzc0NzY4OSAzNC4wMzI2NjY1NWMtMS41NTcwMjM3LTIuMzUwMTg4ODctMi4zMzU1MzU2LTQuMjQ0ODYzMjEtMi4zMzU1MzU2LTUuNjg0MDIzMDEgMC0xLjQzOTE1OTc5LjA1NDY2MjQtMi41NTUzNzQzLjE2Mzk4NzItMy4zNDg2NDM1NC0xLjkwMzE4MjE2IDEuMjg5MDYyNS0zLjE0MTc2OTA0IDIuODA4Nzc5NzYtMy43MTU3NjA2OSA0LjU1OTE1MTc5LS41NzM5OTE2NSAxLjc1MDM3MjAyLS44MzM2NTYyOSAyLjg0OTQxNjItLjc3ODk5MzkxIDMuMjk3MTMyNTUuODgzNjA1NzEuMjkzMzU5NDMgMS45MTYwODU0OC41NTQwMTEwNiAzLjA5NzQzOTMyLjc4MTk1NDkxIDEuMTgxMzUzODguMjI3OTQzODUgMi4zNzA5NzUwOC4zNTk0MTk2MiAzLjU2ODg2MzY4LjM5NDQyNzN6TTQyLjc0OTM2OTUyIDI1LjY5ODgzMTM2YzEuNDMyNTIzMjggMi4zNzM5MzI3IDIuMTExMzE4ODQgNC4yNzk0OTI3OCAyLjAzNjM4NjQ3IDUuNzE2NjgwMjYtLjA3NDkzMjI4IDEuNDM3MTg3NDctLjE4NzYzNzMzIDIuNTQ4OTk2NjYtLjMzODExNTE3IDMuMzM1NDI3NTQgMS45Njc2OTEwNC0xLjE4NzE3NTk0IDMuMjgzNzA3MTUtMi42Mzk2NTI2NCAzLjk0ODA0ODMzLTQuMzU3NDMwMS42NjQzNDEwOS0xLjcxNzc3NzQ0Ljk2MjY1MjY2LTIuNzgzMzQwMzQuODk0OTM0NzQtMy4xOTY2ODg2Ni0uNzc2MDE2NTQtLjQ0OTMzMS0xLjc0Nzk1ODA1LS44MTg4ODU3Mi0yLjkxNTgyNDY0LTEuMTA4NjY0Mi0xLjE2Nzg2NjU4LS4yODk3Nzg0Ni0yLjM3NjM0MzE2LS40MTk1NTM0MS0zLjYyNTQyOTczLS4zODkzMjQ4NHoiIGZpbGw9IiNGREY4RjYiLz4KICA8L2c+Cjwvc3ZnPg==",
  }
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
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
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
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
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
              "interactive visual art",
              "cloud infrastructure",
              "AI image models",
              "Neural Networks",
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
      <div className="flex-1 space-y-4 max-w-[800px] mx-auto px-8 sm:px-6 lg:px-8">
        <BlurFade inView delay={BLUR_FADE_DELAY * 5}>
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Who am I?
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 6}>
          <Separator />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
            I&apos;m Kane, a passionate software developer from Queenstown, New Zealand.
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
          I&apos;ve been programming since I was 13, and I&apos;ve worked on diverse projects: using AI and satellite imagery to detect invasive vegetation for an agtech company, building websites for a wedding planning agency, and creating APIs to automate internal processes—including integration with Apple&apos;s internal platforms. {/*I&apos;ve also contributed to telecommunication projects with major industry players like Spark and Skinny, honing my problem-solving skills and adaptability along the way.*/}
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
          My hands-on experience, combined with my knack for quick learning and problem-solving, allows me to adapt and deliver results in any environment.
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
          If you’re looking for a driven developer who&apos;s ready to tackle new challenges, let&apos;s connect!
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 11} inView>
          <Link
            href="/contact"
            className={`${
              process.env.NEXT_PUBLIC_IS_PREVIEW! == "true"
                ? "pointer-events-none opacity-50"
                : ""
            }`}
          >
            <InteractiveHoverButton className="w-40" text="Lets chat!" />
          </Link>
        </BlurFade>
      </div>

      {/* Reviews Section */}
      <div className="relative overflow-hidden max-w-[1000px] mx-auto pt-10 pb-10">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white/100 to-transparent" />

          <BlurFade delay={BLUR_FADE_DELAY * 12} inView>
            <Marquee pauseOnHover className="[--duration:50s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13} inView>
            <Marquee reverse pauseOnHover className="[--duration:50s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </BlurFade>

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white/100 to-transparent" />
      </div>
    </div>
  );
}
