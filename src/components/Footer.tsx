"use client";

import Image from "next/image";

const assetPathPrefix = "/assets";

const avatarImages = [
  `${assetPathPrefix}/348ba.svg`,
  `${assetPathPrefix}/114f9.svg`,
  `${assetPathPrefix}/6759e.svg`,
];

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#product" },
      { label: "Board", href: "#board" },
      { label: "Sprints", href: "#sprints" },
      { label: "Integrations", href: "#product" },
      { label: "What's New", href: "#product" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#faq" },
      { label: "Documentation", href: "#product" },
      { label: "Video Tutorials", href: "#product" },
      { label: "Product Updates", href: "#product" },
      { label: "Roadmap", href: "#product" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#product" },
      { label: "Careers", href: "#contact" },
      { label: "Blog", href: "#product" },
      { label: "Contact", href: "#contact" },
      { label: "Sign in", href: "#signin" },
    ],
  },
];

function CitrusMark() {
  return (
    <span className="relative inline-grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand">
      <span className="h-3.5 w-3.5 rounded-full bg-white" />
      <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-light" />
    </span>
  );
}

function NewsletterAvatars() {
  return (
    <div className="flex items-center">
      {avatarImages.map((src, index) => (
        <span
          key={src}
          className={`grid h-7 w-7 place-items-center overflow-hidden rounded-full border-2 border-[#181818] bg-[#181818] ${
            index ? "-ml-2" : ""
          }`}
        >
          <span className="footer-avatar-mask block h-6 w-6">
            <Image src={src} alt="" width={24} height={24} unoptimized />
          </span>
        </span>
      ))}
    </div>
  );
}

const socialLinks = [
  { label: "X", href: "#footer", src: `${assetPathPrefix}/d30a3.svg`, width: 16, height: 16 },
  {
    label: "LinkedIn",
    href: "#footer",
    src: `${assetPathPrefix}/71d4f.svg`,
    width: 16,
    height: 16,
  },
  {
    label: "YouTube",
    href: "#footer",
    src: `${assetPathPrefix}/5b4e0.svg`,
    width: 20,
    height: 20,
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="min-h-[531px] overflow-hidden bg-[#111] text-white"
    >
      <div className="mx-auto w-full max-w-[1536px] px-5 pt-16 sm:px-8 lg:px-[60px] lg:pt-[79px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,872px)_minmax(0,464px)] lg:gap-20">
          <div className="flex flex-col items-start">
            <h2
              className="figma-fredoka-medium text-[clamp(2.5rem,4vw,56px)] leading-[1.04] tracking-[-0.035em] lg:leading-[58.24px] lg:tracking-[-1.96px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <span className="block">Manage work.</span>
              <span className="flex flex-wrap items-center gap-3">
                Move forward faster. <CitrusMark />
              </span>
            </h2>
            <p className="figma-jakarta-regular mt-2 text-[18px] leading-7 text-white/75">
              One workspace for projects, people and progress.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-y-10 sm:grid-cols-3"
          >
            {footerGroups.map((group) => (
              <div
                key={group.title}
                className="min-h-[161.5px] border-l border-white/25 pl-7 sm:pl-8"
              >
                <p className="figma-jakarta-semibold text-sm leading-5">
                  {group.title}
                </p>
                <ul className="figma-jakarta-regular mt-3 space-y-2 text-[13px] leading-[19.5px] text-white/65">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="grid items-end gap-10 pt-14 lg:grid-cols-[minmax(0,872px)_minmax(0,464px)] lg:gap-20">
          <div
            aria-hidden="true"
            className="figma-jakarta-bold h-[141.44px] overflow-hidden text-[clamp(7rem,13.55vw,208px)] leading-[141.44px] tracking-[-0.075em] text-white/10"
          >
            CITRUS
          </div>

          <div className="footer-newsletter flex h-[152px] flex-col border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="figma-jakarta-semibold text-lg leading-7">
                  Stay in the loop
                </p>
                <p className="figma-jakarta-regular mt-0.5 text-xs leading-4 text-white/60">
                  Get the latest product updates, tips and more.
                </p>
              </div>
              <NewsletterAvatars />
            </div>

            <form
              className="footer-newsletter-form mt-4 flex h-12 items-center border border-white/10 bg-white/[0.03] pl-4 pr-1.5"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email address"
                className="figma-jakarta-regular min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-white/45"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="footer-submit grid h-9 w-9 shrink-0 place-items-center bg-brand transition-colors hover:bg-brand-dark"
              >
                <Image
                  src={`${assetPathPrefix}/e7530.svg`}
                  alt=""
                  width={16}
                  height={16}
                  unoptimized
                />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-1 flex flex-col gap-5 border-t border-white/20 py-6 text-[11px] leading-[16.5px] text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <div className="figma-jakarta-regular flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#00d492]" />
            <span>All systems operational</span>
          </div>

          <div className="figma-jakarta-regular flex flex-wrap items-center gap-x-6 gap-y-3">
            <span>© 2026 Citrus. All rights reserved.</span>
            <a href="#footer" className="underline underline-offset-2 hover:text-white">
              Privacy
            </a>
            <a href="#footer" className="underline underline-offset-2 hover:text-white">
              Terms
            </a>
            <a href="#footer" className="underline underline-offset-2 hover:text-white">
              Cookies
            </a>
            <span
              className="hidden h-5 w-px bg-white/25 sm:block"
              aria-hidden="true"
            />
            <div className="flex items-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="opacity-65 transition-opacity hover:opacity-100"
                >
                  <Image
                    src={link.src}
                    alt=""
                    width={link.width}
                    height={link.height}
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
