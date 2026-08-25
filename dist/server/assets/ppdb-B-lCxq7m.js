import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { ChevronDown, Check, ChevronUp, ClipboardList, Upload, FileCheck2, Megaphone, UserCheck, GraduationCap, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { c as cn, d as SectionHead, M as MAJORS, B as Button } from "./router-DbQZdAmm.js";
import { L as Label, I as Input } from "./label-C4J4XPG-.js";
import { B as Badge } from "./badge-cHKNlP6M.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const STEPS = [{
  icon: ClipboardList,
  title: "Pendaftaran Online",
  desc: "Isi formulir pendaftaran di halaman ini."
}, {
  icon: Upload,
  title: "Upload Berkas",
  desc: "Unggah rapor, KK, akta, dan foto formal."
}, {
  icon: FileCheck2,
  title: "Tes Seleksi",
  desc: "Tes akademik, logika, dan wawancara."
}, {
  icon: Megaphone,
  title: "Pengumuman",
  desc: "Hasil seleksi dikirim via email & WhatsApp."
}, {
  icon: UserCheck,
  title: "Daftar Ulang",
  desc: "Pelunasan administrasi dan pengukuran seragam."
}];
const FEES = [{
  item: "Uang Pendaftaran",
  amount: "Rp 300.000",
  note: "Sekali bayar, non-refundable"
}, {
  item: "Uang Pangkal",
  amount: "Rp 6.500.000",
  note: "Dapat diangsur hingga 3 kali"
}, {
  item: "SPP Bulanan",
  amount: "Rp 750.000",
  note: "Termasuk praktikum & lab"
}, {
  item: "Seragam & Perlengkapan",
  amount: "Rp 1.850.000",
  note: "5 set seragam + atribut"
}, {
  item: "Sertifikasi Kompetensi",
  amount: "Rp 1.200.000",
  note: "Dibayar di kelas XI"
}];
const SCHOLARSHIPS = [{
  title: "Beasiswa Akademik",
  value: "Potongan 50% – 100%",
  req: "Rata-rata rapor ≥ 88 & peringkat 1–3"
}, {
  title: "Beasiswa Prestasi Lomba",
  value: "Potongan 50% – 100%",
  req: "Juara olimpiade/LKS tingkat kota ke atas"
}, {
  title: "Beasiswa Tahfidz",
  value: "Potongan 25% – 75%",
  req: "Hafalan minimal 5 juz bersertifikat"
}, {
  title: "Beasiswa Afirmasi",
  value: "Potongan 25% – 50%",
  req: "Kartu bantuan pemerintah / surat keterangan"
}];
function Ppdb() {
  const [major, setMajor] = useState("");
  const [fileName, setFileName] = useState("");
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-charcoal", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-4", children: [
        /* @__PURE__ */ jsx(Badge, { className: "border-0 bg-primary text-primary-foreground", children: "Kuota Terbatas · Gelombang 1" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-extrabold text-charcoal-foreground sm:text-4xl lg:text-5xl", children: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027" }),
        /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-sm leading-relaxed text-charcoal-foreground/80 sm:text-base", children: "Bergabunglah bersama SMK Telkom Sidoarjo dan siapkan masa depanmu di bidang jaringan, perangkat lunak, dan telekomunikasi." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "h-2 w-full bg-primary" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Alur Pendaftaran", title: "Lima Langkah Menjadi Siswa Baru", desc: "Proses transparan, cepat, dan dapat dipantau secara online." }),
      /* @__PURE__ */ jsx("ol", { className: "mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5", children: STEPS.map((s, i) => /* @__PURE__ */ jsxs("li", { className: "card-elevated relative p-6", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -top-3 left-6 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground", children: i + 1 }),
        /* @__PURE__ */ jsx(s.icon, { className: "size-6 text-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-bold text-charcoal", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: s.desc })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "section-muted", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Formulir Online", title: "Formulir Pendaftaran Siswa Baru", desc: "Isi data dengan benar. Konfirmasi akan dikirim melalui WhatsApp dan email." }),
      /* @__PURE__ */ jsxs("form", { className: "card-elevated mt-10 grid gap-5 p-7 sm:grid-cols-2", onSubmit: (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") ?? "").trim();
        if (!name || !major) {
          toast.error("Lengkapi nama lengkap dan pilihan jurusan.");
          return;
        }
        toast.success(`Terima kasih, ${name}! Pendaftaran Anda terkirim. Tim PPDB akan menghubungi Anda dalam 1×24 jam.`);
        e.currentTarget.reset();
        setMajor("");
        setFileName("");
      }, children: [
        /* @__PURE__ */ jsx(Field, { label: "Nama Lengkap", name: "name", placeholder: "Nama sesuai akta", required: true }),
        /* @__PURE__ */ jsx(Field, { label: "NISN", name: "nisn", placeholder: "10 digit NISN", maxLength: 10, required: true }),
        /* @__PURE__ */ jsx(Field, { label: "Asal Sekolah", name: "school", placeholder: "SMP/MTs asal", className: "sm:col-span-2", required: true }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { children: "Pilihan Jurusan" }),
          /* @__PURE__ */ jsxs(Select, { value: major, onValueChange: setMajor, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Pilih program keahlian" }) }),
            /* @__PURE__ */ jsx(SelectContent, { children: MAJORS.map((m) => /* @__PURE__ */ jsxs(SelectItem, { value: m.code, children: [
              m.code,
              " — ",
              m.title
            ] }, m.code)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: "No. WhatsApp", name: "wa", placeholder: "08xxxxxxxxxx", required: true }),
        /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "nama@email.com", className: "sm:col-span-2", required: true }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2 sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "rapor", children: "Unggah Berkas Rapor (PDF/JPG, maks. 5 MB)" }),
          /* @__PURE__ */ jsxs("label", { htmlFor: "rapor", className: "flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input bg-background px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary", children: [
            /* @__PURE__ */ jsx(Upload, { className: "size-5 text-primary" }),
            fileName || "Klik untuk memilih berkas rapor"
          ] }),
          /* @__PURE__ */ jsx("input", { id: "rapor", name: "rapor", type: "file", accept: ".pdf,.jpg,.jpeg,.png", className: "hidden", onChange: (e) => {
            var _a, _b;
            return setFileName(((_b = (_a = e.target.files) == null ? void 0 : _a[0]) == null ? void 0 : _b.name) ?? "");
          } })
        ] }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(GraduationCap, { className: "mr-1.5 size-4" }),
          "Kirim Pendaftaran"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHead, { eyebrow: "Investasi Pendidikan", title: "Rincian Biaya & Beasiswa", desc: "Rincian resmi TA 2026/2027 beserta skema beasiswa yang tersedia." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-8 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { className: "card-elevated overflow-hidden", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-charcoal text-charcoal-foreground", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "px-5 py-3 text-left font-semibold", children: "Komponen" }),
            /* @__PURE__ */ jsx("th", { className: "px-5 py-3 text-right font-semibold", children: "Nominal" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: FEES.map((f) => /* @__PURE__ */ jsxs("tr", { className: "border-t border-border", children: [
            /* @__PURE__ */ jsxs("td", { className: "px-5 py-4", children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-charcoal", children: f.item }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: f.note })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-right font-semibold whitespace-nowrap text-primary", children: f.amount })
          ] }, f.item)) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: SCHOLARSHIPS.map((s) => /* @__PURE__ */ jsxs("article", { className: "card-elevated p-6", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "size-5 text-primary" }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 text-base font-bold text-charcoal", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-semibold text-primary", children: s.value }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: s.req })
        ] }, s.title)) })
      ] })
    ] })
  ] });
}
function Field({
  label,
  name,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { className: `grid gap-2 ${className ?? ""}`, children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: name, children: label }),
    /* @__PURE__ */ jsx(Input, { id: name, name, ...props })
  ] });
}
export {
  Ppdb as component
};
