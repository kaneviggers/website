"use client";

import Link from "next/link";

import { Footer } from "@/components/footer";

import { cn } from "@/lib/utils";

import FlickeringGrid from "@/components/ui/flickering-grid";
import WordRotate from "@/components/ui/word-rotate";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
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
        <div className="flex flex-col items-center justify-center">
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
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* About me Section */}
      <div className="relative flex justify-between items-start w-full pl-40 pr-40">
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Who am i?
          </h1>
        </div>
        {/* 
          TODO: Rewrite this section
        */}
        <div className="flex-1 space-y-4">
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
            Hey, I&apos;m Kane! Orignally from Queenstown, New Zealand and currently
            in Univserity in Auckland.
          </h1>
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
            Since I was 13 I&apos;ve been beyond interested in computer programming
            and have been learning ever since.
          </h1>
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
            I started working as a private contracter soon after and have worked
            in all sorts of different fields, with the added beneift of being a
            fast learner and a great problem solver, I feel very confident in
            picking something new up and running with it.
          </h1>
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
            I&apos;m always looking for new opportunities and challenges, so if you
            have something in mind, feel free to reach out!
          </h1>
          <div>
            <Link href="/contact">
              <InteractiveHoverButton className="w-40" text="Lets chat!" />
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
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
