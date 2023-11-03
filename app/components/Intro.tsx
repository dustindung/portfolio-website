"use client";
import { useSectionInView } from "@/lib/hooks";
import AvatarPic from "@/public/avatar.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center scroll-mt-28
    sm:mb-0"
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
              src={AvatarPic}
              alt="Dustin portrait"
              // width="192"
              // height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] 
        sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Dustin.</span> I'm a{" "}
        <span className="font-bold">web developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">site & apps.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-xl font-medium
        sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition
          focus:scale-110 
          hover:scale-110 hover:bg-gray-950 
          active:scale-105"
        >
          Contact me here{" "}
          <BsArrowRight
            className="opacity-70 transition 
          group-hover:translate-x-1"
          />
        </Link>
        <a
          href=""
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none border border-black/10 transition
          focus:scale-110 
          hover:scale-110
          active:scale-105"
        >
          Download CV{" "}
          <HiDownload
            className="opacity-70 transition 
          group-hover:translate-y-1"
          />
        </a>
        <a
          href=""
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none border border-black/10 transition
          focus:scale-110 
          hover:scale-110 hover:text-gray-950
          active:scale-105"
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          target="_blank"
          className="bg-white text-gray-700 p-4 text-[1.50rem] flex items-center gap-2 rounded-full outline-none border border-black/10 transition
          focus:scale-110 
          hover:scale-110 hover:text-gray-950
          active:scale-105"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
