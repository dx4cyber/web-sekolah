import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ClipboardList,
  Upload,
  FileCheck2,
  Megaphone,
  UserCheck,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MAJORS } from "@/lib/school-data";
import { SectionHead } from "./index";

export const Route = createFileRoute("/ppdb")({
  head: () => ({
    meta: [
      { title: "PPDB 2026/2027 — SMK Telkom Sidoarjo" },
      {
        name: "description",
        content:
          "Pendaftaran Peserta Didik Baru SMK Telkom Sidoarjo TA 2026/2027: alur pendaftaran, formulir online, rincian biaya, dan beasiswa prestasi.",
      },
      { property: "og:title", content: "PPDB 2026/2027 — SMK Telkom Sidoarjo" },
      {
        property: "og:description",
        content: "Daftar online, unggah berkas, ikuti seleksi, dan raih beasiswa prestasi.",
      },
    ],
  }),
  component: Ppdb,
});

const STEPS = [
  { icon: ClipboardList, title: "Pendaftaran Online", desc: "Isi formulir pendaftaran di halaman ini." },
  { icon: Upload, title: "Upload Berkas", desc: "Unggah rapor, KK, akta, dan foto formal." },
  { icon: FileCheck2, title: "Tes Seleksi", desc: "Tes akademik, logika, dan wawancara." },
  { icon: Megaphone, title: "Pengumuman", desc: "Hasil seleksi dikirim via email & WhatsApp." },
  { icon: UserCheck, title: "Daftar Ulang", desc: "Pelunasan administrasi dan pengukuran seragam." },
];

const FEES = [
  { item: "Uang Pendaftaran", amount: "Rp 300.000", note: "Sekali bayar, non-refundable" },
  { item: "Uang Pangkal", amount: "Rp 6.500.000", note: "Dapat diangsur hingga 3 kali" },
  { item: "SPP Bulanan", amount: "Rp 750.000", note: "Termasuk praktikum & lab" },
  { item: "Seragam & Perlengkapan", amount: "Rp 1.850.000", note: "5 set seragam + atribut" },
  { item: "Sertifikasi Kompetensi", amount: "Rp 1.200.000", note: "Dibayar di kelas XI" },
];

const SCHOLARSHIPS = [
  { title: "Beasiswa Akademik", value: "Potongan 50% – 100%", req: "Rata-rata rapor ≥ 88 & peringkat 1–3" },
  { title: "Beasiswa Prestasi Lomba", value: "Potongan 50% – 100%", req: "Juara olimpiade/LKS tingkat kota ke atas" },
  { title: "Beasiswa Tahfidz", value: "Potongan 25% – 75%", req: "Hafalan minimal 5 juz bersertifikat" },
  { title: "Beasiswa Afirmasi", value: "Potongan 25% – 50%", req: "Kartu bantuan pemerintah / surat keterangan" },
];

