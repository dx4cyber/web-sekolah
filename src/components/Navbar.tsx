import { Link } from "@tanstack/react-router";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Beranda" },
  { to: "/ppdb", label: "PPDB" },
  { to: "/blud", label: "Teaching Factory" },
  { to: "/bkk", label: "BKK / PKL" },
  { to: "/chat-ai", label: "Chat AI" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logoAsset}
            alt="Logo SMK Telkom Sidoarjo"
            className="h-10 w-10 rounded-md object-contain"
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-bold text-charcoal">SMK Telkom</span>
            <span className="block text-[11px] font-medium tracking-wide text-muted-foreground">
              SIDOARJO
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary data-[status=active]:bg-accent data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/ppdb">
              <GraduationCap className="mr-1.5 size-4" />
              Daftar PPDB
            </Link>
          </Button>
          <button
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-charcoal lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-accent data-[status=active]:bg-accent data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 sm:hidden">
              <Link to="/ppdb" onClick={() => setOpen(false)}>
                Daftar PPDB
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
