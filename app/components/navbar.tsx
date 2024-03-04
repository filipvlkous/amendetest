"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  MenuLink,
  ProductItem,
} from "./ui/navbar";
import { twMerge } from "tailwind-merge";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={twMerge(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-[70]",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuLink setActive={setActive} active={active} item="Domov"></MenuLink>
        <MenuItem setActive={setActive} active={active} item="Uživatel">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/books">Seznam knih</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Admin">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/admin/books">Seznam knih</HoveredLink>
            <HoveredLink href="/admin/books/new">Přidat knihu</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
