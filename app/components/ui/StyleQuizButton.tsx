"use client";
import React from "react";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  width?: string | number;
  height?: string | number;
}

export default function Button({
  label = "Take the Style Quiz",
  width = 213,
  height = 48,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "bg-[#f95b46] text-white font-normal px-[32px] py-[12px] font-['Poppins'] text-base rounded-md shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg flex justify-center items-center hover:opacity-90 transition whitespace-nowrap",
        className
      )}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height
      }}
    >
      {label}
    </button>
  );
}
