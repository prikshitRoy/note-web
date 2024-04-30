"use client";

import * as React from "react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";

export function UserOptionHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="size-5">
          <DotsVerticalIcon />
          <span className="sr-only">User Option Header</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ModeToggle />
        <ModeToggle />
        <ModeToggle />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
