"use client";

import React from "react";

import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gray-900 z-10">
      <FlickeringGrid
        className="absolute inset-0"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.02}
      />
      <h1 className="text-3xl font-bold text-white dark:text-white z-0">
        Coming soon
      </h1>
    </div>
  );
}
