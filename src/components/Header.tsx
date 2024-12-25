"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItem = { href: string; label: string };

export default function Header(): React.JSX.Element {
  const pathname = usePathname();

  const links: LinkItem[] = [
    { href: "/performance", label: "Performance" },
    { href: "/reliability", label: "Reliability" },
    { href: "/scale", label: "Scale" },
  ];

  return (
    <header className="w-full absolute text-white z-10">
      <nav
        className="container relative flex flex-wrap items-center justify-between mx-auto p-8 space-x-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
        <div className="flex flex-wrap space-x-5 text-xl">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href ? "font-bold underline" : ""
              } hover:underline`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
