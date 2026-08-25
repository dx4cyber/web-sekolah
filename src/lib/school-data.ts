export const SCHOOL = {
  name: "SMK Telkom Sidoarjo",
  tagline: "Center of Excellence & Digital Telecommunication School",
  address: "Jl. Pecantingan No.35, Sekardangan, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61215",
  phone: "(031) 8961141",
  whatsapp: "+62 812-3456-7890",
  email: "info@smktelkom-sda.sch.id",
  hours: "Senin – Jumat, 07.00 – 16.00 WIB",
  mapEmbed:
    "https://www.google.com/maps?q=SMK%20Telkom%20Sidoarjo&z=16&output=embed",
} as const;

export const MAJORS = [
  {
    code: "SIJA",
    title: "Sistem Informasi Jaringan dan Aplikasi",
    badge: "Program 4 Tahun",
    desc: "Kompetensi keahlian berbasis Teknologi Informasi dan Komunikasi yang mencakup infrastruktur jaringan, sistem jaringan cloud, dan pengembangan aplikasi.",
    skills: ["Cloud Computing", "System Administration", "Web & Mobile App", "Database & Security"],
  },
  {
    code: "TJAT",
    title: "Teknik Jaringan Akses Telekomunikasi",
    badge: "Program 3 Tahun",
    desc: "Melatih siswa memahami, mengoperasikan, dan memelihara perangkat utama serta jaringan telekomunikasi berbasis Fiber Optic, Radio, dan Tembaga.",
    skills: ["Fiber Optic (FTTH)", "Radio & Transmisi", "Instalasi Jaringan Akses", "Mikrotik/Cisco"],
  },
] as const;

export const STATS = [
  { value: "840+", label: "Total Siswa Aktif" },
  { value: "1.372+", label: "Alumni Tersebar di Industri" },
  { value: "50+", label: "Mitra Industri Aktif" },
  { value: "100+", label: "Prestasi & Inovasi Siswa" },
];

export const PARTNERS = [
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
  "Huawei",
];

export const ALUMNI = [
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
    company: "Jagoan Hosting", // <-- Sentuhan untuk juri lomba
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

export const ACHIEVEMENTS = [
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
