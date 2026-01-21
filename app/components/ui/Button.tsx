"use client";
import React from "react";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export default function Button({
  label = "Book Free Consultation",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `
        bg-[#f95b46] 
        text-white 
        font-normal 
        font-['Poppins'] 
        text-base 
        rounded-md 
        shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] 
        shadow-lg 
        flex 
        justify-center 
        items-center 
        hover:opacity-90 
        transition 
        whitespace-nowrap
        px-5 xl:px-6
        py-2.5
        min-h-[43px]
        `,
        className
      )}
    >
      {label}
    </button>
  );
}
