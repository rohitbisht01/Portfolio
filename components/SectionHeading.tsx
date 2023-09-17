import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="capitalize text-3xl font-medium mb-8 text-center">
      {children}
    </h2>
  );
}
