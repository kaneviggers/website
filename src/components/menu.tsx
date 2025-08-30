"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import {
  HomeIcon,
  Linkedin,
  FolderOpen,
  Instagram
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Menu() {
  const currentPath = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-[50] z-50">
      {/* <div className="z-50 top-0 left-0 w-full"> */}
      <Dock className="flex justify-around py-4 rounded-full">
        {/* Home Button */}
        <DockIcon>
          <Link href="/">
            <div
              className={`p-2 ${
                currentPath === "/" ? "bg-gray-100" : ""
              } rounded-full`}
            >
              <HomeIcon />
            </div>
          </Link>
        </DockIcon>

        {/* Projects Button */}
        <DockIcon>
          <Link href="/projects">
            <div
              className={`p-2 ${
                currentPath === "/projects" ? "bg-gray-100" : ""
              } rounded-full`}
            >
              <FolderOpen />
            </div>
          </Link>
        </DockIcon>

        {/* Divider */}
        <div className="w-px h-10 bg-gray-300 mx-2" />

        <DockIcon>
          <Link href="https://nz.linkedin.com/in/kane-viggers-20517524b">
            <Linkedin />
          </Link>
        </DockIcon>

        <DockIcon>
          <Link href="https://www.instagram.com/kaneviggers">
            <Instagram />
          </Link>
        </DockIcon>

      </Dock>
    </div>
  );
}
