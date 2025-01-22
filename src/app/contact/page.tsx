"use client";

// import React, { useState } from "react";
import "dotenv/config";
import FlickeringGrid from "@/components/ui/flickering-grid";
// import { toast } from "sonner";
// import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BlurFade from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

/*
  TODO Add a form to contact me
*/

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   content: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };

  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   emailjs.init(process.env.EMAILJS_PUBLIC_KEY!)

  //   emailjs
  //     .send(
  //       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Replace with your service ID
  //       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Replace with your template ID
  //       formData,
  //       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Replace with your user ID
  //     )
  //     .then(
  //       () => {
  //         toast("Email has been sent!")
  //         setFormData({ name: "", email: "", phone: "", content: "" });
  //       },
  //       (error) => {
  //         toast("Something went wrong, try again later.")
  //         console.error(error);
  //       }
  //     );
  // };

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
        <BlurFade inView delay={BLUR_FADE_DELAY * 1}>
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Get in touch
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
          <Separator />
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 3}>
          <Label>Name</Label>
          <Input type="text" placeholder="John Smith" />
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 4}>
          <Label>Email</Label>
          <Input type="email" placeholder="johnsmith@example.com" />
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 5}>
          <Label>Message</Label>
          <Input height={1000} type="text" />
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 6}>
          <InteractiveHoverButton text="Send" />
        </BlurFade>
      </div>
    </div>
  );
}
