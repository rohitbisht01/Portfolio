"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/Hook";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              // src={"/denji.jpeg"}
              src={"/Profile2.jpeg"}
              // width={50}
              // height={30}
              width={60}
              height={40}
              alt="rohit bisht"
              quality={95}
              priority={true}
              className=" rounded-full h-24 w-24 object-cover shadow-xl border-[.35rem] border-white"
            />
          </motion.div>
          {/* <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I&apos;m Rohit Bisht.</span> I&apos;m
        a <span className="font-bold">front-end developer</span> who enjoys
        building <span className="italic">web apps</span>.
        {/* With a strong
        foundation in <span className="underline italic">React (Next.js)</span>{" "}
        and a passion for clean and responsive design. */}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          className="bg-gray-900 text-white flex items-center gap-2
          py-3 px-7 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition-all"
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="bg-white flex items-center gap-2
          py-3 px-7 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition-all border border-black/10 dark:bg-white/10"
        >
          Download CV <HiDownload />
        </a>

        <a
          href="https://www.linkedin.com/in/rohitbisht01/"
          target="_blank"
          className="bg-white text-gray-600 p-4 flex gap-2 items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition-all border border-black/10  dark:bg-white/10 dark:text-white/60 "
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/rohitbisht01"
          target="_blank"
          className="bg-white text-gray-600 p-4 flex gap-2 items-center rounded-full text-2xl outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950    active:scale-105 transition-all border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
