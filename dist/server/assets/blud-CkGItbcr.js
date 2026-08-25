import { jsxs, jsx } from "react/jsx-runtime";
import { Cable, Code2, Palette, Cpu, ShieldCheck, Clock4, MessageSquare } from "lucide-react";
import "sonner";
import { d as SectionHead, B as Button } from "./router-DbQZdAmm.js";
import { B as Badge } from "./badge-cHKNlP6M.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
const SERVICES = [{
  icon: Cable,
  tag: "Jaringan",
  title: "Jasa Jaringan & Fiber Optic",
  desc: "Pengadaan, instalasi, dan konfigurasi jaringan LAN/Wi-Fi untuk kantor, sekolah, dan UMKM, termasuk terminasi fiber optic.",
  items: ["Survey & desain topologi", "Instalasi kabel & perangkat", "Konfigurasi router/switch", "Garansi maintenance 3 bulan"]
}, {
  icon: Code2,
  tag: "Software",
  title: "Jasa Software & Website",
  desc: "Pembuatan landing page, sistem informasi sekolah/UMKM, hingga aplikasi mobile dengan pendampingan guru produktif.",
  items: ["Landing page company profile", "Sistem informasi & dashboard", "Aplikasi mobile Android", "Hosting & domain setup"]
}, {
  icon: Palette,
  tag: "Kreatif",
  title: "Jasa Desain & Digital Marketing",
  desc: "Desain logo, konten feeds Instagram, hingga video promosi produk dengan gaya visual modern.",
  items: ["Desain logo & brand kit", "Paket 12 feeds Instagram", "Video promosi 30–60 detik", "Copywriting konten"]
}, {
  icon: Cpu,
  tag: "Hardware / IoT",
  title: "Produk Hardware & IoT",
  desc: "Perangkat smart home dan monitoring berbasis IoT hasil rekayasa siswa, siap pakai dan dapat dikustomisasi.",
  items: ["Smart lamp & smart plug", "Sensor suhu & kelembapan", "Smart door lock RFID", "Dashboard monitoring IoT"]
}];
const GUARANTEES = [{
  icon: ShieldCheck,
  title: "Dibimbing Guru Produktif",
  desc: "Setiap pekerjaan diverifikasi oleh guru bersertifikasi industri."
}, {
  icon: Clock4,
  title: "Pengerjaan Terjadwal",
  desc: "Estimasi waktu jelas dengan laporan progres berkala."
}, {
  icon: MessageSquare,
  title: "Konsultasi Gratis",
  desc: "Diskusi kebutuhan tanpa biaya sebelum kesepakatan kerja."
}];
function Blud() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-charcoal", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx(Badge, { className: "border-0 bg-primary text-primary-foreground", children: "Teaching Factory" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-3xl font-extrabold text-charcoal-foreground sm:text-4xl lg:text-5xl", children: "BLUD SMK Telkom Sidoarjo — Produk & Layanan Unggulan" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-foreground/80 sm:text-base", children: "Karya nyata siswa dan guru dalam layanan teknologi profesional dengan kualitas berstandar industri." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-2 w-full bg-primary" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Katalog", title: "Produk & Jasa Karya Siswa", desc: "Empat lini layanan unggulan yang dikelola unit BLUD sekolah." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-2", children: SERVICES.map((s) => /* @__PURE__ */ jsxs("article", { className: "card-elevated flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-40 items-center justify-center bg-accent", children: /* @__PURE__ */ jsx(s.icon, { className: "size-16 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-7", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "w-fit font-semibold", children: s.tag }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 text-xl font-bold text-charcoal", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.desc }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-1.5 text-sm text-charcoal sm:grid-cols-2", children: s.items.map((i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" }),
            i
          ] }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 font-display text-lg font-bold text-primary", children: s.price }),
          /* @__PURE__ */ jsx(Button, { onClick: () => window.open("https://wa.me/6282132793985?text=Halo%20Tim%20BLUD,%20saya%20ingin%20melihat%20portofolio%20project%20siswa", "_blank"), className: "w-full bg-red-700 hover:bg-red-700 text-white", children: "Lihat Portofolio Project" })
        ] })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-muted", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8", children: GUARANTEES.map((g) => /* @__PURE__ */ jsxs("div", { className: "card-elevated p-7", children: [
      /* @__PURE__ */ jsx(g.icon, { className: "size-6 text-primary" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-bold text-charcoal", children: g.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: g.desc })
    ] }, g.title)) }) })
  ] });
}
export {
  Blud as component
};
