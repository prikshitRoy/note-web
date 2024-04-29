"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Header({ className, children }: HeaderProps) {
  return (
    <header
      className={cn(
        "w-full h-6 top-0 sticky flex justify-between dark:bg-black bg-white pt-2 pb-2",
        className
      )}
    >
      {/* left side */}
      <div className="ml-2">left</div>
      {children}
      {/* Right side */}
      <div className="mr-2">
        <ModeToggle />
      </div>
    </header>
  );
}
