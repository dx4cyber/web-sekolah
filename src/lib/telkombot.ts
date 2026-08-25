export type BotMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export function newId() {
  return Math.random().toString(36).substring(2, 9);
}

export const QUICK_SUGGESTIONS = [
  "Syarat PPDB",
  "Program Keahlian",
  "Layanan BLUD",
  "BKK & Lowongan",
  "Program PKL",
];

const KB: { keys: string[]; answer: string }[] = [
  {
    keys: ["ppdb", "syarat", "daftar", "pendaftaran", "masuk"],
    answer:
      "**Syarat PPDB 2026/2027 SMK Telkom Sidoarjo:**\n1. Lulusan SMP/MTs sederajat\n2. Melengkapi berkas pendaftaran online\n3. Mengikuti tes seleksi.",
  },
  {
    keys: ["jurusan", "program", "keahlian", "sija", "tjat", "transmisi"],
    answer:
      "Kami membuka **2 program keahlian resmi**:\n- **SIJA** (Sistem Informatika Network & Aplikasi)\n- **TJAT** (Teknik Jaringan Akses Telekomunikasi)",
  },
  {
    keys: ["blud", "pesan", "jasa", "layanan", "produk", "harga"],
    answer:
      "**Cara memesan layanan BLUD:**\n1. Buka halaman Produk BLUD\n2. Pilih produk/jasa yang dibutuhkan.",
  },
  {
    keys: ["bkk", "kerja", "lowongan", "alumni", "karier", "career"],
    answer:
      "**BKK (Bursa Kerja Khusus)** menyalurkan alumni ke mitra industri teknologi dan telekomunikasi.",
  },
  {
    keys: ["pkl", "magang", "prakerin", "industri"],
    answer:
      "Program **PKL/Magang** berlangsung 3–6 bulan di mitra seperti Telkom Group.",
  },
  {
    keys: ["biaya", "spp", "beasiswa", "investasi"],
    answer:
      "Untuk informasi rinci mengenai **Biaya & SPP**, silakan hubungi kontak PPDB kami atau cek halaman PPDB.",
  },
];

export function askTelkomBot(query: string): string {
  const q = query.toLowerCase();
  for (const item of KB) {
    if (item.keys.some((key) => q.includes(key))) {
      return item.answer;
    }
  }
  return "Maaf, saya belum memahami pertanyaan tersebut. Silakan tanyakan hal lain seputar PPDB, Jurusan (SIJA/TJAT), BLUD, atau BKK SMK Telkom Sidoarjo.";
}