import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm tracking-tight text-ink"
        >
          <Terminal size={16} className="text-signal" strokeWidth={2} />
          Collins<span className="text-amber">@</span>soc
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/projects"
            className="text-muted transition-colors hover:text-ink"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="text-muted transition-colors hover:text-ink"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-muted transition-colors hover:text-ink"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}