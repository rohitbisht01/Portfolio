import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import covidImg from "@/public/covid.png";
import spotifyClone from "@/public/spotify.png";
import TurboClothing from "@/public/turbo.png";
import SketchBook from "@/public/Sketchbook.png";
import Todo from "@/public/Todo.png";
import Devflow from "@/public/Devflow.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology in Engineering",
    location: "Bhimtal, Uttarakhand",
    description:
      "I successfully completed my 4-year engineering degree. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug, 2019 - June, 2023",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "Currently working as a Front-End Developer while actively expanding skills in Next.js.  I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Dec, 2022 - Present",
  },
] as const;

export const projectsData = [
  // {
  //   title: "Todo Manager",
  //   description:
  //     "Dive into productivity with my Todo Manager application. Create, delete, and track the status of your tasks seamlessly. Stay organized and on top of your to-do list effortlessly.",
  //   tags: ["Next.js", "MongoDB"],
  //   imageUrl: Todo,
  //   link: "https://todo-next-tau-nine.vercel.app/",
  // },
  {
    title: "Dev Overflow",
    description:
      "Collaborative platform for developers to ask/answer questions, build tech community, explore job opportunities.",
    tags: ["Next.js", "TypeScript", "Clerk", "Shadcn", "MongoDB", "OpenAI"],
    imageUrl: Devflow,
    link: "https://dev-overflow-bice.vercel.app/",
  },
  {
    title: "Sketchbook",
    description:
      "Sketchbook is a drawing application. Draw on one screen, and your art instantly appears on the other screen.",
    tags: ["ReactJs", "Next.js", "Canvas", "Socket.io"],
    imageUrl: SketchBook,
    link: "https://sketchbook-ets6ff5xp-rohitbisht01.vercel.app/",
  },
  {
    title: "Music Streaming App",
    description:
      "Explore an all-in-one music streaming app that replicates Spotify's features, plus the unique ability to include your personal music collection.",
    tags: [
      "ReactJs",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Supabase",
    ],
    imageUrl: spotifyClone,
    link: "https://spotify-clone-psi-five.vercel.app/",
  },
  {
    title: "Turbo Clothing",
    description:
      "An e-commerce platform featuring user authentication, shopping cart functionality for adding items, and a simulated payment system.",
    tags: ["HTML", "SASS", "ReactJs", "Redux", "Firebase"],
    imageUrl: TurboClothing,
    link: "https://turbo-clothing-live.vercel.app/",
  },
  {
    title: "Covid-19 Tracker",
    description:
      "Tracks the population (people) who have infected, recovered, and died due to COVID-19",
    tags: ["HTML", "CSS", "ReactJs"],
    imageUrl: covidImg,
    link: "https://github.com/rohitbisht01/Covid-19-Tracker",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  // "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Prisma",
  // "Framer Motion",
  // "Supabase"
] as const;
