import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Building2, MapPin, GraduationCap, Handshake, FileText } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHead } from "./index";

export const Route = createFileRoute("/bkk")({
  head: () => ({
    meta: [
      { title: "BKK & Pusat PKL — SMK Telkom Sidoarjo" },
      {
        name: "description",
        content:
          "Bursa Kerja Khusus (BKK) dan pusat PKL/magang SMK Telkom Sidoarjo: lowongan kerja alumni, daftar industri magang, dan formulir kemitraan perusahaan.",
      },
      { property: "og:title", content: "Bursa Kerja Khusus (BKK) & Pusat PKL SMK Telkom Sidoarjo" },
      {
        property: "og:description",
        content: "94% lulusan terserap kerja melalui jaringan 120+ mitra industri.",
      },
    ],
  }),
  component: Bkk,
});

const PKL_STEPS = [
  "Siswa mengisi formulir pengajuan PKL ke koordinator jurusan.",
  "Sekolah menerbitkan surat pengantar ke perusahaan tujuan.",
  "Perusahaan mengirim surat balasan penerimaan PKL.",
  "Pembekalan & penempatan siswa selama 3–6 bulan.",
  "Monitoring guru pembimbing dan penilaian akhir PKL.",
];

const PKL_PLACES = [
  { name: "Telkom Akses Sidoarjo", field: "Fiber Optic & Jaringan Akses", quota: 24 },
  { name: "Telkomsel Regional Jatim", field: "Network Operation", quota: 12 },
  { name: "Mitratel", field: "Infrastruktur Telekomunikasi", quota: 10 },
  { name: "Infomedia Nusantara", field: "IT Support & Layanan Digital", quota: 18 },
  { name: "Startup Digital Surabaya", field: "Web & Mobile Development", quota: 20 },
  { name: "Diskominfo Kab. Sidoarjo", field: "Jaringan & Sistem Informasi", quota: 8 },
];

const JOBS = [
  {
    role: "Junior Web Developer",
    company: "Metranet",
    location: "Surabaya · Onsite",
    type: "Full-time",
    reqs: ["Lulusan SIJA", "Paham React/Laravel", "Portofolio project"],
  },
  {
    role: "Network Engineer",
    company: "Telkom Akses",
    location: "Sidoarjo · Onsite",
    type: "Full-time",
    reqs: ["Lulusan TJAT", "Sertifikasi jaringan", "Siap kerja lapangan"],
  },
  {
    role: "Technical Support",
    company: "Indibiz",
    location: "Sidoarjo · Shift",
    type: "Kontrak",
    reqs: ["Komunikatif", "Paham troubleshooting", "Bersedia shift"],
  },
  {
    role: "Fiber Optic Technician",
    company: "Mitratel",
    location: "Jawa Timur · Mobile",
    type: "Full-time",
    reqs: ["Menguasai splicing", "Punya SIM C", "Sehat fisik"],
  },
  {
    role: "IT Helpdesk",
    company: "Infomedia",
    location: "Surabaya · Hybrid",
    type: "Full-time",
    reqs: ["Lulusan SIJA/TJAT", "Dasar ticketing system", "Bahasa Inggris pasif"],
  },
  {
    role: "Junior UI/UX Designer",
    company: "Neutradc",
    location: "Remote",
    type: "Internship",
    reqs: ["Portofolio Figma", "Paham design system", "Kreatif & teliti"],
  },
];

function Bkk() {
  return (
    <div>
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge className="border-0 bg-primary text-primary-foreground">
            94% Lulusan Terserap Kerja
          </Badge>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-charcoal-foreground sm:text-4xl lg:text-5xl">
            Bursa Kerja Khusus (BKK) &amp; Pusat PKL / Magang
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-foreground/80 sm:text-base">
            Menghubungkan siswa dan alumni SMK Telkom Sidoarjo dengan lebih dari 120 mitra industri
            di bidang teknologi dan telekomunikasi.
          </p>
        </div>
        <div className="h-2 w-full bg-primary" />
      </section>

      {/* PKL */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Program PKL"
          title="Praktik Kerja Lapangan &amp; Magang"
          desc="Tata cara pengajuan PKL dan daftar lokasi industri mitra yang tersedia."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="card-elevated p-7 lg:col-span-2">
            <div className="flex items-center gap-2 text-primary">
              <FileText className="size-5" />
              <h3 className="text-base font-bold">Tata Cara Pengajuan PKL</h3>
            </div>
            <ol className="mt-5 space-y-4">
              {PKL_STEPS.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-charcoal">
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {PKL_PLACES.map((p) => (
              <article key={p.name} className="card-elevated p-5">
                <Building2 className="size-5 text-primary" />
                <h4 className="mt-3 text-sm font-bold text-charcoal">{p.name}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{p.field}</p>
                <p className="mt-3 text-xs font-semibold text-primary">Kuota {p.quota} siswa</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOWONGAN */}
      <section className="section-muted">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Lowongan Kerja"
            title="Job Vacancy untuk Alumni"
            desc="Lowongan aktif dari perusahaan mitra BKK SMK Telkom Sidoarjo."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {JOBS.map((j) => (
              <article key={j.role + j.company} className="card-elevated flex flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <Briefcase className="size-5" />
                  </span>
                  <Badge variant="outline">{j.type}</Badge>
                </div>
                <h3 className="mt-4 text-base font-bold text-charcoal">{j.role}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{j.company}</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {j.location}
                </p>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm text-charcoal">
                  {j.reqs.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-5 w-full"
                  onClick={() =>
                    toast.success(
                      `Lamaran untuk posisi ${j.role} di ${j.company} diteruskan ke tim BKK.`,
                    )
                  }
                >
                  <GraduationCap className="mr-1.5 size-4" />
                  Lamar Sekarang
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORM KEMITRAAN */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Kemitraan"
          title="Formulir Pengajuan Magang / Kemitraan"
          desc="Untuk perusahaan yang ingin menjadi lokasi PKL atau merekrut alumni melalui BKK."
        />
        <form
          className="card-elevated mt-10 grid gap-5 p-7 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const company = String(data.get("company") ?? "").trim();
            if (!company) {
              toast.error("Nama perusahaan wajib diisi.");
              return;
            }
            toast.success(`Terima kasih! Pengajuan kemitraan dari ${company} telah kami terima.`);
            e.currentTarget.reset();
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="company">Nama Perusahaan</Label>
            <Input id="company" name="company" placeholder="PT Contoh Teknologi" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pic">Nama PIC</Label>
            <Input id="pic" name="pic" placeholder="Nama penanggung jawab" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="hr@perusahaan.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">No. Telepon / WhatsApp</Label>
            <Input id="phone" name="phone" placeholder="08xxxxxxxxxx" required />
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <Label htmlFor="need">Kebutuhan Kerja Sama</Label>
            <Textarea
              id="need"
              name="need"
              rows={4}
              placeholder="Contoh: menerima 10 siswa PKL jurusan SIJA, atau rekrutmen 3 Network Engineer."
            />
          </div>
          <Button type="submit" size="lg" className="sm:col-span-2">
            <Handshake className="mr-1.5 size-4" />
            Kirim Pengajuan Kemitraan
          </Button>
        </form>
      </section>
    </div>
  );
}
