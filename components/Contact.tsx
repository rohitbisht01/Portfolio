"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/Hook";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        You can reach out to me directly at{" "}
        <a className="underline" href="mailto:rohitsinghbisht124@gmail.com">
          rohitsinghbisht124@gmail.com
        </a>{" "}
        or by using the contact form provided.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          await sendEmail(formData);
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <SubmitButton />
      </form>
    </motion.section>
  );
}
