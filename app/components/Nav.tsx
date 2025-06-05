"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur border-b border-brand/10 shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <span className="font-extrabold text-xl tracking-widest text-brand drop-shadow-glow">
          KEVIN
        </span>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 font-medium hover:text-accent transition drop-shadow"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
