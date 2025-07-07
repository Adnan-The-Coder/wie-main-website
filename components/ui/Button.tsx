"use client";
import React from "react";

type ButtonProps = {
  title: string;
  className?: string;
};

const Button = ({ title, className }: ButtonProps) => {
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
      }
      className={`relative cursor-pointer rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-5 py-2 text-sm font-medium shadow-[0px_0px_12px_#8c45ff]${className ? ` ${className}` : ""}`}
    >
      {title}
    </button>
  );
};

export default Button;