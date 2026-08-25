import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Network, CheckCircle2, Quote, Building2, Trophy, Award, MapPin, Clock, Phone } from "lucide-react";
import { B as Button, S as STATS, M as MAJORS, A as ALUMNI, P as PARTNERS, a as ACHIEVEMENTS, b as SCHOOL } from "./router-DbQZdAmm.js";
import { B as Badge } from "./badge-cHKNlP6M.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
const gedungAsset = "/assets/gedung-DEvmmn6w.jpeg";
const MAJOR_ICONS = [Code2, Network];
function Home() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: gedungAsset, alt: "Gedung utama SMK Telkom Sidoarjo", className: "absolute inset-0 size-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: "var(--gradient-hero)"
      }, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32", children: [
        /* @__PURE__ */ jsx(Badge, { className: "border-0 bg-primary/90 text-primary-foreground", children: "Telkom Schools · Terakreditasi A" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-5 max-w-3xl font-display text-4xl leading-tight font-extrabold text-charcoal-foreground sm:text-5xl lg:text-6xl", children: "SMK TELKOM SIDOARJO" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl font-display text-lg font-semibold text-charcoal-foreground/90 sm:text-xl", children: "Center of Excellence & Digital Telecommunication School" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-base leading-relaxed text-charcoal-foreground/80 sm:text-lg", children: "Mewujudkan Generasi Digital Berkarakter, Inovatif, dan Siap Kerja di Era Industri 4.0." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/ppdb", children: [
            "Daftar PPDB Sekarang",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 size-4" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-charcoal-foreground/60 bg-transparent text-charcoal-foreground hover:bg-charcoal-foreground/10 hover:text-charcoal-foreground", children: /* @__PURE__ */ jsx("a", { href: "#program", children: "Jelajahi Program" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8", children: STATS.map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-3xl font-extrabold text-primary sm:text-4xl", children: s.value }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs font-medium text-muted-foreground sm:text-sm", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsx("section", { id: "program", className: "section-muted scroll-mt-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Program Keahlian", title: "Dua Program Keahlian Unggulan", desc: "Dua kompetensi keahlian resmi SMK Telkom Sidoarjo, didukung kurikulum bersama Telkom Group, lab modern, dan sertifikasi industri." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:gap-8", children: MAJORS.map((m, i) => {
        const Icon = MAJOR_ICONS[i] ?? Network;
        return /* @__PURE__ */ jsxs("article", { className: "card-elevated group flex h-full flex-col p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex size-12 items-center justify-center rounded-xl bg-accent text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "size-6" }) }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "font-semibold", children: m.code }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "ml-auto font-medium", children: m.badge })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 text-xl font-bold text-charcoal", children: m.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: m.desc }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6 grid gap-2 border-t border-border pt-5 sm:grid-cols-2", children: m.skills.map((s) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-charcoal", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "size-4 shrink-0 text-primary" }),
            s
          ] }, s)) })
        ] }, m.code);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Lulusan Terbaik", title: "Alumni Sukses di Industri Digital", desc: "Cerita nyata lulusan kami yang berkarier di perusahaan teknologi dan telekomunikasi." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-3", children: ALUMNI.map((a) => /* @__PURE__ */ jsxs("article", { className: "card-elevated p-7", children: [
        /* @__PURE__ */ jsx(Quote, { className: "size-8 text-primary/30" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm leading-relaxed text-charcoal italic", children: [
          "“",
          a.quote,
          "”"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-charcoal", children: a.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: a.year }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm font-medium text-primary", children: [
            a.role,
            " · ",
            a.company
          ] })
        ] })
      ] }, a.name)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-center font-display text-xl font-bold text-charcoal", children: "Kerja Sama Mitra Industri" }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6", children: PARTNERS.map((p) => /* @__PURE__ */ jsx("div", { className: "flex h-20 items-center justify-center rounded-xl border border-border bg-card px-3 text-center text-xs font-semibold text-charcoal/80 transition-colors hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Building2, { className: "size-4 text-primary" }),
          p
        ] }) }, p)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-muted", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Prestasi", title: "Kejuaraan Nasional & Internasional", desc: "Pencapaian siswa dan sekolah dalam kompetisi teknologi dari tingkat provinsi hingga internasional." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: ACHIEVEMENTS.map((a) => /* @__PURE__ */ jsxs("article", { className: "card-elevated p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary", children: a.level === "Internasional" ? /* @__PURE__ */ jsx(Trophy, { className: "size-5" }) : /* @__PURE__ */ jsx(Award, { className: "size-5" }) }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", children: a.year })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-bold text-charcoal", children: a.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: a.field }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs font-semibold tracking-wide text-primary uppercase", children: a.level })
      ] }, a.title + a.year)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Lokasi", title: "Kunjungi Kampus Kami", desc: "Berada di pusat Kota Sidoarjo, mudah dijangkau dari Surabaya dan sekitarnya." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-8 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "card-elevated space-y-5 p-7 lg:col-span-2", children: [
          /* @__PURE__ */ jsx(InfoRow, { icon: MapPin, label: "Alamat", value: SCHOOL.address }),
          /* @__PURE__ */ jsx(InfoRow, { icon: Clock, label: "Jam Operasional", value: SCHOOL.hours }),
          /* @__PURE__ */ jsx(InfoRow, { icon: Phone, label: "Kontak", value: `${SCHOOL.phone} · ${SCHOOL.whatsapp}` }),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsx(Link, { to: "/ppdb", children: "Jadwalkan Kunjungan / Daftar" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] lg:col-span-3", children: /* @__PURE__ */ jsx("iframe", { title: "Peta lokasi SMK Telkom Sidoarjo", src: SCHOOL.mapEmbed, className: "h-80 w-full lg:h-full", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
      ] })
    ] })
  ] });
}
function SectionHead({
  eyebrow,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold tracking-[0.2em] text-primary uppercase", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold text-charcoal sm:text-4xl", children: title }),
    desc && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base", children: desc })
  ] });
}
function InfoRow({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsx("span", { className: "inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "size-5" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase", children: label }),
      /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-sm leading-relaxed text-charcoal", children: value })
    ] })
  ] });
}
export {
  SectionHead,
  Home as component
};
