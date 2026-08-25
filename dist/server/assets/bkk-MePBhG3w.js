import { jsx, jsxs } from "react/jsx-runtime";
import { FileText, Building2, Briefcase, MapPin, GraduationCap, Handshake } from "lucide-react";
import { toast } from "sonner";
import { c as cn, d as SectionHead, B as Button } from "./router-DbQZdAmm.js";
import { B as Badge } from "./badge-cHKNlP6M.js";
import { L as Label, I as Input } from "./label-C4J4XPG-.js";
import * as React from "react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const PKL_STEPS = ["Siswa mengisi formulir pengajuan PKL ke koordinator jurusan.", "Sekolah menerbitkan surat pengantar ke perusahaan tujuan.", "Perusahaan mengirim surat balasan penerimaan PKL.", "Pembekalan & penempatan siswa selama 3–6 bulan.", "Monitoring guru pembimbing dan penilaian akhir PKL."];
const PKL_PLACES = [{
  name: "Telkom Akses Sidoarjo",
  field: "Fiber Optic & Jaringan Akses",
  quota: 24
}, {
  name: "Telkomsel Regional Jatim",
  field: "Network Operation",
  quota: 12
}, {
  name: "Mitratel",
  field: "Infrastruktur Telekomunikasi",
  quota: 10
}, {
  name: "Infomedia Nusantara",
  field: "IT Support & Layanan Digital",
  quota: 18
}, {
  name: "Startup Digital Surabaya",
  field: "Web & Mobile Development",
  quota: 20
}, {
  name: "Diskominfo Kab. Sidoarjo",
  field: "Jaringan & Sistem Informasi",
  quota: 8
}];
const JOBS = [{
  role: "Junior Web Developer",
  company: "Metranet",
  location: "Surabaya · Onsite",
  type: "Full-time",
  reqs: ["Lulusan SIJA", "Paham React/Laravel", "Portofolio project"]
}, {
  role: "Network Engineer",
  company: "Telkom Akses",
  location: "Sidoarjo · Onsite",
  type: "Full-time",
  reqs: ["Lulusan TJAT", "Sertifikasi jaringan", "Siap kerja lapangan"]
}, {
  role: "Technical Support",
  company: "Indibiz",
  location: "Sidoarjo · Shift",
  type: "Kontrak",
  reqs: ["Komunikatif", "Paham troubleshooting", "Bersedia shift"]
}, {
  role: "Fiber Optic Technician",
  company: "Mitratel",
  location: "Jawa Timur · Mobile",
  type: "Full-time",
  reqs: ["Menguasai splicing", "Punya SIM C", "Sehat fisik"]
}, {
  role: "IT Helpdesk",
  company: "Infomedia",
  location: "Surabaya · Hybrid",
  type: "Full-time",
  reqs: ["Lulusan SIJA/TJAT", "Dasar ticketing system", "Bahasa Inggris pasif"]
}, {
  role: "Junior UI/UX Designer",
  company: "Neutradc",
  location: "Remote",
  type: "Internship",
  reqs: ["Portofolio Figma", "Paham design system", "Kreatif & teliti"]
}];
function Bkk() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-charcoal", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx(Badge, { className: "border-0 bg-primary text-primary-foreground", children: "94% Lulusan Terserap Kerja" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-3xl font-extrabold text-charcoal-foreground sm:text-4xl lg:text-5xl", children: "Bursa Kerja Khusus (BKK) & Pusat PKL / Magang" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-foreground/80 sm:text-base", children: "Menghubungkan siswa dan alumni SMK Telkom Sidoarjo dengan lebih dari 120 mitra industri di bidang teknologi dan telekomunikasi." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-2 w-full bg-primary" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Program PKL", title: "Praktik Kerja Lapangan & Magang", desc: "Tata cara pengajuan PKL dan daftar lokasi industri mitra yang tersedia." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-8 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "card-elevated p-7 lg:col-span-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
            /* @__PURE__ */ jsx(FileText, { className: "size-5" }),
            /* @__PURE__ */ jsx("h3", { className: "text-base font-bold", children: "Tata Cara Pengajuan PKL" })
          ] }),
          /* @__PURE__ */ jsx("ol", { className: "mt-5 space-y-4", children: PKL_STEPS.map((s, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm leading-relaxed text-charcoal", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary", children: i + 1 }),
            s
          ] }, s)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:col-span-3", children: PKL_PLACES.map((p) => /* @__PURE__ */ jsxs("article", { className: "card-elevated p-5", children: [
          /* @__PURE__ */ jsx(Building2, { className: "size-5 text-primary" }),
          /* @__PURE__ */ jsx("h4", { className: "mt-3 text-sm font-bold text-charcoal", children: p.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: p.field }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-xs font-semibold text-primary", children: [
            "Kuota ",
            p.quota,
            " siswa"
          ] })
        ] }, p.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-muted", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Lowongan Kerja", title: "Job Vacancy untuk Alumni", desc: "Lowongan aktif dari perusahaan mitra BKK SMK Telkom Sidoarjo." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: JOBS.map((j) => /* @__PURE__ */ jsxs("article", { className: "card-elevated flex flex-col p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary", children: /* @__PURE__ */ jsx(Briefcase, { className: "size-5" }) }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", children: j.type })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-bold text-charcoal", children: j.role }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium text-primary", children: j.company }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "size-3.5" }),
          j.location
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 flex-1 space-y-1.5 text-sm text-charcoal", children: j.reqs.map((r) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" }),
          r
        ] }, r)) }),
        /* @__PURE__ */ jsxs(Button, { className: "mt-5 w-full", onClick: () => toast.success(`Lamaran untuk posisi ${j.role} di ${j.company} diteruskan ke tim BKK.`), children: [
          /* @__PURE__ */ jsx(GraduationCap, { className: "mr-1.5 size-4" }),
          "Lamar Sekarang"
        ] })
      ] }, j.role + j.company)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Kemitraan", title: "Formulir Pengajuan Magang / Kemitraan", desc: "Untuk perusahaan yang ingin menjadi lokasi PKL atau merekrut alumni melalui BKK." }),
      /* @__PURE__ */ jsxs("form", { className: "card-elevated mt-10 grid gap-5 p-7 sm:grid-cols-2", onSubmit: (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const company = String(data.get("company") ?? "").trim();
        if (!company) {
          toast.error("Nama perusahaan wajib diisi.");
          return;
        }
        toast.success(`Terima kasih! Pengajuan kemitraan dari ${company} telah kami terima.`);
        e.currentTarget.reset();
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "company", children: "Nama Perusahaan" }),
          /* @__PURE__ */ jsx(Input, { id: "company", name: "company", placeholder: "PT Contoh Teknologi", required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "pic", children: "Nama PIC" }),
          /* @__PURE__ */ jsx(Input, { id: "pic", name: "pic", placeholder: "Nama penanggung jawab", required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsx(Input, { id: "email", name: "email", type: "email", placeholder: "hr@perusahaan.com", required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "No. Telepon / WhatsApp" }),
          /* @__PURE__ */ jsx(Input, { id: "phone", name: "phone", placeholder: "08xxxxxxxxxx", required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2 sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "need", children: "Kebutuhan Kerja Sama" }),
          /* @__PURE__ */ jsx(Textarea, { id: "need", name: "need", rows: 4, placeholder: "Contoh: menerima 10 siswa PKL jurusan SIJA, atau rekrutmen 3 Network Engineer." })
        ] }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Handshake, { className: "mr-1.5 size-4" }),
          "Kirim Pengajuan Kemitraan"
        ] })
      ] })
    ] })
  ] });
}
export {
  Bkk as component
};
