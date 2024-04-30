"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import { ModeToggle } from "./ModeToggle";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { UserOptionHeader } from "./UserOptionHeader";

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Header({ className, children }: HeaderProps) {
  // Access the current path
  /*   const router = useRouter();
  const currentPath = router.pathname; */
  const checkpath = true;

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
        {checkpath ? <UserOptionHeader /> : <ModeToggle />}
      </div>
    </header>
  );
}