function Ppdb() {
  const [major, setMajor] = useState("");
  const [fileName, setFileName] = useState("");
  const [reportFile, setReportFile] = useState<File | null>(null);

  return (
    <div>
      <section className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4">
            <Badge className="border-0 bg-primary text-primary-foreground">
              Kuota Terbatas · Gelombang 1
            </Badge>
            <h1 className="font-display text-3xl font-extrabold text-charcoal-foreground sm:text-4xl lg:text-5xl">
              Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-charcoal-foreground/80 sm:text-base">
              Bergabunglah bersama SMK Telkom Sidoarjo dan siapkan masa depanmu di bidang jaringan,
              perangkat lunak, dan telekomunikasi.
            </p>
          </div>
        </div>
        <div className="h-2 w-full bg-primary" />
      </section>

      {/* ALUR */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Alur Pendaftaran"
          title="Lima Langkah Menjadi Siswa Baru"
          desc="Proses transparan, cepat, dan dapat dipantau secara online."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card-elevated relative p-6">
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <s.icon className="size-6 text-primary" />
              <h3 className="mt-4 text-base font-bold text-charcoal">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FORM */}
      <section className="section-muted">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Formulir Online"
            title="Formulir Pendaftaran Siswa Baru"
            desc="Isi data dengan benar. Konfirmasi akan dikirim melalui WhatsApp dan email."
          />
          <form
            className="card-elevated mt-10 grid gap-5 p-7 sm:grid-cols-2"
            onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const name = String(data.get("name") ?? "").trim();

  if (!name || !major) {
    toast.error("Lengkapi nama lengkap dan pilihan jurusan.");
    return;
  }

  if (!reportFile) {
  toast.error("Berkas rapor wajib diunggah.");
  return;
}

data.set("report", reportFile, reportFile.name);

  data.set("major", major);

  try {
    const response = await fetch("/api/ppdb", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.message ?? "Pendaftaran gagal.");
      return;
    }

    toast.success(
      `Terima kasih, ${name}! Data berhasil disimpan. ID pendaftaran: ${result.id}`
    );

    form.reset();
    setMajor("");
    setFileName("");
  } catch (error) {
    console.error(error);
    toast.error("Server tidak dapat dihubungi.");
  }
}}
          >
            <Field label="Nama Lengkap" name="name" placeholder="Nama sesuai akta" required />
            <Field label="NISN" name="nisn" placeholder="10 digit NISN" maxLength={10} required />
            <Field
              label="Asal Sekolah"
              name="school"
              placeholder="SMP/MTs asal"
              className="sm:col-span-2"
              required
            />
            <div className="grid gap-2">
              <Label>Pilihan Jurusan</Label>
              <Select value={major} onValueChange={setMajor}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih program keahlian" />
                </SelectTrigger>
                <SelectContent>
                  {MAJORS.map((m) => (
                    <SelectItem key={m.code} value={m.code}>
                      {m.code} — {m.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Field label="No. WhatsApp" name="whatsapp" placeholder="08xxxxxxxxxx" required />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="nama@email.com"
              className="sm:col-span-2"
              required
            />
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="rapor">Unggah Berkas Rapor (PDF/JPG, maks. 5 MB)</Label>
              <label
                htmlFor="rapor"
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input bg-background px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary"
              >
                <Upload className="size-5 text-primary" />
                {fileName || "Klik untuk memilih berkas rapor"}
              </label>
              <input
                id="rapor"
                name="rapor"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => {
                const file = e.target.files?.[0] ?? null;

                setReportFile(file);
                setFileName(file?.name ?? "");
                }}
              />
            </div>
            <Button type="submit" size="lg" className="sm:col-span-2">
              <GraduationCap className="mr-1.5 size-4" />
              Kirim Pendaftaran
            </Button>
          </form>
        </div>
      </section>

      {/* BIAYA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Investasi Pendidikan"
          title="Rincian Biaya &amp; Beasiswa"
          desc="Rincian resmi TA 2026/2027 beserta skema beasiswa yang tersedia."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="card-elevated overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-charcoal text-charcoal-foreground">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Komponen</th>
                  <th className="px-5 py-3 text-right font-semibold">Nominal</th>
                </tr>
              </thead>
              <tbody>
                {FEES.map((f) => (
                  <tr key={f.item} className="border-t border-border">
                    <td className="px-5 py-4">
                      <p className="font-medium text-charcoal">{f.item}</p>
                      <p className="text-xs text-muted-foreground">{f.note}</p>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold whitespace-nowrap text-primary">
                      {f.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {SCHOLARSHIPS.map((s) => (
              <article key={s.title} className="card-elevated p-6">
                <Sparkles className="size-5 text-primary" />
                <h3 className="mt-3 text-base font-bold text-charcoal">{s.title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{s.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.req}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  className,
  ...props
}: React.ComponentProps<typeof Input> & { label: string; name: string }) {
  return (
    <div className={`grid gap-2 ${className ?? ""}`}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} {...props} />
    </div>
  );
}
