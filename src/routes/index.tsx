import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  Code2,
  Network,
  MapPin,
  Phone,
  Clock,
  Quote,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import gedungAsset from "@/assets/gedung.jpeg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ACHIEVEMENTS, ALUMNI, MAJORS, PARTNERS, SCHOOL, STATS } from "@/lib/school-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMK Telkom Sidoarjo — Digital Telecommunication School" },
      {
        name: "description",
        content:
          "Website resmi SMK Telkom Sidoarjo: program keahlian SIJA dan TJAT, PPDB 2026/2027, layanan BLUD, BKK & PKL, serta asisten AI sekolah.",
      },
      { property: "og:title", content: "SMK Telkom Sidoarjo — Center of Excellence" },
      {
        property: "og:description",
        content:
          "Mewujudkan generasi digital berkarakter, inovatif, dan siap kerja di era Industri 4.0.",
      },
    ],
  }),
  component: Home,
});

const MAJOR_ICONS = [Code2, Network];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={gedungAsset}
          alt="Gedung utama SMK Telkom Sidoarjo"
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Badge className="border-0 bg-primary/90 text-primary-foreground">
            Telkom Schools · Terakreditasi A
          </Badge>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-extrabold text-charcoal-foreground sm:text-5xl lg:text-6xl">
            SMK TELKOM SIDOARJO
          </h1>
          <p className="mt-3 max-w-2xl font-display text-lg font-semibold text-charcoal-foreground/90 sm:text-xl">
            Center of Excellence &amp; Digital Telecommunication School
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal-foreground/80 sm:text-lg">
            Mewujudkan Generasi Digital Berkarakter, Inovatif, dan Siap Kerja di Era Industri 4.0.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/ppdb">
                Daftar PPDB Sekarang
                <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-charcoal-foreground/60 bg-transparent text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground"
            >
              <a href="#program">Jelajahi Program</a>
            </Button>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAM KEAHLIAN */}
      <section id="program" className="section-muted scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Program Keahlian"
            title="Dua Program Keahlian Unggulan"
            desc="Dua kompetensi keahlian resmi SMK Telkom Sidoarjo, didukung kurikulum bersama Telkom Group, lab modern, dan sertifikasi industri."
          />
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:gap-8">
            {MAJORS.map((m, i) => {
              const Icon = MAJOR_ICONS[i] ?? Network;
              return (
                <article key={m.code} className="card-elevated group flex h-full flex-col p-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="size-6" />
                    </span>
                    <Badge variant="secondary" className="font-semibold">
                      {m.code}
                    </Badge>
                    <Badge variant="outline" className="ml-auto font-medium">
                      {m.badge}
                    </Badge>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-charcoal">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  <ul className="mt-6 grid gap-2 border-t border-border pt-5 sm:grid-cols-2">
                    {m.skills.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-charcoal">
                        <CheckCircle2 className="size-4 shrink-0 text-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALUMNI & MITRA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Lulusan Terbaik"
          title="Alumni Sukses di Industri Digital"
          desc="Cerita nyata lulusan kami yang berkarier di perusahaan teknologi dan telekomunikasi."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ALUMNI.map((a) => (
            <article key={a.name} className="card-elevated p-7">
              <Quote className="size-8 text-primary/30" />
              <p className="mt-3 text-sm leading-relaxed text-charcoal italic">“{a.quote}”</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-charcoal">{a.name}</p>
                <p className="text-xs text-muted-foreground">{a.year}</p>
                <p className="mt-1 text-sm font-medium text-primary">
                  {a.role} · {a.company}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center font-display text-xl font-bold text-charcoal">
            Kerja Sama Mitra Industri
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="flex h-20 items-center justify-center rounded-xl border border-border bg-card px-3 text-center text-xs font-semibold text-charcoal/80 transition-colors hover:border-primary hover:text-primary"
              >
                <span className="flex flex-col items-center gap-1.5">
                  <Building2 className="size-4 text-primary" />
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTASI */}
      <section className="section-muted">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Prestasi"
            title="Kejuaraan Nasional &amp; Internasional"
            desc="Pencapaian siswa dan sekolah dalam kompetisi teknologi dari tingkat provinsi hingga internasional."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.map((a) => (
              <article key={a.title + a.year} className="card-elevated p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    {a.level === "Internasional" ? (
                      <Trophy className="size-5" />
                    ) : (
                      <Award className="size-5" />
                    )}
                  </span>
                  <Badge variant="outline">{a.year}</Badge>
                </div>
                <h3 className="mt-4 text-base font-bold text-charcoal">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.field}</p>
                <p className="mt-3 text-xs font-semibold tracking-wide text-primary uppercase">
                  {a.level}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Lokasi"
          title="Kunjungi Kampus Kami"
          desc="Berada di pusat Kota Sidoarjo, mudah dijangkau dari Surabaya dan sekitarnya."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="card-elevated space-y-5 p-7 lg:col-span-2">
            <InfoRow icon={MapPin} label="Alamat" value={SCHOOL.address} />
            <InfoRow icon={Clock} label="Jam Operasional" value={SCHOOL.hours} />
            <InfoRow icon={Phone} label="Kontak" value={`${SCHOOL.phone} · ${SCHOOL.whatsapp}`} />
            <Button asChild className="w-full">
              <Link to="/ppdb">Jadwalkan Kunjungan / Daftar</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] lg:col-span-3">
            <iframe
              title="Peta lokasi SMK Telkom Sidoarjo"
              src={SCHOOL.mapEmbed}
              className="h-80 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{desc}</p>}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
        <p className="mt-0.5 text-sm leading-relaxed text-charcoal">{value}</p>
      </div>
    </div>
  );
}
