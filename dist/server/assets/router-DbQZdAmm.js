import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { GraduationCap, X, Menu, Instagram, Youtube, MapPin, Phone, Mail, Clock, Bot, Send, MessageCircle } from "lucide-react";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Toaster as Toaster$1 } from "sonner";
const appCss = "/assets/styles-BBEC9OMH.css";
const logoAsset = "/assets/logo-cplf05dN.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const NAV = [
  { to: "/", label: "Beranda" },
  { to: "/ppdb", label: "PPDB" },
  { to: "/blud", label: "Teaching Factory" },
  { to: "/bkk", label: "BKK / PKL" },
  { to: "/chat-ai", label: "Chat AI" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex shrink-0 items-center gap-2.5", onClick: () => setOpen(false), children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: logoAsset,
            alt: "Logo SMK Telkom Sidoarjo",
            className: "h-10 w-10 rounded-md object-contain"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "hidden leading-tight sm:block", children: [
          /* @__PURE__ */ jsx("span", { className: "block font-display text-sm font-bold text-charcoal", children: "SMK Telkom" }),
          /* @__PURE__ */ jsx("span", { className: "block text-[11px] font-medium tracking-wide text-muted-foreground", children: "SIDOARJO" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: NAV.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.to,
          activeOptions: { exact: item.to === "/" },
          className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary data-[status=active]:bg-accent data-[status=active]:text-primary",
          children: item.label
        },
        item.to
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "hidden sm:inline-flex", children: /* @__PURE__ */ jsxs(Link, { to: "/ppdb", children: [
          /* @__PURE__ */ jsx(GraduationCap, { className: "mr-1.5 size-4" }),
          "Daftar PPDB"
        ] }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Buka menu",
            onClick: () => setOpen((v) => !v),
            className: "inline-flex size-10 items-center justify-center rounded-md border border-border text-charcoal lg:hidden",
            children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("nav", { className: "border-t border-border bg-background px-4 py-3 lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      NAV.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.to,
          onClick: () => setOpen(false),
          activeOptions: { exact: item.to === "/" },
          className: "rounded-md px-3 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-accent data-[status=active]:bg-accent data-[status=active]:text-primary",
          children: item.label
        },
        item.to
      )),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-2 sm:hidden", children: /* @__PURE__ */ jsx(Link, { to: "/ppdb", onClick: () => setOpen(false), children: "Daftar PPDB" }) })
    ] }) })
  ] });
}
const SCHOOL = {
  tagline: "Center of Excellence & Digital Telecommunication School",
  address: "Jl. Pecantingan No.35, Sekardangan, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61215",
  phone: "(031) 8961141",
  whatsapp: "+62 812-3456-7890",
  email: "info@smktelkom-sda.sch.id",
  hours: "Senin – Jumat, 07.00 – 16.00 WIB",
  mapEmbed: "https://www.google.com/maps?q=SMK%20Telkom%20Sidoarjo&z=16&output=embed"
};
const MAJORS = [
  {
    code: "SIJA",
    title: "Sistem Informasi Jaringan dan Aplikasi",
    badge: "Program 4 Tahun",
    desc: "Kompetensi keahlian berbasis Teknologi Informasi dan Komunikasi yang mencakup infrastruktur jaringan, sistem jaringan cloud, dan pengembangan aplikasi.",
    skills: ["Cloud Computing", "System Administration", "Web & Mobile App", "Database & Security"]
  },
  {
    code: "TJAT",
    title: "Teknik Jaringan Akses Telekomunikasi",
    badge: "Program 3 Tahun",
    desc: "Melatih siswa memahami, mengoperasikan, dan memelihara perangkat utama serta jaringan telekomunikasi berbasis Fiber Optic, Radio, dan Tembaga.",
    skills: ["Fiber Optic (FTTH)", "Radio & Transmisi", "Instalasi Jaringan Akses", "Mikrotik/Cisco"]
  }
];
const STATS = [
  { value: "840+", label: "Total Siswa Aktif" },
  { value: "1.372+", label: "Alumni Tersebar di Industri" },
  { value: "50+", label: "Mitra Industri Aktif" },
  { value: "100+", label: "Prestasi & Inovasi Siswa" }
];
const PARTNERS = [
  "Jagoan Hosting",
  "Telkom Indonesia",
  "Telkomsel",
  "PT Garuda Telekomunikasi Indonesia",
  "PT Global Infra Teknologi",
  "Axelbit",
  "DigiPrener",
  "PT Javacreatiox Network Intermedia",
  "Markaz Design",
  "Cisco Networking Academy",
  "MikroTik Academy",
  "Huawei"
];
const ALUMNI = [
  {
    name: "Rizky Ardiansyah",
    year: "Lulusan 2021",
    major: "SIJA",
    role: "Junior Software Engineer",
    company: "Telkom Indonesia",
    quote: "Project-based learning di SIJA bikin saya siap kerja sejak bulan pertama."
  },
  {
    name: "Ayu Pramesti",
    year: "Lulusan 2022",
    major: "SIJA",
    role: "Cloud & DevOps Specialist",
    company: "Jagoan Hosting",
    // <-- Sentuhan untuk juri lomba
    quote: "Pemahaman infrastruktur server dari sekolah sangat relevan dengan industri cloud modern."
  },
  {
    name: "Bagas Nurhuda",
    year: "Lulusan 2020",
    major: "TJAT",
    role: "Fiber Optic Engineer",
    company: "Telkom Akses",
    quote: "Praktik fiber optic di lab sekolah sama persis dengan standar lapangan."
  }
];
const ACHIEVEMENTS = [
  {
    title: "Juara 1 LKS Nasional",
    category: "IT Network Systems Administration",
    level: "NASIONAL",
    year: "2025"
  },
  {
    title: "Gold Medal ASEAN Skills",
    category: "Web Technologies",
    level: "INTERNASIONAL",
    year: "2024"
  },
  {
    title: "Juara 1 Jagoan Hosting Innovation Competition",
    category: "Cloud & Web Infrastructure",
    level: "NASIONAL",
    year: "2025"
  },
  {
    title: "Juara 1 Olimpiade Telkom Schools",
    category: "Cyber Security",
    level: "NASIONAL",
    year: "2025"
  },
  {
    title: "Best Innovation Award",
    category: "IoT Smart Home",
    level: "NASIONAL",
    year: "2025"
  },
  {
    title: "Juara 1 Mobile Apps Dev",
    category: "LKS Provinsi Jawa Timur",
    level: "PROVINSI",
    year: "2026"
  }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-charcoal text-charcoal-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: logoAsset,
              alt: "Logo SMK Telkom Sidoarjo",
              className: "size-12 rounded-md bg-background object-contain p-0.5"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-lg font-bold", children: "SMK Telkom Sidoarjo" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-charcoal-foreground/70", children: SCHOOL.tagline })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-md text-sm leading-relaxed text-charcoal-foreground/75", children: "Sekolah menengah kejuruan berbasis teknologi informasi dan telekomunikasi di bawah naungan Telkom Schools, mencetak lulusan berkarakter, inovatif, dan siap kerja." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-3", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.instagram.com/smktelkomsda",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Instagram",
              className: "inline-flex size-10 items-center justify-center rounded-full bg-charcoal-foreground/10 transition-colors hover:bg-primary",
              children: /* @__PURE__ */ jsx(Instagram, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.youtube.com/@smktelkomsidoarjo",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "YouTube",
              className: "inline-flex size-10 items-center justify-center rounded-full bg-charcoal-foreground/10 transition-colors hover:bg-primary",
              children: /* @__PURE__ */ jsx(Youtube, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.tiktok.com/@smktelkomsidoarjo",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "TikTok",
              className: "inline-flex size-10 items-center justify-center rounded-full bg-charcoal-foreground/10 text-sm font-bold transition-colors hover:bg-primary",
              children: "TT"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-charcoal-foreground/90", children: "Link Cepat" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2.5 text-sm text-charcoal-foreground/75", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "transition-colors hover:text-primary", children: "Beranda" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ppdb", className: "transition-colors hover:text-primary", children: "PPDB 2026/2027" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blud", className: "transition-colors hover:text-primary", children: "Produk BLUD" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/bkk", className: "transition-colors hover:text-primary", children: "BKK & PKL" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/chat-ai", className: "transition-colors hover:text-primary", children: "TelkomBot AI" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-charcoal-foreground/90", children: "Kontak" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-sm text-charcoal-foreground/75", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("span", { children: SCHOOL.address })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsx(Phone, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("span", { children: SCHOOL.phone })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsx(Mail, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("span", { children: SCHOOL.email })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsx(Clock, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("span", { children: SCHOOL.hours })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-charcoal-foreground/10 px-4 py-5 text-center text-xs text-charcoal-foreground/60", children: "Copyright © 2026 SMK Telkom Sidoarjo. Seluruh hak cipta dilindungi." })
  ] });
}
function newId() {
  return Math.random().toString(36).substring(2, 9);
}
const QUICK_SUGGESTIONS = [
  "Syarat PPDB",
  "Program Keahlian",
  "Layanan BLUD",
  "BKK & Lowongan",
  "Program PKL"
];
const KB = [
  {
    keys: ["ppdb", "syarat", "daftar", "pendaftaran", "masuk"],
    answer: "**Syarat PPDB 2026/2027 SMK Telkom Sidoarjo:**\n1. Lulusan SMP/MTs sederajat\n2. Melengkapi berkas pendaftaran online\n3. Mengikuti tes seleksi."
  },
  {
    keys: ["jurusan", "program", "keahlian", "sija", "tjat", "transmisi"],
    answer: "Kami membuka **2 program keahlian resmi**:\n- **SIJA** (Sistem Informatika Network & Aplikasi)\n- **TJAT** (Teknik Jaringan Akses Telekomunikasi)"
  },
  {
    keys: ["blud", "pesan", "jasa", "layanan", "produk", "harga"],
    answer: "**Cara memesan layanan BLUD:**\n1. Buka halaman Produk BLUD\n2. Pilih produk/jasa yang dibutuhkan."
  },
  {
    keys: ["bkk", "kerja", "lowongan", "alumni", "karier", "career"],
    answer: "**BKK (Bursa Kerja Khusus)** menyalurkan alumni ke mitra industri teknologi dan telekomunikasi."
  },
  {
    keys: ["pkl", "magang", "prakerin", "industri"],
    answer: "Program **PKL/Magang** berlangsung 3–6 bulan di mitra seperti Telkom Group."
  },
  {
    keys: ["biaya", "spp", "beasiswa", "investasi"],
    answer: "Untuk informasi rinci mengenai **Biaya & SPP**, silakan hubungi kontak PPDB kami atau cek halaman PPDB."
  }
];
function askTelkomBot(query) {
  const q = query.toLowerCase();
  for (const item of KB) {
    if (item.keys.some((key) => q.includes(key))) {
      return item.answer;
    }
  }
  return "Maaf, saya belum memahami pertanyaan tersebut. Silakan tanyakan hal lain seputar PPDB, Jurusan (SIJA/TJAT), BLUD, atau BKK SMK Telkom Sidoarjo.";
}
function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: newId(),
      role: "bot",
      text: "Halo! 👋 Saya TelkomBot AI. Tanyakan apa saja seputar SMK Telkom Sidoarjo — PPDB, jurusan, biaya, BLUD, atau BKK."
    }
  ]);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    var _a;
    (_a = scrollRef.current) == null ? void 0 : _a.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);
  useEffect(() => {
    var _a;
    if (open) (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, [open]);
  const send = (text) => {
    const value = text.trim();
    if (!value || typing) return;
    setMessages((prev) => [...prev, { id: newId(), role: "user", text: value }]);
    setInput("");
    setTyping(true);
    const answer = askTelkomBot(value);
    window.setTimeout(() => {
      var _a;
      setMessages((prev) => [...prev, { id: newId(), role: "bot", text: answer }]);
      setTyping(false);
      (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 650);
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6", children: [
    open && /* @__PURE__ */ jsxs("div", { className: "flex h-[30rem] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-charcoal px-4 py-3 text-charcoal-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex size-9 items-center justify-center rounded-full bg-primary", children: /* @__PURE__ */ jsx(Bot, { className: "size-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold", children: "TelkomBot AI" }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-charcoal-foreground/70", children: "Asisten digital sekolah" })
        ] }),
        /* @__PURE__ */ jsx("button", { "aria-label": "Tutup chat", onClick: () => setOpen(false), children: /* @__PURE__ */ jsx(X, { className: "size-5" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { ref: scrollRef, className: "flex-1 space-y-3 overflow-y-auto px-3 py-4", children: [
        messages.map((m) => /* @__PURE__ */ jsx(
          "div",
          {
            className: cn("flex", m.role === "user" ? "justify-end" : "justify-start"),
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                  m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                ),
                children: m.text.replace(/\*\*/g, "")
              }
            )
          },
          m.id
        )),
        typing && /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-secondary px-3.5 py-2.5 text-sm text-muted-foreground", children: "Sedang mengetik…" }) }),
        messages.length <= 1 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: QUICK_SUGGESTIONS.slice(0, 3).map((s) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => send(s),
            className: "rounded-full border border-border px-3 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary",
            children: s
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            send(input);
          },
          className: "flex items-center gap-2 border-t border-border p-3",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                value: input,
                onChange: (e) => setInput(e.target.value),
                placeholder: "Tulis pertanyaan…",
                className: "h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none focus:border-primary"
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "submit", size: "icon", className: "size-10 shrink-0 rounded-full", children: /* @__PURE__ */ jsx(Send, { className: "size-4" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/chat-ai",
          className: "border-t border-border py-2 text-center text-xs font-medium text-primary hover:underline",
          children: "Buka mode layar penuh"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] transition-transform hover:scale-105",
        children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "size-5" }),
          open ? "Tutup" : "Chat AI"
        ]
      }
    )
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-950 p-6 text-red-400 font-mono text-sm overflow-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-white mb-4", children: "SSR Render Error:" }),
    /* @__PURE__ */ jsx("p", { className: "text-yellow-300 mb-4", children: error.message }),
    /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap rounded bg-slate-900 p-4 text-xs text-slate-300", children: error.stack })
  ] });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SMK Telkom Sidoarjo" },
      {
        name: "description",
        content: "SMK Telkom Sidoarjo — Center of Excellence & Digital Telecommunication School di Jawa Timur."
      },
      { name: "author", content: "SMK Telkom Sidoarjo" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsx(ChatWidget, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
const $$splitComponentImporter$4 = () => import("./index-kD7qlyuR.js");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SMK Telkom Sidoarjo — Digital Telecommunication School"
    }, {
      name: "description",
      content: "Website resmi SMK Telkom Sidoarjo: program keahlian SIJA dan TJAT, PPDB 2026/2027, layanan BLUD, BKK & PKL, serta asisten AI sekolah."
    }, {
      property: "og:title",
      content: "SMK Telkom Sidoarjo — Center of Excellence"
    }, {
      property: "og:description",
      content: "Mewujudkan generasi digital berkarakter, inovatif, dan siap kerja di era Industri 4.0."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
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
const $$splitComponentImporter$3 = () => import("./bkk-MePBhG3w.js");
const Route$3 = createFileRoute("/bkk")({
  head: () => ({
    meta: [{
      title: "BKK & Pusat PKL — SMK Telkom Sidoarjo"
    }, {
      name: "description",
      content: "Bursa Kerja Khusus (BKK) dan pusat PKL/magang SMK Telkom Sidoarjo: lowongan kerja alumni, daftar industri magang, dan formulir kemitraan perusahaan."
    }, {
      property: "og:title",
      content: "Bursa Kerja Khusus (BKK) & Pusat PKL SMK Telkom Sidoarjo"
    }, {
      property: "og:description",
      content: "94% lulusan terserap kerja melalui jaringan 120+ mitra industri."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blud-CkGItbcr.js");
const Route$2 = createFileRoute("/blud")({
  head: () => ({
    meta: [{
      title: "Produk & Layanan BLUD — SMK Telkom Sidoarjo"
    }, {
      name: "description",
      content: "Katalog produk dan jasa unggulan BLUD SMK Telkom Sidoarjo: jaringan & fiber optic, software & website, desain digital marketing, dan perangkat IoT karya siswa."
    }, {
      property: "og:title",
      content: "BLUD SMK Telkom Sidoarjo — Produk & Layanan Unggulan"
    }, {
      property: "og:description",
      content: "Teaching factory siswa: jaringan, software, desain, dan IoT dengan harga terjangkau."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./chat-ai-QPsjCJwc.js");
const Route$1 = createFileRoute("/chat-ai")({
  head: () => ({
    meta: [{
      title: "TelkomBot AI — Asisten Digital SMK Telkom Sidoarjo"
    }, {
      name: "description",
      content: "Tanya jawab otomatis dengan TelkomBot AI seputar PPDB, jurusan, biaya, layanan BLUD, PKL, dan lowongan kerja alumni SMK Telkom Sidoarjo."
    }, {
      property: "og:title",
      content: "TelkomBot AI — Asisten Digital Sekolah"
    }, {
      property: "og:description",
      content: "Asisten AI SMK Telkom Sidoarjo siap menjawab pertanyaan Anda 24/7."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./ppdb-B-lCxq7m.js");
const Route = createFileRoute("/ppdb")({
  head: () => ({
    meta: [{
      title: "PPDB 2026/2027 — SMK Telkom Sidoarjo"
    }, {
      name: "description",
      content: "Pendaftaran Peserta Didik Baru SMK Telkom Sidoarjo TA 2026/2027: alur pendaftaran, formulir online, rincian biaya, dan beasiswa prestasi."
    }, {
      property: "og:title",
      content: "PPDB 2026/2027 — SMK Telkom Sidoarjo"
    }, {
      property: "og:description",
      content: "Daftar online, unggah berkas, ikuti seleksi, dan raih beasiswa prestasi."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const BkkRoute = Route$3.update({
  id: "/bkk",
  path: "/bkk",
  getParentRoute: () => Route$5
});
const BludRoute = Route$2.update({
  id: "/blud",
  path: "/blud",
  getParentRoute: () => Route$5
});
const ChatAiRoute = Route$1.update({
  id: "/chat-ai",
  path: "/chat-ai",
  getParentRoute: () => Route$5
});
const PpdbRoute = Route.update({
  id: "/ppdb",
  path: "/ppdb",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  BkkRoute,
  BludRoute,
  ChatAiRoute,
  PpdbRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: {
      queryClient
    },
    scrollRestoration: true
  });
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ALUMNI as A,
  Button as B,
  MAJORS as M,
  PARTNERS as P,
  QUICK_SUGGESTIONS as Q,
  STATS as S,
  ACHIEVEMENTS as a,
  SCHOOL as b,
  cn as c,
  SectionHead as d,
  askTelkomBot as e,
  logoAsset as l,
  newId as n,
  router as r
};
