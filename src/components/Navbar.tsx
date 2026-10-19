import Link from "next/link";
import Logo from "./Logo";

const links = [
  { label: "Product", href: "#product" },
  { label: "Board", href: "#board" },
  { label: "Sprints", href: "#sprints" },
  { label: "Teams", href: "#teams" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link href="/" aria-label="Citrus home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden text-sm font-medium text-ink-muted transition-colors hover:text-ink sm:block"
          >
            Contact
          </Link>
          <Link
            href="#signin"
            className="rounded-[10px] bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
}
