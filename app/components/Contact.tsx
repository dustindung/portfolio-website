"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 w-[min(100%, 38rem)] text-center
  sm:mb-40"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:dustindung300@gmail.com">
          dustindung300@gmail.com
        </a>{" "}
        or throught this form.
      </p>
      <form className="mt-10 flex flex-col ">
        <input
          type="email"
          className="h-14 px-4 border border-black/10 rounded-lg 
          focus:outline-black"
          placeholder="Your email"
        />
        <textarea
          className="h-52 p-4 my-3 border border-black/10 rounded-lg
          focus:outline-black"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-10 w-32 bg-gray-900 text-white rounded-full outline-none transition-all
          focus:scale-110 
          hover:scale-110 hover:bg-gray-950
          active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
