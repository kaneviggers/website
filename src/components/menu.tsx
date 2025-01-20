"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import { HomeIcon, Phone, Scroll } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Menu() {
  const currentPath = usePathname();

  return (
    <div
      className="fixed top-0 left-0 w-full z-[50] z-50"
    >
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

        {/* CV Button */}
        <DockIcon>
          <Link href="/cv" className="pointer-events-none opacity-50">
            <div
              className={`p-2 ${
                currentPath === "/cv" ? "bg-gray-100" : "pointer-events-none opacity-50"
              } rounded-full`}
            >
              <Scroll />
            </div>
          </Link>
        </DockIcon>

        {/* Divider */}
        <div className="w-px h-10 bg-gray-300 mx-2" />

        {/* Contact Button */}
        <DockIcon>
          <Link href="/contact" className="pointer-events-none opacity-50">
            <div
              className={`p-2 ${
                currentPath === "/contact" ? "bg-gray-100" : "pointer-events-none opacity-50"
              } rounded-full`}
            >
              <Phone />
            </div>
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
