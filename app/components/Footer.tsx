import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; 2023 Dustin. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        NextJS (App Router & Server Action), Typescript, Tailwind CSS, Framer
        Motion, Resend.
      </p>
    </footer>
  );
};

export default Footer;
