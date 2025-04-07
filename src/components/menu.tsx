"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import {
  HomeIcon,
  BadgeCheck,
  BriefcaseBusiness,
  FolderOpen,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export function Menu() {
  const currentPath = usePathname();

  const [home, setHome] = useState(true);
  const [skills, setSkills] = useState(true);
  const [cv, setCv] = useState(true);
  const [projects, setProjects] = useState(true);
  const [contact, setContact] = useState(true);
  const [github, setGithub] = useState(true);
  const [linkedin, setLinkedin] = useState(true);

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

        {/* Skills Button */}
        {/* <DockIcon>
          <Link href="/skills">
            <div
              className={`p-2 ${
                currentPath === "/skills" ? "bg-gray-100" : ""
              } rounded-full`}
            >
              <BadgeCheck />
            </div>
          </Link>
        </DockIcon> */}

        {/* CV Button */}
        <DockIcon>
          <Link href="/cv">
            <div
              className={`p-2 ${
                currentPath === "/cv" ? "bg-gray-100" : ""
              } rounded-full`}
            >
              <BriefcaseBusiness />
            </div>
          </Link>
        </DockIcon>

        {/* Projects Button */}
        {/* <DockIcon>
          <Link href="/projects">
            <div
              className={`p-2 ${
                currentPath === "/projects" ? "bg-gray-100" : ""
              } rounded-full`}
            >
              <FolderOpen />
            </div>
          </Link>
        </DockIcon> */}

        {/* Contact Button */}
        <DockIcon>
          {/* <Link
            href="/contact"
            className={`${
              process.env.NEXT_PUBLIC_IS_PREVIEW! == "true"
                ? "pointer-events-none opacity-50"
                : ""
            }`}
          >
            <div
              className={`p-2 ${
                currentPath === "/contact" ? "bg-gray-100" : ""
              } rounded-full`}
            >
              <Phone />
            </div>
          </Link> */}
          <Link href="https://app.usemotion.com/meet/kaneviggers/meeting">
            <Phone />
          </Link>
        </DockIcon>

        {/* Divider */}
        <div className="w-px h-10 bg-gray-300 mx-2" />

        <DockIcon>
          <Link href="https://github.com/kaneviggers">
            <Github />
          </Link>
        </DockIcon>

        <DockIcon>
          <Link href="https://github.com/kaneviggers">
            <Linkedin />
          </Link>
        </DockIcon>
      </Dock>
      {/* <div className="fixed top-0 left-0 w-full z-[50] z-0 flex justify-around py-4 rounded-full">
        <span
          className={`mt-1 transition-all duration-300 text-sm ${
            home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Home
        </span>
        <span
          className={`mt-1 transition-all duration-300 text-sm ${
            skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Skills
        </span>
        <span
          className={`mt-1 transition-all duration-300 text-sm ${
            cv ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          CV
        </span>
        <span
          className={`mt-1 transition-all duration-300 text-sm ${
            projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Projects
        </span>
        <span
          className={`mt-1 transition-all duration-300 text-sm ${
            contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Contact
        </span>
        <span
          className={`mt-1 transition-all duration-300 text-sm ${
            github ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          GitHub
        </span>
        <span
          className={`mt-1 transition-all duration-300 text-sm ${
            linkedin ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          LinkedIn
        </span>
      </div> */}
    </div>
  );
}
