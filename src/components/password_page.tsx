"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import FlickeringGrid from "./ui/flickering-grid";
import { toast } from "sonner"
import "dotenv/config";
import { Menu } from "./menu";

export function PasswordPage({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState({
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    if (formData.password == process.env.NEXT_PUBLIC_PREVIEW_PASSWORD) {
      toast("Authenticated")
      setAuthenticated(true);
    } else {
      toast("Incorrect password")
    }
  };

  const [authenticated, setAuthenticated] = useState(false);

  return authenticated ? (
    <div>
      <Menu />
      {children}
    </div>
  ) : (
    <div className="flex flex-col justify-center min-h-screen gap-2 bg-gray-900">
      <FlickeringGrid
        className="absolute inset-0"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.02}
      />
      <div className="z-10 flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold text-white dark:text-white">
          Password
        </h1>
        <Input
          type="text"
          id="password"
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
