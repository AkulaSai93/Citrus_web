"use client";

import { useEffect, useRef, useState } from "react";

function CitrusMark() {
  return (
    <span className="relative grid h-9 w-9 place-items-center rounded-full bg-brand">
      <span className="h-3.5 w-3.5 rounded-full bg-white" />
      <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-brand-light" />
    </span>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        d="M7 7l18 18M25 7 7 25"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (
        open &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
        if (entry.isIntersecting) setOpen(false);
      },
      { threshold: 0.15 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        footerVisible
          ? "pointer-events-none translate-y-4 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <nav
        ref={navRef}
        aria-label="Main"
        className={`nav-shell flex h-16 max-w-[calc(100vw-2rem)] items-center overflow-hidden border border-black/5 bg-neutral-100 p-1.5 shadow-xl shadow-black/15 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "w-[min(22rem,calc(100vw-2rem))] gap-2"
            : "w-16 gap-0"
        }`}
      >
        <div
          id="bottom-navigation-action"
          aria-hidden={!open}
          className={`min-w-0 flex-1 transition-all duration-300 ${
            open
              ? "visible translate-x-0 opacity-100 delay-100"
              : "invisible translate-x-8 opacity-0"
          }`}
        >
          <a
            href="#signin"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="nav-action flex h-[3.125rem] w-full items-center justify-center bg-brand px-6 text-base font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2"
          >
            Sign in
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="bottom-navigation-action"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
          className="nav-action relative grid h-[3.125rem] w-[3.125rem] shrink-0 place-items-center overflow-hidden bg-black text-white outline-none transition-colors hover:bg-ink focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <span
            className={`absolute transition-all duration-300 ${
              open ? "scale-75 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <CitrusMark />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              open ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <CloseIcon />
          </span>
        </button>
      </nav>
    </header>
  );
}
