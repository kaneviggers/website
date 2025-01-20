"use client";

import React, { useState } from "react";
import "dotenv/config";
import FlickeringGrid from "@/components/ui/flickering-grid";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import emailjs from "emailjs-com";

/*
  TODO Add a form to contact me
*/

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
      <div className="relative z-0 flex h-[500px] w-full">
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
      <div className="flex justify-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Get in touch!
          </h1>
          <hr className="border-t-2 border-black my-4" />
          <form>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input type="text" id="name" placeholder="eg. John Smith" value={formData.name} onChange={handleChange} />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input type="email" id="email" placeholder="eg. johnsmith@example.com" value={formData.email} onChange={handleChange} />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <Input type="phone" id="phone" placeholder="eg. 123 456 7890" value={formData.phone} onChange={handleChange} />
            </div>

            {/* Content */}
            <div className="mb-4">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Enquiry
              </label>
              <Input type="text" id="content" value={formData.content} onChange={handleChange} />
            </div>

            {/* Submit Button */}
            <InteractiveHoverButton className="w-40" text="Send" onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
}
