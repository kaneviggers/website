"use client";

import BlurFade from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { Popover } from '@headlessui/react';

import React from "react";

import FlickeringGrid from "@/components/ui/flickering-grid";

const BLUR_FADE_DELAY = 0.04;

const languages = [
  {
    color: {
      r: 247,
      g: 223,
      b: 30,
    },
    name: "Javascript | Fluent",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
  },
  {
    color: {
      r: 68,
      g: 118,
      b: 192,
    },
    name: "Typescript | Fluent",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    color: {
      r: 48,
      g: 105,
      b: 152,
    },
    name: "Python | Fluent",
    logo: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
  },
  {
    color: {
      r: 26,
      g: 67,
      b: 126,
    },
    name: "C++ | Intermediate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/612px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    color: {
      r: 26,
      g: 67,
      b: 126,
    },
    name: "C | Intermediate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    color: {
      r: 51,
      g: 4,
      b: 139,
    },
    name: "C# | Advanced",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
  },
  {
    color: {
      r: 77,
      g: 171,
      b: 213,
    },
    name: "GO | Intermediate",
    logo: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
  },
  {
    color: {
      r: 235,
      g: 117,
      b: 67,
    },
    name: "Swift | Advanced",
    logo: "https://developer.apple.com/swift/images/swift-og.png",
  },
  {
    color: {
      r: 93,
      g: 129,
      b: 158,
    },
    name: "Java | Intermediate",
    logo: "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png",
  },
  {
    color: {
      r: 95,
      g: 207,
      b: 185,
    },
    name: "Dart | Intermediate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
  },
  {
    color: {
      r: 116,
      g: 73,
      b: 64,
    },
    name: "MatLab | Intermediate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/800px-Matlab_Logo.png",
  },
];

const frameworks = [
  {
    color: {
      r: 33,
      g: 33,
      b: 33,
    },
    name: "Express | Fluent",
    logo: "https://img.icons8.com/color/512/express-js.png",
  },
  {
    color: {
      r: 130,
      g: 215,
      b: 247,
    },
    name: "React | Fluent",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
  },
  {
    color: {
      r: 25,
      g: 59,
      b: 43,
    },
    name: "Django | Intermediate",
    logo: "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
  },
  {
    color: {
      r: 0,
      g: 0,
      b: 0,
    },
    name: "Flask | Intermediate",
    logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/flask-qvsfwhwywucb6zv0d7ce.png/flask-1byb2jlw6nwim4nx2248xg.png?_a=DAJFJtWIZAAC",
  },
  {
    color: {
      r: 100,
      g: 188,
      b: 233,
    },
    name: "Flutter | Intermediate",
    logo: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg",
  },
];

const qualifications = [
  {
    color: {
      r: 50,
      g: 50,
      b: 50,
    },
    name: "Certified Technician",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    color: {
      r: 50,
      g: 50,
      b: 50,
    },
    name: "Consultants Network",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
]

export default function Home() {
  return (
    <div>
      <div className="relative flex h-[250px] w-full">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#6FCF97"
          maxOpacity={0.4}
          flickerChance={0.1}
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Languages */}
      <div className="flex-1 space-y-4 max-w-[800px] mx-auto px-8 sm:px-6 lg:px-8">
        <BlurFade inView delay={BLUR_FADE_DELAY * 1}>
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Languages
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
          <Separator />
        </BlurFade>
        <div className="flex flex-wrap gap-3">
          {languages.map((language, index) => (
            <BlurFade key={index} inView delay={BLUR_FADE_DELAY * (index + 2)}>
              <div
                className="flex w-fit items-center gap-3 p-2 rounded-2xl"
                style={{
                  backgroundColor: `rgba(${language.color.r}, ${language.color.g}, ${language.color.b}, 0.2)`,
                }}
              >
                <img
                  src={language.logo}
                  alt={language.name}
                  className="h-6 rounded-lg"
                />
                <span
                  className="font-bold"
                  style={{
                    color: `rgba(${language.color.r}, ${language.color.g}, ${language.color.b})`,
                  }}
                >
                  {language.name}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Frameworks */}
        <BlurFade inView delay={BLUR_FADE_DELAY * (languages.length + 4)}>
          <h1 className="text-4xl font-bold text-black dark:text-white pt-20">
            Frameworks
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * (languages.length + 5)}>
          <Separator />
        </BlurFade>
        <div className="flex flex-wrap gap-3">
          {frameworks.map((framework, index) => (
            <BlurFade
              key={index}
              inView
              delay={BLUR_FADE_DELAY * (index + 6 + languages.length)}
            >
              <div
                className="flex w-fit items-center gap-3 p-2 rounded-2xl"
                style={{
                  backgroundColor: `rgba(${framework.color.r}, ${framework.color.g}, ${framework.color.b}, 0.2)`,
                }}
              >
                <img
                  src={framework.logo}
                  alt={framework.name}
                  className="h-6 rounded-lg"
                />
                <span
                  className="font-bold"
                  style={{
                    color: `rgba(${framework.color.r}, ${framework.color.g}, ${framework.color.b})`,
                  }}
                >
                  {framework.name}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Qualifications */}
        <BlurFade inView delay={BLUR_FADE_DELAY * (languages.length + frameworks.length + 6)}>
          <h1 className="text-4xl font-bold text-black dark:text-white pt-20">
            Qualifications
          </h1>
        </BlurFade>
        <BlurFade inView delay={BLUR_FADE_DELAY * (languages.length + 5)}>
          <Separator />
        </BlurFade>
        <div className="flex flex-wrap gap-3">
          {qualifications.map((qualification, index) => (
            <BlurFade
              key={index}
              inView
              delay={BLUR_FADE_DELAY * (index + 6 + languages.length)}
            >
              <div
                className="flex w-fit items-center gap-3 p-2 rounded-2xl"
                style={{
                  backgroundColor: `rgba(${qualification.color.r}, ${qualification.color.g}, ${qualification.color.b}, 0.2)`,
                }}
              >
                <img
                  src={qualification.logo}
                  alt={qualification.name}
                  className="h-6 rounded-lg"
                />
                <span
                  className="font-bold"
                  style={{
                    color: `rgba(${qualification.color.r}, ${qualification.color.g}, ${qualification.color.b})`,
                  }}
                >
                  {qualification.name}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
