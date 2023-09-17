"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/Hook";

export default function About() {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I completed my{" "}
        <span className="font-medium"> Bachelor of Engineering </span> from
        Birla Institute of Applied Sciences, Bhimtal, Uttarakhand. I discovered
        my passion for web development during my undergraduate years. I thrive
        in the <span className="italic"> realm of web development </span>, with
        my primary stack including{" "}
        <span className="font-medium">
          {" "}
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">
          Beyond coding, I&apos;m an anime enthusiast, and I&apos;m currently
          hooked on{" "}
        </span>
        <span className="font-bold italic">One Piece.</span>
      </p>
    </motion.section>
  );
}
