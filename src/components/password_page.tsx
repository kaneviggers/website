"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import FlickeringGrid from "./ui/flickering-grid";

export function PasswordPage() {
  const [formData, setFormData] = useState({
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {};

  return (
    <div className="flex flex-col justify-center min-h-screen gap-2">
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.4}
        flickerChance={0.1}
      />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Password
        </h1>
        <Input
          type="text"
          id="content"
          placeholder="Type here"
          value={formData.password}
          onChange={handleChange}
          className="w-64 p-2 bg-white"
        />
        <InteractiveHoverButton
          className="w-40"
          text="Enter"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
