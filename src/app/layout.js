import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "KKM Universitas Banten Jaya - Kelompok 12 | Kelurahan Dalung",
  description:
    "Website resmi KKM Universitas Banten Jaya Kelompok 12 di Kelurahan Dalung. Informasi kegiatan, dokumentasi, dan laporan pengabdian masyarakat.",
  icons: {
    icon: "/logo.png", // favicon (ukuran kecil, misal 32x32)
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "KKM UNBAJA Kelompok 12 - Dalung",
    description: "Kegiatan KKM Universitas Banten Jaya di Kelurahan Dalung.",
    url: "https://kkm12unbajadalung.my.id", // ganti dengan URL sebenarnya jika sudah tersedia
    siteName: "KKM UNBAJA Kelompok 12",
    images: [
      {
        url: "/logo.png", // pastikan ukuran minimal 1200x630 untuk hasil maksimal
        width: 1200,
        height: 630,
        alt: "Logo KKM UNBAJA Kelompok 12",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
