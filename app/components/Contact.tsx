"use client";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import SectionHeading from "./SectionHeading";
import SubmitButton from "./SubmitButton";

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
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p
        className="text-gray-700 -mt-6
      dark:text-white/80"
      >
        Please contact me directly at{" "}
        <a className="underline" href="mailto:dustindung300@gmail.com">
          dustindung300@gmail.com
        </a>{" "}
        or throught this form.
      </p>
      <form
        className="mt-10 flex flex-col
        dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          className="h-14 px-4 border border-black/10 rounded-lg 
          focus:outline-black
          dark:opacity-80"
          placeholder="Your email"
          required
          maxLength={500}
          name="email"
        />
        <textarea
          className="h-52 p-4 my-3 border border-black/10 rounded-lg
          focus:outline-black
          dark:opacity-80"
          placeholder="Your message"
          required
          maxLength={5000}
          name="message"
        />
        <SubmitButton />
      </form>
      <Toaster />
    </motion.section>
  );
};

export default Contact;
