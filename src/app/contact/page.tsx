"use client";

import React, { useState } from "react";
import "dotenv/config";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BlurFade from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { HashLoader } from "react-spinners";

/*
  TODO Add a form to contact me
*/

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const [isSent, setIsSent] = useState(false);

  const [nameIssue, setNameIssue] = useState(false);
  const [emailIssue, setEmailIssue] = useState(false);
  const [phoneIssue, setPhoneIssue] = useState(false);
  const [contentIssue, setContentIssue] = useState(false);

  const [enableSend, setEnableSend] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let isValid = true;

    switch (id) {
      case "email":
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        isValid = emailPattern.test(value);
        setEmailIssue(!isValid); // Update issue state
        break;

      case "phone":
        const phonePattern = /^[0-9]/; // Modify if needed
        isValid = phonePattern.test(value);
        setPhoneIssue(!isValid); // Update issue state
        break;
      case "name":
        setNameIssue(false);
        break;
      case "content":
        setContentIssue(false);
        break;
    }

    if ((!nameIssue && !emailIssue && !phoneIssue && !contentIssue) && (
      formData.name != "" && formData.email != "" && formData.phone != "" && formData.content != ""
    )) {
      setEnableSend(true);
    }

    // Update form data in one place
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs.init(process.env.EMAILJS_PUBLIC_KEY!);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Replace with your service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Replace with your template ID
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Replace with your user ID
      )
      .then(
        () => {
          toast("Email has been sent!");
          setFormData({ name: "", email: "", phone: "", content: "" });
          setIsLoading(false);
          setIsSent(true);
        },
        (error) => {
          toast("Something went wrong, try again later.");
          setIsLoading(false);
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
        <BlurFade inView delay={BLUR_FADE_DELAY * 1}>
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Get in touch
          </h1>
        </BlurFade>
        {isLoading ? (
          <div className="flex items-center justify-center pt-20">
            <HashLoader loading={isLoading} />
          </div>
        ) : isSent ? (
          <div>
            <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
              <Separator />
            </BlurFade>
            <h1 className="text-md text-black dark:text-white pt-5">
              Thanks for getting in touch, I'll get back to you soon!
            </h1>
          </div>
        ) : (
          <div className="flex-1 space-y-4 max-w-[800px]">
            <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
              <Separator />
            </BlurFade>
            <BlurFade inView delay={BLUR_FADE_DELAY * 3}>
              <Label>Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Smith"
                required
                onChange={handleChange}
                className={`border p-2 rounded-md ${
                  nameIssue ? "border-red-500" : "border-gray-300"
                }`}
              />
            </BlurFade>
            <BlurFade inView delay={BLUR_FADE_DELAY * 4}>
              <Label>Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="johnsmith@example.com"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
                onChange={handleChange}
                className={`border p-2 rounded-md ${
                  emailIssue ? "border-red-500" : "border-gray-300"
                }`}
              />
            </BlurFade>
            <BlurFade inView delay={BLUR_FADE_DELAY * 5}>
              <Label>Phone</Label>
              <Input
                id="phone"
                type="tel"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  (e.target.value = e.target.value.replace(/\D/g, ""))
                }
                placeholder="123 1234 1234"
                onChange={handleChange}
                className={`border p-2 rounded-md ${
                  phoneIssue ? "border-red-500" : "border-gray-300"
                }`}
              />
            </BlurFade>
            <BlurFade inView delay={BLUR_FADE_DELAY * 6}>
              <Label>Message</Label>
              <Input
                height={1000}
                id="content"
                type="text"
                required
                onChange={handleChange}
                className={`border p-2 rounded-md ${
                  contentIssue ? "border-red-500" : "border-gray-300"
                }`}
              />
            </BlurFade>
            <BlurFade inView delay={BLUR_FADE_DELAY * 7}>
              <InteractiveHoverButton
                text="Send"
                onClick={handleSubmit}
                className={`${
                  enableSend == false
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              />
            </BlurFade>
          </div>
        )}
      </div>
    </div>
  );
}
