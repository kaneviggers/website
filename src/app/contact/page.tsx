"use client";

import React, { useState } from "react";
import "dotenv/config";
import FlickeringGrid from "@/components/ui/flickering-grid";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import emailjs from "emailjs-com";
import BlurFade from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";

/*
  TODO Add a form to contact me
*/

const BLUR_FADE_DELAY = 0.04;

export default function Home() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    emailjs.init(process.env.EMAILJS_PUBLIC_KEY!)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Replace with your service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Replace with your template ID
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Replace with your user ID
      )
      .then(
        () => {
          toast("Email has been sent!")
          setFormData({ name: "", email: "", phone: "", content: "" });
        },
        (error) => {
          toast("Something went wrong, try again later.")
          console.error(error);
        }
      );
  };

  return (
    <div>
      <div className="relative z-0 flex h-[250px] w-full">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#6A0DAD"
          maxOpacity={0.4}
          flickerChance={0.1}
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="flex-1 space-y-4 max-w-[800px] mx-auto px-8 sm:px-6 lg:px-8">
        <BlurFade inView delay={BLUR_FADE_DELAY * 5}>
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Get in touch
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 6}>
          <Separator />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
            Hey, I&apos;m Kane! Orignally from Queenstown, New Zealand and
            currently in Univserity in Auckland.

            I&apos;m Kane, a passionate software developer from Queenstown, New Zealand, currently studying Mechatronics Engineering in Auckland.
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
          <h1 className="text-lg font-bold text-gray-500 dark:text-white">
          I&apos;ve been programming since I was 13, and I&apos;ve worked on diverse projects: using AI and satellite imagery to detect invasive vegetation for an agtech company, building websites for a wedding planning agency, and creating APIs to automate internal processes—including integration with Apple&apos;s internal platforms. I&apos;ve also contributed to telecommunication projects with major industry players like Spark and Vodafone, honing my problem-solving skills and adaptability along the way.
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
      </div>
    </div>
  );
}
