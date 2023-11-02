import React, { PropsWithChildren } from "react";

const SectionHeading = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-3xl font-medium mb-8 capitalize text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
