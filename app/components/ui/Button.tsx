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
        py-2
        px-4
        hover:scale-105

        w-[220px] h-[40px]     
        lg:w-[264px] lg:h-[44px] 
        `,
        className
      )}
    >
      {label}
    </button>
  );
}
