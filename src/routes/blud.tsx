import { createFileRoute } from "@tanstack/react-router";
import { Cable, Code2, Palette, Cpu, MessageSquare, ShieldCheck, Clock4 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHead } from "./index";

export const Route = createFileRoute("/blud")({
  head: () => ({
    meta: [
      { title: "Produk & Layanan BLUD — SMK Telkom Sidoarjo" },
      {
        name: "description",
        content:
          "Katalog produk dan jasa unggulan BLUD SMK Telkom Sidoarjo: jaringan & fiber optic, software & website, desain digital marketing, dan perangkat IoT karya siswa.",
      },
      { property: "og:title", content: "BLUD SMK Telkom Sidoarjo — Produk & Layanan Unggulan" },
      {
        property: "og:description",
        content: "Teaching factory siswa: jaringan, software, desain, dan IoT dengan harga terjangkau.",
      },
    ],
  }),
  component: Blud,
});

const SERVICES = [
  {
    icon: Cable,
    tag: "Jaringan",
    title: "Jasa Jaringan & Fiber Optic",
    desc: "Pengadaan, instalasi, dan konfigurasi jaringan LAN/Wi-Fi untuk kantor, sekolah, dan UMKM, termasuk terminasi fiber optic.",
    items: ["Survey & desain topologi", "Instalasi kabel & perangkat", "Konfigurasi router/switch", "Garansi maintenance 3 bulan"],
  },
  {
    icon: Code2,
    tag: "Software",
    title: "Jasa Software & Website",
    desc: "Pembuatan landing page, sistem informasi sekolah/UMKM, hingga aplikasi mobile dengan pendampingan guru produktif.",
   
    items: ["Landing page company profile", "Sistem informasi & dashboard", "Aplikasi mobile Android", "Hosting & domain setup"],
  },
  {
    icon: Palette,
    tag: "Kreatif",
    title: "Jasa Desain & Digital Marketing",
    desc: "Desain logo, konten feeds Instagram, hingga video promosi produk dengan gaya visual modern.",
    
    items: ["Desain logo & brand kit", "Paket 12 feeds Instagram", "Video promosi 30–60 detik", "Copywriting konten"],
  },
  {
    icon: Cpu,
    tag: "Hardware / IoT",
    title: "Produk Hardware & IoT",
    desc: "Perangkat smart home dan monitoring berbasis IoT hasil rekayasa siswa, siap pakai dan dapat dikustomisasi.",
   
    items: ["Smart lamp & smart plug", "Sensor suhu & kelembapan", "Smart door lock RFID", "Dashboard monitoring IoT"],
  },
];

const GUARANTEES = [
  { icon: ShieldCheck, title: "Dibimbing Guru Produktif", desc: "Setiap pekerjaan diverifikasi oleh guru bersertifikasi industri." },
  { icon: Clock4, title: "Pengerjaan Terjadwal", desc: "Estimasi waktu jelas dengan laporan progres berkala." },
  { icon: MessageSquare, title: "Konsultasi Gratis", desc: "Diskusi kebutuhan tanpa biaya sebelum kesepakatan kerja." },
];

function Blud() {
  const order = (title: string) => {
    toast.info("Galeri portofolio lengkap sedang dipersiapkan oleh tim BLUD SMK Telkom Sidoarjo.");
  };

  return (
    <div>
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge className="border-0 bg-primary text-primary-foreground">Teaching Factory</Badge>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-charcoal-foreground sm:text-4xl lg:text-5xl">
            BLUD SMK Telkom Sidoarjo — Produk &amp; Layanan Unggulan
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-foreground/80 sm:text-base">
            Karya nyata siswa dan guru dalam layanan teknologi profesional dengan kualitas berstandar industri.
          </p>
        </div>
        <div className="h-2 w-full bg-primary" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Katalog"
          title="Produk &amp; Jasa Karya Siswa"
          desc="Empat lini layanan unggulan yang dikelola unit BLUD sekolah."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.title} className="card-elevated flex flex-col overflow-hidden">
              <div className="flex h-40 items-center justify-center bg-accent">
                <s.icon className="size-16 text-primary" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <Badge variant="secondary" className="w-fit font-semibold">
                  {s.tag}
                </Badge>
                <h3 className="mt-3 text-xl font-bold text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 grid gap-1.5 text-sm text-charcoal sm:grid-cols-2">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-display text-lg font-bold text-primary">{s.price}</p>
                <Button 
                 onClick={() => window.open('https://wa.me/6282132793985?text=Halo%20Tim%20BLUD,%20saya%20ingin%20melihat%20portofolio%20project%20siswa', '_blank')}
                 className="w-full bg-red-700 hover:bg-red-700 text-white"
                >
                  Lihat Portofolio Project
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-muted">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          {GUARANTEES.map((g) => (
            <div key={g.title} className="card-elevated p-7">
              <g.icon className="size-6 text-primary" />
              <h3 className="mt-4 text-base font-bold text-charcoal">{g.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
