import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoAsset from "@/assets/logo.jpg";
import { SCHOOL } from "@/lib/school-data";

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="Logo SMK Telkom Sidoarjo"
              className="size-12 rounded-md bg-background object-contain p-0.5"
            />
            <div>
              <p className="font-display text-lg font-bold">SMK Telkom Sidoarjo</p>
              <p className="text-xs text-charcoal-foreground/70">{SCHOOL.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-charcoal-foreground/75">
            Sekolah menengah kejuruan berbasis teknologi informasi dan telekomunikasi di bawah
            naungan Telkom Schools, mencetak lulusan berkarakter, inovatif, dan siap kerja.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/smktelkomsda" target="_blank" rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full bg-charcoal-foreground/10 transition-colors hover:bg-primary"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="https://www.youtube.com/@smktelkomsidoarjo" target="_blank" rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex size-10 items-center justify-center rounded-full bg-charcoal-foreground/10 transition-colors hover:bg-primary"
            >
              <Youtube className="size-5" />
            </a>
            <a
              href="https://www.tiktok.com/@smktelkomsidoarjo" target="_blank" rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex size-10 items-center justify-center rounded-full bg-charcoal-foreground/10 text-sm font-bold transition-colors hover:bg-primary"
            >
              TT
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-foreground/90">
            Link Cepat
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal-foreground/75">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/ppdb" className="transition-colors hover:text-primary">
                PPDB 2026/2027
              </Link>
            </li>
            <li>
              <Link to="/blud" className="transition-colors hover:text-primary">
                Produk BLUD
              </Link>
            </li>
            <li>
              <Link to="/bkk" className="transition-colors hover:text-primary">
                BKK & PKL
              </Link>
            </li>
            <li>
              <Link to="/chat-ai" className="transition-colors hover:text-primary">
                TelkomBot AI
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-foreground/90">
            Kontak
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-charcoal-foreground/75">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{SCHOOL.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{SCHOOL.phone}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{SCHOOL.email}</span>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{SCHOOL.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10 px-4 py-5 text-center text-xs text-charcoal-foreground/60">
        Copyright © 2026 SMK Telkom Sidoarjo. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
